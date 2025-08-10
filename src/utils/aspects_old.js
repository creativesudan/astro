export function getPlanetaryAspects(kundli, planetsData) {
    const aspects = [];
  
    // Extract planet positions by planet.no with house and degInSign
    const planetPositions = {};
  
    // kundli expected shape: kundli = { house_1: {...}, house_2: {...}, ... }
    for (const [houseKey, house] of Object.entries(kundli)) {
      if (!house.planets) continue;
      const houseNum = parseInt(houseKey.split("_")[1]);
  
      for (const planet of house.planets) {
        planetPositions[planet.no] = {
          houseNum,
          degInSign: planet.degInSign,
          name: planet.name,
        };
      }
    }
  
    // Aspect orb limit (degrees)
    const ORB_LIMIT = 3;
  
    // Calculate difference between two degrees, accounting for 360 wrap
    function degreeDifference(deg1, deg2) {
      let diff = Math.abs(deg1 - deg2);
      if (diff > 180) diff = 360 - diff;
      return diff;
    }
  
    // Degree impact helper for strength/effect
    const getDegreeImpact = (planetName, degInSign) => {
      const exaltationDegrees = {
        Sun: 10,
        Moon: 3,
        Mars: 28,
        Mercury: 15,
        Jupiter: 5,
        Venus: 27,
        Saturn: 20,
      };
  
      let modifier = 0;
  
      // Middle of sign is 15°, closeness adds to strength
      const distFromMiddle = Math.abs(degInSign - 15);
      if (distFromMiddle <= 5) modifier += 0.2;
      else if (distFromMiddle >= 13) modifier -= 0.2;
  
      // Near exaltation adds strength
      if (exaltationDegrees[planetName] !== undefined) {
        const exaltDist = Math.abs(degInSign - exaltationDegrees[planetName]);
        if (exaltDist <= ORB_LIMIT) modifier += 0.3;
      }
  
      return modifier;
    };
  
    // Evaluate strength & effect labels
    const evaluateStrengthAndEffect = (planetName, degInSign) => {
      const degreeImpact = getDegreeImpact(planetName, degInSign);
      let strength = "Average";
      let effect = "Neutral";
      let strengthReason = "";
      let effectReason = "";
  
      if (degreeImpact > 0.25) {
        strength = "Strong";
        effect = "Positive";
        strengthReason = "Well-placed in sign degrees.";
        effectReason = "Likely to produce beneficial results.";
      } else if (degreeImpact < -0.25) {
        strength = "Weak";
        effect = "Negative";
        strengthReason = "Poor degree placement reduces strength.";
        effectReason = "May cause challenges or delays.";
      } else {
        strengthReason = "Degree placement is average.";
        effectReason = "Neutral influence.";
      }
  
      return { strength, effect, strengthReason, effectReason };
    };
  
    // Main aspect loop with orb check
    for (const planet of planetsData) {
      const position = planetPositions[planet.no];
      if (!position) continue;
  
      // For each drishti (aspect) this planet casts
      for (const aspect of planet.drishti) {
        // Calculate which house is aspected
        const aspectHouse =
          ((position.houseNum + aspect.no - 1) % 12) + 1; // 1 to 12
  
        // Check if there is a planet in the aspected house to validate orb?
        // Note: kundli keys are "house_1", "house_2", etc
        const targetHouse = kundli[`house_${aspectHouse}`];
        if (!targetHouse || !targetHouse.planets) continue;
  
        // Check orb for aspect applying - must check each planet in aspected house
        // Compare planet degree with aspected planet degrees within orb
        for (const targetPlanet of targetHouse.planets) {
          const posPlanetDeg = position.degInSign ?? 0;
          const targetPlanetDeg = targetPlanet.degInSign ?? 0;
  
          // Approximate aspect angle based on house difference:
          // Each house = 30 degrees, so angle = aspect.no * 30 degrees
          const aspectAngle = aspect.no * 30;
          // Calculate actual difference between planet positions in degrees (mod 360)
          // Here degInSign is only within the sign (0-30), so to get full zodiac degrees,
          // we need houseNum * 30 + degInSign to get absolute zodiac degree
          const planetZodiacDegree =
            (position.houseNum - 1) * 30 + posPlanetDeg;
          const targetZodiacDegree =
            (aspectHouse - 1) * 30 + targetPlanetDeg;
  
          let actualDegreeDiff = Math.abs(planetZodiacDegree - targetZodiacDegree);
          if (actualDegreeDiff > 180) actualDegreeDiff = 360 - actualDegreeDiff;
  
          // Difference from exact aspect angle
          const orbDifference = Math.abs(actualDegreeDiff - aspectAngle);
  
          if (orbDifference <= ORB_LIMIT) {
            // Aspect applies to this planet at this house
  
            const { strength, effect, strengthReason, effectReason } =
              evaluateStrengthAndEffect(planet.name, position.degInSign);
  
            aspects.push({
              planet_no: planet.no,
              planet_name: planet.name,
              house_from: position.houseNum,
              house_aspected: aspectHouse,
              type: aspect.type,
              strength,
              effect,
              strengthReason,
              effectReason,
            });
          }
        }
      }
    }
  
    return aspects;
  }
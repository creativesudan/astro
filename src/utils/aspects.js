const signMap = {
  Aries: 1,
  Taurus: 2,
  Gemini: 3,
  Cancer: 4,
  Leo: 5,
  Virgo: 6,
  Libra: 7,
  Scorpio: 8,
  Sagittarius: 9,
  Capricorn: 10,
  Aquarius: 11,
  Pisces: 12
};

export function getPlanetaryAspects(kundliData, planetsList) {
  if (!kundliData?.houses) return [];

  const benefics = ["Jupiter", "Venus", "Mercury", "Moon"];
  const malefics = ["Sun", "Mars", "Saturn", "Rahu", "Ketu"];

  const dignityMap = {
    Sun: { exalted: 1, debilitated: 7, own: [5] },
    Moon: { exalted: 2, debilitated: 8, own: [4] },
    Mars: { exalted: 10, debilitated: 4, own: [1, 8] },
    Mercury: { exalted: 6, debilitated: 12, own: [3, 6] },
    Jupiter: { exalted: 4, debilitated: 10, own: [9, 12] },
    Venus: { exalted: 12, debilitated: 6, own: [2, 7] },
    Saturn: { exalted: 7, debilitated: 1, own: [10, 11] },
    Rahu: { exalted: 2, debilitated: 8 },
    Ketu: { exalted: 8, debilitated: 2 }
  };

  let aspects = [];

  kundliData.houses.forEach(house => {
    const rashiNum = typeof house.rashi === "string" ? signMap[house.rashi] : house.rashi;

    house.planets.forEach(planet => {
      let aspectHouses = [((house.house + 6 - 1) % 12) + 1]; // default 7th

      if (planet.name === "Mars") {
        aspectHouses.push(((house.house + 3 - 1) % 12) + 1);
        aspectHouses.push(((house.house + 7 - 1) % 12) + 1);
      }
      if (planet.name === "Jupiter") {
        aspectHouses.push(((house.house + 4 - 1) % 12) + 1);
        aspectHouses.push(((house.house + 8 - 1) % 12) + 1);
      }
      if (planet.name === "Saturn") {
        aspectHouses.push(((house.house + 2 - 1) % 12) + 1);
        aspectHouses.push(((house.house + 9 - 1) % 12) + 1);
      }

      aspectHouses = [...new Set(aspectHouses)];

      aspectHouses.forEach(aspectedHouse => {
        let strength = "Medium";
        let effect = "Neutral";

        const dignityData = dignityMap[planet.name];
        if (dignityData) {
          if (dignityData.exalted === rashiNum) strength = "Strong";
          else if (dignityData.debilitated === rashiNum) strength = "Weak";
          else if (dignityData.own?.includes(rashiNum)) strength = "Strong";
        }

        if (benefics.includes(planet.name)) effect = "Positive";
        if (malefics.includes(planet.name)) effect = "Challenging";

        aspects.push({
          planet_name: planet.name,
          house_from: house.house,
          house_aspected: aspectedHouse,
          type: "Full Aspect",
          strength,
          effect,
          strengthReason: `${planet.name} in sign ${house.rashi} is ${strength} due to dignity rules`,
          effectReason: `${planet.name} is a ${benefics.includes(planet.name) ? "benefic" : "malefic"} planet`
        });
      });
    });
  });

  return aspects;
}

// महादशाओं का क्रम एवं अवधि (वर्षों में)
const dashaSequence = [
    { name: "Ketu", years: 7 },
    { name: "Venus", years: 20 },
    { name: "Sun", years: 6 },
    { name: "Moon", years: 10 },
    { name: "Mars", years: 7 },
    { name: "Rahu", years: 18 },
    { name: "Jupiter", years: 16 },
    { name: "Saturn", years: 19 },
    { name: "Mercury", years: 17 },
  ];
  
  const totalDashaYears = 120; // कुल महादशा वर्ष
  
  /**
   * विमशोत्तरी दशा प्रारंभ एवं भविष्य की दशा अवधि निकालने का फंक्शन
   * 
   * @param {number} moonNakshatraDegree - Moon की नक्षत्र स्थिति (0 से 27 के बीच fractional)
   * @param {Date} birthDate - जन्म की तारीख एवं समय (यदि जरुरत हो तो बढ़ाया जा सकता है)
   * @param {number} yearsAfterBirth - जन्म के बाद से बीते साल (वर्तमान के लिए उपयोगी)
   * @returns {object} वर्तमान महादशा, बची अवधि, आने वाली दशाएँ, अंतर्दशा
   */
  function calculateVimshottariDashaDetailed(moonNakshatraDegree, yearsAfterBirth = 0) {
    // नक्षत्र को 27 भागों में माना गया है
    // प्रत्येक भाग से महादशा ग्रह निर्धारित होती है
    const nakshatraIndex = Math.floor(moonNakshatraDegree);
  
    // नक्षत्र के अनुसार प्रारंभ महादशा ग्रह
    const nakshatraToPlanetMap = [
      "Ketu", "Ketu", "Ketu",       // 0-2
      "Venus", "Venus", "Venus",    // 3-5
      "Sun", "Sun", "Sun",          // 6-8
      "Moon", "Moon", "Moon",       // 9-11
      "Mars", "Mars", "Mars",       // 12-14
      "Rahu", "Rahu", "Rahu",       // 15-17
      "Jupiter", "Jupiter", "Jupiter",// 18-20
      "Saturn", "Saturn", "Saturn",    // 21-23
      "Mercury", "Mercury", "Mercury"  // 24-26
    ];
  
    const startPlanetName = nakshatraToPlanetMap[nakshatraIndex];
    const startPlanetIndex = dashaSequence.findIndex(d => d.name === startPlanetName);
  
    const fractionalPart = moonNakshatraDegree - nakshatraIndex; // fractional degree in nakshatra
  
    // शेष बची दशा अवधि (Mahadasha) शुरुआत वाले ग्रह की
    const startPlanetDashaYears = dashaSequence[startPlanetIndex].years;
    const remainingYearsInStartDasha = startPlanetDashaYears * (1 - fractionalPart);
  
    // कुल समय में बीती अवधि को घटाएं और महादशा समय को आगे बढ़ाएं ताकि वर्तमान दशा ज्ञात हो सके
    let timeLeft = remainingYearsInStartDasha - yearsAfterBirth;
    let currentDashaIndex = startPlanetIndex;
  
    // यदि बीता समय बची अवधि से ज्यादा हो, तो आगे के दशाओं में जाएं
    while (timeLeft < 0) {
      currentDashaIndex = (currentDashaIndex + 1) % dashaSequence.length;
      timeLeft += dashaSequence[currentDashaIndex].years;
    }
  
    // वर्तमान दशा ग्रह और उसकी बची अवधि
    const currentDasha = {
      name: dashaSequence[currentDashaIndex].name,
      remainingYears: timeLeft,
    };
  
    // आने वाली दशाएं (Next Dashas) क्रमशः लिस्ट करें (वर्तमान वाला भी शुरुआत में)
    const nextDashas = [];
    let index = currentDashaIndex;
    let yearAccumulator = timeLeft;
    let totalDurationChecked = 0;
  
    // आगे आने वाली दशा वर्षों सहित प्राप्त करें (जैसे अगले 120 वर्ष का चक्र)
    while (totalDurationChecked < totalDashaYears) {
      const d = dashaSequence[index];
      const duration = (index === currentDashaIndex) ? yearAccumulator : d.years;
      nextDashas.push({ name: d.name, years: duration });
      totalDurationChecked += duration;
      index = (index + 1) % dashaSequence.length;
    }
  
    // अंतर्दशा (Antardasha) का बेसिक कैलकुलेशन (महादशा का ग्रसित ग्रहों में अंतर्दशा)
    // महादशा ग्रह के वर्षों को 9 भागों में बांटा जाता है; प्रत्येक भाग अंतर्दशा
    function getAntarDashas(mahadashaPlanetName, durationYears) {
      const antardashaPlanets = [...dashaSequence]; // 9 ग्रह
      const antarDashas = [];
      for (const planet of antardashaPlanets) {
        antarDashas.push({
          name: planet.name,
          years: (planet.years / 120) * durationYears
        });
      }
      return antarDashas;
    }
  
    const currentAntarDashas = getAntarDashas(currentDasha.name, currentDasha.remainingYears);
  
    return {
      currentDasha,
      nextDashas,
      currentAntarDashas,
    };
  }
  
  // ----- Usage Example -----
  const moonNakshatraDegreeExample = 12.8; // Moon का नक्षत्र डिग्री (0-27 में fractional)
  const yearsAfterBirthExample = 28; // जन्म के बाद पूर्ण हुए वर्ष (calculate के लिए)
  
  const dashaDetails = calculateVimshottariDashaDetailed(moonNakshatraDegreeExample, yearsAfterBirthExample);
  
  console.log("Current Dasha:", dashaDetails.currentDasha.name);
  console.log("Remaining Years in Current Dasha:", dashaDetails.currentDasha.remainingYears.toFixed(2));
  console.log("Next Dashas Sequence (names & durations):", dashaDetails.nextDashas);
  console.log("Current Antar Dashas:", dashaDetails.currentAntarDashas);
  
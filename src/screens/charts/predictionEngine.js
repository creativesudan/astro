// PredictionEngine.js
import { kpmDashaSequence } from "./kpsystem"; // वही sequence जो KPSystem में है
import { houses } from "../App"; // App.js से data import करें

// Helper: किसी तारीख़ पर महादशा/अंतर/प्रत्यंतर निकालना
function getDashaForDate(degInZodiac, birthDate, targetDate) {
  // जन्म के स्टार से days offset निकालें
  const totalYears = 120;
  const nakshatraSpan = 360 / 27;
  const startIndex = Math.floor(degInZodiac / nakshatraSpan) % 9;
  const starFraction = (degInZodiac % nakshatraSpan) / nakshatraSpan;
  const yearsLeftInStart = kpmDashaSequence[startIndex].years * (1 - starFraction);

  // महादशा loop
  let date = new Date(birthDate);
  let idx = startIndex;
  let mahaLord, antarLord, pratyaLord;

  // find Maha
  let remaining = yearsLeftInStart;
  if (targetDate < new Date(date.getFullYear() + remaining, date.getMonth(), date.getDate())) {
    mahaLord = kpmDashaSequence[idx].name;
  } else {
    date.setFullYear(date.getFullYear() + Math.floor(remaining));
    date.setMonth(date.getMonth() + Math.round((remaining % 1) * 12));
    idx = (idx + 1) % 9;

    while (true) {
      let yrs = kpmDashaSequence[idx].years;
      if (targetDate < new Date(date.getFullYear() + yrs, date.getMonth(), date.getDate())) {
        mahaLord = kpmDashaSequence[idx].name;
        break;
      }
      date.setFullYear(date.getFullYear() + yrs);
      idx = (idx + 1) % 9;
    }
  }

  // find Antar
  const mahaYears = kpmDashaSequence.find(d => d.name === mahaLord).years;
  let antarDate = new Date(date);
  for (let i = 0; i < 9; i++) {
    const sub = kpmDashaSequence[i];
    const antarYears = (sub.years / 120) * mahaYears;
    if (targetDate < new Date(antarDate.getFullYear() + Math.floor(antarYears), antarDate.getMonth(), antarDate.getDate())) {
      antarLord = sub.name;
      break;
    }
    antarDate.setFullYear(antarDate.getFullYear() + Math.floor(antarYears));
    antarDate.setMonth(antarDate.getMonth() + Math.round((antarYears % 1) * 12));
  }

  // find Pratyantar
  const antarYearsVal = (kpmDashaSequence.find(d => d.name === antarLord).years / 120) * mahaYears;
  let pratyaDate = new Date(antarDate);
  for (let i = 0; i < 9; i++) {
    const sub = kpmDashaSequence[i];
    const pratyaYears = (sub.years / 120) * antarYearsVal;
    if (targetDate < new Date(pratyaDate.getFullYear() + Math.floor(pratyaYears), pratyaDate.getMonth(), pratyaDate.getDate())) {
      pratyaLord = sub.name;
      break;
    }
    pratyaDate.setFullYear(pratyaDate.getFullYear() + Math.floor(pratyaYears));
    pratyaDate.setMonth(pratyaDate.getMonth() + Math.round((pratyaYears % 1) * 12));
  }

  return { mahaLord, antarLord, pratyaLord };
}

// Helper: ग्रह के आधार पर बेसिक फल
function getPlanetEffect(planetName, kundliData) {
  // ग्रह किस भाव में है देखें
  let foundHouse = null;
  kundliData.houses.forEach(h => {
    if (h.planets.some(p => p.name?.toLowerCase() === planetName.toLowerCase())) {
      foundHouse = h.house;
    }
  });
  if (!foundHouse) return `${planetName}: स्थिति उपलब्ध नहीं`;

  const houseData = houses.find(h => h.no === foundHouse);
  const problems = houseData?.problems.filter(p => p.planet.toLowerCase() === planetName.toLowerCase()) || [];
  const benefits = houseData?.benefits.filter(p => p.planet.toLowerCase() === planetName.toLowerCase()) || [];

  return `${planetName} भाव ${foundHouse}: ${benefits.map(b=>b.effect).join(", ")} ${problems.map(p=>"(⚠ "+p.effect+")").join(", ")}`;
}

// Main wrapper
export function getTripleDashaPrediction(kundliData, birthDate, targetDate) {
  // चंद्रमा की डिग्री से महादशा शुरू
  const planetsList = kundliData.houses.flatMap(h => h.planets || []);
  const moon = planetsList.find(p => p.no === 2);
  const moonHouse = kundliData.houses.find(h => h.planets.some(pl => pl.no === 2));
  const moonDegInZodiac = moon?.deg || ((moonHouse?.rashi - 1) * 30 + moon?.degInSign);

  const { mahaLord, antarLord, pratyaLord } = getDashaForDate(moonDegInZodiac, birthDate, targetDate);

  const mahaEffect = getPlanetEffect(mahaLord, kundliData);
  const antarEffect = getPlanetEffect(antarLord, kundliData);
  const pratyaEffect = getPlanetEffect(pratyaLord, kundliData);

  return {
    date: targetDate,
    dasha: `${mahaLord} → ${antarLord} → ${pratyaLord}`,
    interpretation: [mahaEffect, antarEffect, pratyaEffect]
  };
}

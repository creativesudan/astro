import React from "react";
import PropTypes from "prop-types";

// Dasha sequence config
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

// Nakshatra-to-planet mapping (3 slots each, total 27)
const nakshatraToPlanetMap = [
  "Ketu","Ketu","Ketu",
  "Venus","Venus","Venus",
  "Sun","Sun","Sun",
  "Moon","Moon","Moon",
  "Mars","Mars","Mars",
  "Rahu","Rahu","Rahu",
  "Jupiter","Jupiter","Jupiter",
  "Saturn","Saturn","Saturn",
  "Mercury","Mercury","Mercury"
];

// Helper: Calculate Dasha Year-wise timeline
function calculateDashaYearWise(moonNakshatraDegree, birthDate, totalYears = 50) {
  // ✅ Safety: Ensure degree is a valid number
  if (typeof moonNakshatraDegree !== "number" || isNaN(moonNakshatraDegree)) {
    console.warn("Invalid moonNakshatraDegree:", moonNakshatraDegree);
    moonNakshatraDegree = 0;
  }

  // Nakshatra index (0–26)
  const nakshatraIndex = Math.floor((moonNakshatraDegree % 360) / (360 / 27));

  const startPlanetName = nakshatraToPlanetMap[nakshatraIndex] ?? "Ketu";

  let startPlanetIndex = dashaSequence.findIndex(d => d.name === startPlanetName);
  if (startPlanetIndex === -1) {
    console.warn("Planet not found in sequence:", startPlanetName);
    startPlanetIndex = 0; // Default to first planet
  }

  // Fractional part of nakshatra
  const nakshatraStartDeg = nakshatraIndex * (360 / 27);
  const fractionalPart = (moonNakshatraDegree - nakshatraStartDeg) / (360 / 27);

  const startPlanetDuration = dashaSequence[startPlanetIndex].years;
  let remainingYearsInStartDasha = startPlanetDuration * (1 - fractionalPart);

  // Build timeline
  let timeLeft = remainingYearsInStartDasha;
  let currentDashaIndex = startPlanetIndex;
  const timeline = [];
  let yearPointer = 0;

  while (yearPointer < totalYears) {
    const dashaYearCount = Math.ceil(timeLeft);

    for (let i = 0; i < dashaYearCount && yearPointer < totalYears; i++, yearPointer++) {
      const yearSinceBirth = yearPointer + 1;
      const startDate = new Date(birthDate);
      startDate.setFullYear(startDate.getFullYear() + yearPointer);
      const yearNum = startDate.getFullYear();
      const monthName = startDate.toLocaleString("default", { month: "long" });

      timeline.push({
        yearSinceBirth,
        calendarYear: yearNum,
        calendarMonth: monthName,
        dasha: dashaSequence[currentDashaIndex].name,
        dashaYearNum: i + 1,
        dashaYearsTotal: dashaSequence[currentDashaIndex].years,
      });
    }

    currentDashaIndex = (currentDashaIndex + 1) % dashaSequence.length;
    timeLeft = dashaSequence[currentDashaIndex].years;
  }

  return timeline;
}

export default function DashaTable({ moonNakshatraDegree, birthDate, totalYears }) {
  if (!(birthDate instanceof Date) || isNaN(birthDate)) {
    return <p>❌ Invalid birth date provided.</p>;
  }

  const dashaTimeline = calculateDashaYearWise(moonNakshatraDegree, birthDate, totalYears);

  return (
    <div>
      <h3>Vimshottari Dasha – Year-wise for next {totalYears} years</h3>
      <table border="1" width="100%" cellPadding="8" style={{ borderCollapse: "collapse", marginTop: 8 }}>
        <thead>
          <tr>
            <th>Year Since Birth</th>
            <th>Calendar Year</th>
            <th>Calendar Month</th>
            <th>Dasha Planet</th>
            <th>Dasha Year (of period)</th>
            <th>Dasha Total Years (planet)</th>
          </tr>
        </thead>
        <tbody>
          {dashaTimeline.map((row, i) => (
            <tr key={i}>
              <td>{row.yearSinceBirth}</td>
              <td>{row.calendarYear}</td>
              <td>{row.calendarMonth}</td>
              <td>{row.dasha}</td>
              <td>{row.dashaYearNum}</td>
              <td>{row.dashaYearsTotal}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

DashaTable.propTypes = {
  moonNakshatraDegree: PropTypes.number,
  birthDate: PropTypes.instanceOf(Date).isRequired,
  totalYears: PropTypes.number,
};

DashaTable.defaultProps = {
  moonNakshatraDegree: 0,
  totalYears: 50,
};

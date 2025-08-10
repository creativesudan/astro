// DoshTable.jsx
import React, { useEffect, useState } from "react";

const manglikHouses = [1, 4, 7, 8, 12];

function DoshTable({ kundliData }) {
  const [doshList, setDoshList] = useState([]);

  // Existing Doshas

  const isManglik = () => {
    return manglikHouses.some(houseNumber => {
      const house = kundliData.houses?.find(h => h.house === houseNumber);
      return house?.planets?.some(planet => planet.no === 9); // Mars
    });
  };

  const hasGrahanDosh = () => {
    const grahanPlanets = [4, 7]; // Moon or Rahu
    for (const houseData of kundliData.houses || []) {
      const planetNos = (houseData.planets || []).map(p => p.no);
      if (planetNos.includes(1) && grahanPlanets.some(p => planetNos.includes(p))) {
        return true;
      }
    }
    return false;
  };

  const hasChandalDosh = () => {
    const chandalPlanets = [4, 7]; // Moon or Rahu
    for (const houseData of kundliData.houses || []) {
      const planetNos = (houseData.planets || []).map(p => p.no);
      if (planetNos.includes(3) && chandalPlanets.some(p => planetNos.includes(p))) {
        return true;
      }
    }
    return false;
  };

  const hasVishDosh = () => {
    const affectPlanets = [8]; // Saturn
    for (const houseData of kundliData.houses || []) {
      const planetNos = (houseData.planets || []).map(p => p.no);
      if (planetNos.includes(2) && affectPlanets.some(p => planetNos.includes(p))) { // Moon & Saturn conjunction
        return true;
      }
    }
    return false;
  };

  const getPlanetHouse = (planetNo) => {
    for (const houseData of kundliData.houses || []) {
      if ((houseData.planets || []).some(p => p.no === planetNo)) {
        return houseData.house;
      }
    }
    return null;
  };

  const hasKaalsarpDosh = () => {
    const rahuHouse = getPlanetHouse(4); // Rahu
    const ketuHouse = getPlanetHouse(7); // Ketu

    if (!rahuHouse || !ketuHouse) {
      return false;
    }

    let betweenHouses = [];
    let i = rahuHouse;
    while (i !== ketuHouse) {
      i = (i % 12) + 1;
      if (i !== ketuHouse) betweenHouses.push(i);
    }

    const mainPlanetNos = [1, 2, 3, 5, 6, 8, 9];
    const planetHouses = new Set();

    for (const houseData of kundliData.houses || []) {
      for (const planet of houseData.planets || []) {
        if (mainPlanetNos.includes(planet.no)) {
          planetHouses.add(houseData.house);
        }
      }
    }

    const planetHouseArray = Array.from(planetHouses);
    const allInBetween = planetHouseArray.every(h => betweenHouses.includes(h));

    return allInBetween && planetHouseArray.length >= 1;
  };

  // New Doshas

  const isShaniDosha = () => {
    // Saturn (6) in 1st house or Saturn conjunct Moon (4)
    for (const houseData of kundliData.houses || []) {
      const planetNos = (houseData.planets || []).map(p => p.no);
      if (planetNos.includes(6) && (houseData.house === 1 || planetNos.includes(4))) {
        return true;
      }
    }
    return false;
  };

  const isKemadrumaYoga = () => {
    // Moon (4) without planets in adjacent houses (2nd and 12th from Moon)
    const moonHouse = kundliData.houses?.find(h => (h.planets || []).some(p => p.no === 4));
    if (!moonHouse) return false;

    const houseBefore = moonHouse.house === 1 ? 12 : moonHouse.house - 1;
    const houseAfter = moonHouse.house === 12 ? 1 : moonHouse.house + 1;

    const hasPlanetsBefore = kundliData.houses?.some(h => h.house === houseBefore && (h.planets || []).length > 0);
    const hasPlanetsAfter = kundliData.houses?.some(h => h.house === houseAfter && (h.planets || []).length > 0);

    return !hasPlanetsBefore && !hasPlanetsAfter;
  };

  const isDaridraYoga = () => {
    // Malefic planets in 2nd or 11th house causing financial troubles
    const malefics = [1, 3, 6, 7, 8, 9]; // Sun, Mars, Saturn, Rahu, Ketu, Mars
    for (const houseData of kundliData.houses || []) {
      if ((houseData.house === 2 || houseData.house === 11) &&
          (houseData.planets || []).some(p => malefics.includes(p.no))) {
        return true;
      }
    }
    return false;
  };

  useEffect(() => {
    if (!kundliData.houses) {
      setDoshList([]);
      return;
    }

    const list = [];

    if (isManglik()) {
      list.push({
        key: "manglik",
        name: "Manglik",
        reason: `<b>Delay or problems in marriage</b><div>Mars in 1st, 4th, 7th, 8th, or 12th house</div>`,
      });
    }

    if (hasGrahanDosh()) {
      list.push({
        key: "grahanDosh",
        name: "Grahan Dosh",
        reason: `<b>Mental stress, obstacles, lack of clarity</b><div>Sun or Moon conjunct with Rahu/Ketu</div>`,
      });
    }

    if (hasChandalDosh()) {
      list.push({
        key: "chandalDosh",
        name: "Guru Chandal Dosh",
        reason: `<b>Confusion in beliefs, spiritual distortions</b><div>Jupiter is conjunct with Rahu/Ketu</div>`,
      });
    }

    if (hasVishDosh()) {
      list.push({
        key: "vishDosh",
        name: "Visha Dosh",
        reason: `<b>Depression, emotional burden</b><div>Saturn & Moon in conjunction</div>`,
      });
    }

    if (hasKaalsarpDosh()) {
      list.push({
        key: "kaalsarpDosh",
        name: "Kaal Sarp Dosh",
        reason: `<b>Delays, sudden ups/downs, struggles</b><div>All 7 planets placed between Rahu and Ketu</div>`,
      });
    }

    if (isShaniDosha()) {
      list.push({
        key: "shaniDosha",
        name: "Shani Dosha",
        reason: `<b>Saturn causing stress or delays</b><div>Saturn in 1st house or conjunct Moon</div>`,
      });
    }

    if (isKemadrumaYoga()) {
      list.push({
        key: "kemadrumaYoga",
        name: "Kemadruma Yoga",
        reason: `<b>Loneliness, mental unrest</b><div>Moon without planets in adjacent houses</div>`,
      });
    }

    if (isDaridraYoga()) {
      list.push({
        key: "daridraYoga",
        name: "Daridra Yoga",
        reason: `<b>Financial troubles</b><div>Malefic planets in 2nd or 11th house</div>`,
      });
    }

    setDoshList(list);
  }, [kundliData]);

  if (doshList.length === 0) {
    return <p>No Doshes detected.</p>;
  }

  return (
    <table
      style={{ width: "100%", borderCollapse: "collapse" }}
      border="1"
      cellPadding="8"
    >
      <thead>
        <tr>
          <th>Dosh</th>
          <th>Reason</th>
        </tr>
      </thead>
      <tbody>
        {doshList.map(({ key, name, reason }) => (
          <tr key={key}>
            <td>{name}</td>
            <td dangerouslySetInnerHTML={{ __html: reason }} />
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DoshTable;

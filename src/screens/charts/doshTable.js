// DoshTable.jsx
import React, { useEffect, useState } from "react";

// Manglik relevant houses (Mars)
const manglikHouses = [1, 4, 7, 8, 12];

// Utility: Find a planet in which house (returns first match)
const getPlanetHouse = (planetNo, kundli) => {
  for (const houseData of kundli.houses || []) {
    if ((houseData.planets || []).some(p => p.no === planetNo)) {
      return houseData.house;
    }
  }
  return null;
};

const DoshTable = ({ kundliData, transitSaturnHouse = null }) => {
  const [doshList, setDoshList] = useState([]);

  // --- Dosha Checks (All pure, stateless helpers) ---

  // Manglik Dosh: Mars in 1/4/7/8/12
  const isManglik = () => {
    return manglikHouses.some(houseNumber => {
      const house = kundliData.houses?.find(h => h.house === houseNumber);
      return house?.planets?.some(planet => planet.no === 9); // Mars
    });
  };

  // Grahan Dosh: Sun or Moon conjunct Rahu/Ketu
  const hasGrahanDosh = () => {
    const grahanPlanets = [4, 7]; // Rahu, Ketu
    for (const houseData of kundliData.houses || []) {
      const planetNos = (houseData.planets || []).map(p => p.no);
      if (
        (planetNos.includes(1) || planetNos.includes(2)) &&
        grahanPlanets.some(p => planetNos.includes(p))
      ) {
        return true;
      }
    }
    return false;
  };

  // Guru Chandal Dosh: Jupiter + Rahu/Ketu conjunct
  const hasChandalDosh = () => {
    const chandalPlanets = [4, 7]; // Rahu, Ketu
    for (const houseData of kundliData.houses || []) {
      const planetNos = (houseData.planets || []).map(p => p.no);
      if (planetNos.includes(3) && chandalPlanets.some(p => planetNos.includes(p))) {
        return true;
      }
    }
    return false;
  };

  // Visha Dosh: Moon & Saturn conjunction
  const hasVishDosh = () => {
    const affectPlanets = [8]; // Saturn
    for (const houseData of kundliData.houses || []) {
      const planetNos = (houseData.planets || []).map(p => p.no);
      if (planetNos.includes(2) && affectPlanets.some(p => planetNos.includes(p))) {
        return true;
      }
    }
    return false;
  };

  // Kaal Sarp Dosh: All 7 planets between Rahu & Ketu
  const hasKaalsarpDosh = () => {
    const rahuHouse = getPlanetHouse(4, kundliData); // Rahu
    const ketuHouse = getPlanetHouse(7, kundliData); // Ketu
    if (!rahuHouse || !ketuHouse) return false;

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

  // Shani Dosha: Saturn in 1st house or with Moon
  const isShaniDosha = () => {
    for (const houseData of kundliData.houses || []) {
      const planetNos = (houseData.planets || []).map(p => p.no);
      if (planetNos.includes(8) && (houseData.house === 1 || planetNos.includes(2))) {
        return true;
      }
    }
    return false;
  };

  // Kemadruma Yoga: Moon is lonely - no planets in houses before/after
  const isKemadrumaYoga = () => {
    const moonHouse = kundliData.houses?.find(h => (h.planets || []).some(p => p.no === 2));
    if (!moonHouse) return false;
    const houseBefore = moonHouse.house === 1 ? 12 : moonHouse.house - 1;
    const houseAfter = moonHouse.house === 12 ? 1 : moonHouse.house + 1;
    const hasPlanetsBefore = kundliData.houses?.some(h => h.house === houseBefore && (h.planets || []).length > 0);
    const hasPlanetsAfter = kundliData.houses?.some(h => h.house === houseAfter && (h.planets || []).length > 0);
    return !hasPlanetsBefore && !hasPlanetsAfter;
  };

  // Daridra Yoga: Malefics in 2nd or 11th
  const isDaridraYoga = () => {
    const malefics = [1, 3, 6, 7, 8, 9]; // Sun, Mars, Saturn, Rahu, Ketu, Mars
    for (const houseData of kundliData.houses || []) {
      if (
        (houseData.house === 2 || houseData.house === 11) &&
        (houseData.planets || []).some(p => malefics.includes(p.no))
      ) {
        return true;
      }
    }
    return false;
  };

  // Sade Sati: Saturn transiting Moon sign or its neighbours
  const isSadeSati = () => {
    if (!transitSaturnHouse) return false;
    const moonHouseObj = kundliData.houses?.find(h => (h.planets || []).some(p => p.no === 2));
    if (!moonHouseObj) return false;
    const moonHouse = moonHouseObj.house;
    // Houses one before/after
    const prevHouse = moonHouse === 1 ? 12 : moonHouse - 1;
    const nextHouse = moonHouse === 12 ? 1 : moonHouse + 1;
    return [prevHouse, moonHouse, nextHouse].includes(transitSaturnHouse);
  };

  // Pitru Dosha: Malefic in 5th or 9th
  const isPitruDosha = () => {
    const malefics = [4, 6, 8, 1, 7, 9]; // Rahu, Saturn, Ketu, Sun, Mars, Mars
    return kundliData.houses.some(
      h => (h.house === 5 || h.house === 9) && (h.planets || []).some(p => malefics.includes(p.no))
    );
  };

  // Gandmool Dosha (if nakshatra info exists)
  const isGandmoolDosha = () => {
    for (const h of kundliData.houses) {
      for (const p of h.planets || []) {
        // This assumes each planet has a 'nakshatra' property
        if (p.no === 2 && ["Ashlesha", "Jyeshtha", "Moola"].includes(p.nakshatra)) {
          return true;
        }
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
        reason: `<b>Delay or problems in marriage.</b><div>Mars in 1st, 4th, 7th, 8th, or 12th house.</div>`,
      });
    }
    if (hasGrahanDosh()) {
      list.push({
        key: "grahanDosh",
        name: "Grahan Dosh",
        reason: `<b>Mental stress, obstacles, lack of clarity.</b><div>Sun or Moon conjunct with Rahu/Ketu.</div>`,
      });
    }
    if (hasChandalDosh()) {
      list.push({
        key: "chandalDosh",
        name: "Guru Chandal Dosh",
        reason: `<b>Confusion in beliefs, spiritual distortions.</b><div>Jupiter is conjunct with Rahu/Ketu.</div>`,
      });
    }
    if (hasVishDosh()) {
      list.push({
        key: "vishDosh",
        name: "Visha Dosh",
        reason: `<b>Depression, emotional burden.</b><div>Saturn & Moon in conjunction.</div>`,
      });
    }
    if (hasKaalsarpDosh()) {
      list.push({
        key: "kaalsarpDosh",
        name: "Kaal Sarp Dosh",
        reason: `<b>Delays, sudden ups/downs, struggles.</b><div>All 7 planets placed between Rahu and Ketu.</div>`,
      });
    }
    if (isShaniDosha()) {
      list.push({
        key: "shaniDosha",
        name: "Shani Dosha",
        reason: `<b>Saturn causing stress or delays.</b><div>Saturn in 1st house or conjunct Moon.</div>`,
      });
    }
    if (isKemadrumaYoga()) {
      list.push({
        key: "kemadrumaYoga",
        name: "Kemadruma Yoga",
        reason: `<b>Loneliness, mental unrest.</b><div>Moon without planets in adjacent houses.</div>`,
      });
    }
    if (isDaridraYoga()) {
      list.push({
        key: "daridraYoga",
        name: "Daridra Yoga",
        reason: `<b>Financial troubles.</b><div>Malefic planets in 2nd or 11th house.</div>`,
      });
    }
    if (isSadeSati()) {
      list.push({
        key: "sadeSati",
        name: "Sade Sati",
        reason: `<b>Tough period (7.5 years) causing obstacles.</b><div>Saturn transit over natal Moon sign / neighbours.</div>`,
      });
    }
    if (isPitruDosha()) {
      list.push({
        key: "pitruDosha",
        name: "Pitru Dosha",
        reason: `<b>Ancestral karma affecting prosperity/health.</b><div>Malefics in 5th or 9th house.</div>`,
      });
    }
    if (isGandmoolDosha()) {
      list.push({
        key: "gandmoolDosha",
        name: "Gandmool Dosha",
        reason: `<b>Marriage/mental troubles.</b><div>Moon in Ashlesha, Jyeshtha, or Moola Nakshatra.</div>`,
      });
    }

    setDoshList(list);
  }, [kundliData, transitSaturnHouse]);

  if (!doshList.length) return <p>No Doshes detected.</p>;

  return (
    <table style={{ width: "100%", borderCollapse: "collapse" }} border="1" cellPadding="8">
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
};

export default DoshTable;

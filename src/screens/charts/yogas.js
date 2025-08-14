// YogaTable.jsx
import React, { useMemo } from "react";
import zodiacs from "../../data/zodiacs";

// -------------------- HELPERS --------------------
function checkPlanetsInSameHouse(kundli, planetNos) {
  return kundli.houses?.some(house => {
    const planets = house.planets?.map(p => p.no) || [];
    return planetNos.every(no => planets.includes(no));
  });
}

function isPlanetDebilitated(planet, kundli) {
  const planetData = zodiacs.find(p => p.no === planet.no);
  if (!planetData || !planetData.debilitated_in) return false;
  const house = kundli.houses.find(h => h.planets.some(pl => pl.no === planet.no));
  if (!house) return false;
  const rashiData = zodiacs.find(z => z.no === house.rashi);
  return rashiData?.no === planetData.debilitated_in.no;
}

function getPlanetHouse(kundli, planetNo) {
  const house = kundli.houses.find(h => h.planets?.some(p => p.no === planetNo));
  return house?.house || null;
}

function getRashiLord(kundli, houseNo) {
  const house = kundli.houses.find(h => h.house === houseNo);
  if (!house) return null;
  const rashiData = zodiacs.find(z => z.no === house.rashi);
  return rashiData?.lord || null;
}

// -------------------- YOGA CHECK FUNCTIONS --------------------
// Original yogas
const hasBudhaAdityaYoga = kundli => ({
  result: checkPlanetsInSameHouse(kundli, [1, 5])
});
const hasChandraMangalYoga = kundli => ({
  result: checkPlanetsInSameHouse(kundli, [2, 9])
});
const hasGajakesariYoga = kundli => {
  let moonHouse = null, jupiterHouse = null;
  kundli.houses?.forEach(h => {
    h.planets?.forEach(p => {
      if (p.no === 2) moonHouse = h.house;
      if (p.no === 3) jupiterHouse = h.house;
    });
  });
  if (moonHouse && jupiterHouse) {
    const diff = Math.abs(moonHouse - jupiterHouse) % 12;
    return { result: [0, 3, 6, 9].includes(diff) };
  }
  return { result: false };
};
const hasVipreetRajYoga = kundli => {
  const vipreetHouses = [6, 8, 12];
  const lords = vipreetHouses
    .map(houseNo => getRashiLord(kundli, houseNo))
    .filter(Boolean);
  return {
    result: kundli.houses?.some(
      h => vipreetHouses.includes(h.house) &&
           h.planets?.some(p => lords.includes(p.no))
    )
  };
};
const hasRajYoga = kundli => {
  const benefics = [1, 2, 3, 5, 6];
  const angularHouses = [1, 4, 7, 10];
  return {
    result: kundli.houses?.some(
      h => angularHouses.includes(h.house) &&
           h.planets?.some(p => benefics.includes(p.no))
    )
  };
};
const hasDainyaYoga = kundli => {
  const malefics = [4, 7, 8, 9];
  const angularHouses = [1, 4, 7, 10];
  return {
    result: kundli.houses?.some(
      h => angularHouses.includes(h.house) &&
           h.planets?.some(p => malefics.includes(p.no))
    )
  };
};
const hasNeechBhangaRajaYoga = kundli => {
  let debilitatedPlanets = [];
  kundli.houses?.forEach(h => {
    h.planets?.forEach(p => {
      if (isPlanetDebilitated(p, kundli)) debilitatedPlanets.push({ planet: p, house: h.house });
    });
  });
  for (const dp of debilitatedPlanets) {
    const lord = getRashiLord(kundli, dp.house);
    if (dp.planet.no === lord) return { result: true };
  }
  return { result: false };
};
const hasChandralagnaYoga = kundli => {
  const lagnaLord = getRashiLord(kundli, 1);
  return { result: lagnaLord === 2 };
};
const hasParivartanaYoga = kundli => {
  const lordsByHouse = kundli.houses?.reduce((acc, h) => {
    acc[h.house] = getRashiLord(kundli, h.house);
    return acc;
  }, {});
  for (let h1 = 1; h1 <= 12; h1++) {
    for (let h2 = h1 + 1; h2 <= 12; h2++) {
      const lordH1 = lordsByHouse[h1];
      const lordH2 = lordsByHouse[h2];
      if (
        lordH1 && lordH2 &&
        getPlanetHouse(kundli, lordH1) === h2 &&
        getPlanetHouse(kundli, lordH2) === h1
      ) {
        return { result: true };
      }
    }
  }
  return { result: false };
};

// ---- New yogas ----
const hasAdhiYoga = kundli => {
  const benefics = [2, 3, 5, 6];
  const moonHouse = getPlanetHouse(kundli, 2);
  if (!moonHouse) return { result: false };
  const from6 = ((moonHouse + 5 - 1) % 12) + 1;
  const from7 = ((moonHouse + 6 - 1) % 12) + 1;
  const from8 = ((moonHouse + 7 - 1) % 12) + 1;
  const housesToCheck = [from6, from7, from8];
  return {
    result: kundli.houses.some(
      h => housesToCheck.includes(h.house) && h.planets.some(p => benefics.includes(p.no))
    )
  };
};
const hasAmalaYoga = kundli => {
  const benefics = [2, 3, 5, 6];
  return {
    result: kundli.houses.some(
      h => h.house === 10 && h.planets.some(p => benefics.includes(p.no))
    )
  };
};
const hasChatusagaraYoga = kundli => {
  const kendras = [1, 4, 7, 10];
  return {
    result: kendras.every(k =>
      kundli.houses.some(h => h.house === k && (h.planets || []).length > 0)
    )
  };
};
const hasDharmaKarmaYoga = kundli => {
  const lord9 = getRashiLord(kundli, 9);
  const lord10 = getRashiLord(kundli, 10);
  if (!lord9 || !lord10) return { result: false };
  return { result: getPlanetHouse(kundli, lord9) === getPlanetHouse(kundli, lord10) };
};
const hasSunaphaYoga = kundli => {
  const moonHouse = getPlanetHouse(kundli, 2);
  if (!moonHouse) return { result: false };
  const house2ndFromMoon = ((moonHouse + 1 - 1) % 12) + 1;
  return {
    result: kundli.houses.some(
      h => h.house === house2ndFromMoon && h.planets.some(p => p.no !== 1)
    )
  };
};
const hasAnaphaYoga = kundli => {
  const moonHouse = getPlanetHouse(kundli, 2);
  if (!moonHouse) return { result: false };
  const house12thFromMoon = ((moonHouse + 11 - 1) % 12) + 1;
  return {
    result: kundli.houses.some(
      h => h.house === house12thFromMoon && h.planets.some(p => p.no !== 1)
    )
  };
};
const hasDurudharaYoga = kundli => {
  return { result: hasSunaphaYoga(kundli).result && hasAnaphaYoga(kundli).result };
};

// -------------------- CONFIG --------------------
const yogaDefinitions = [
  { key: "budhaAdityaYoga", label: "Budha-Aditya Yoga", reason: "Sun + Mercury in same house", checker: hasBudhaAdityaYoga },
  { key: "chandraMangalYoga", label: "Chandra-Mangal Yoga", reason: "Moon + Mars in same house", checker: hasChandraMangalYoga },
  { key: "gajakesariYoga", label: "Gajakesari Yoga", reason: "Moon & Jupiter in Kendra (0,3,6,9 houses apart)", checker: hasGajakesariYoga },
  { key: "vipreetRajYoga", label: "Vipreet Raj Yoga", reason: "Lords of 6/8/12 in their own houses", checker: hasVipreetRajYoga },
  { key: "rajYoga", label: "Raj Yoga", reason: "Benefic planets in angular houses (1,4,7,10)", checker: hasRajYoga },
  { key: "dainyaYoga", label: "Dainya Yoga", reason: "Malefic planets in angular houses (1,4,7,10)", checker: hasDainyaYoga },
  { key: "neechBhangaRajaYoga", label: "Neech Bhanga Raja Yoga", reason: "Debilitated planet canceled by own lord presence", checker: hasNeechBhangaRajaYoga },
  { key: "chandralagnaYoga", label: "Chandralagna Yoga", reason: "Moon is lord of Ascendant (1st house)", checker: hasChandralagnaYoga },
  { key: "parivartanaYoga", label: "Parivartana Yoga", reason: "Mutual exchange of house lords", checker: hasParivartanaYoga },
  { key: "adhiYoga", label: "Adhi Yoga", reason: "Benefics in 6/7/8 from Moon", checker: hasAdhiYoga },
  { key: "amalaYoga", label: "Amala Yoga", reason: "Benefic in 10th from Lagna", checker: hasAmalaYoga },
  { key: "chatusagaraYoga", label: "Chatusagara Yoga", reason: "All four Kendras occupied", checker: hasChatusagaraYoga },
  { key: "dharmaKarmaYoga", label: "Dharma-Karmadhipati Yoga", reason: "9th & 10th lords associated", checker: hasDharmaKarmaYoga },
  { key: "sunaphaYoga", label: "Sunapha Yoga", reason: "Planets in 2nd from Moon (except Sun)", checker: hasSunaphaYoga },
  { key: "anaphaYoga", label: "Anapha Yoga", reason: "Planets in 12th from Moon (except Sun)", checker: hasAnaphaYoga },
  { key: "durudharaYoga", label: "Durudhara Yoga", reason: "Planets in both 2nd & 12th from Moon (except Sun)", checker: hasDurudharaYoga }
];

// -------------------- COMPONENT --------------------
export default function YogaTable({ kundliData }) {
  const yogas = useMemo(() => {
    if (!kundliData?.houses) return {};
    return yogaDefinitions.reduce((acc, yoga) => {
      acc[yoga.key] = yoga.checker(kundliData);
      return acc;
    }, {});
  }, [kundliData]);

  return (
    <table style={{ width: "100%", borderCollapse: "collapse" }} border="1" cellPadding="8">
      <thead>
        <tr>
          <th>Yoga</th>
          <th>Reason</th>
        </tr>
      </thead>
      <tbody>
        {yogaDefinitions.map(
          ({ key, label, reason }) =>
            yogas[key]?.result && (
              <tr key={key}>
                <td>{label}</td>
                <td>{reason}</td>
              </tr>
            )
        )}
      </tbody>
    </table>
  );
}

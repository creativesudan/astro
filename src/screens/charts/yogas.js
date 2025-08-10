import React, { useMemo } from "react";
import zodiacs from "../../data/zodiacs";

// -------------------- HELPERS --------------------

// Generic: Check if specific planets are in the same house
function checkPlanetsInSameHouse(kundli, planetNos) {
  return kundli.houses?.some(house => {
    const planets = house.planets?.map(p => p.no) || [];
    return planetNos.every(no => planets.includes(no));
  });
}

// Check if planet is debilitated in its current sign
function isPlanetDebilitated(planet, kundli) {
  const planetData = zodiacs.find(p => p.no === planet.no);
  if (!planetData || !planetData.debilitated_in) return false;
  const house = kundli.houses.find(h => h.planets.some(pl => pl.no === planet.no));
  if (!house) return false;
  const rashiData = zodiacs.find(z => z.no === house.rashi);
  return rashiData?.no === planetData.debilitated_in.no;
}

// Get house number of a planet
function getPlanetHouse(kundli, planetNo) {
  const house = kundli.houses.find(h => h.planets?.some(p => p.no === planetNo));
  return house?.house || null;
}

// Get lord of rashi of house
function getRashiLord(kundli, houseNo) {
  const house = kundli.houses.find(h => h.house === houseNo);
  if (!house) return null;
  const rashiData = zodiacs.find(z => z.no === house.rashi);
  return rashiData?.lord || null;
}

// -------------------- YOGA CHECK FUNCTIONS --------------------

const hasBudhaAdityaYoga = kundli => ({
  result: checkPlanetsInSameHouse(kundli, [1, 5]) // Sun(1), Mercury(5)
});

const hasChandraMangalYoga = kundli => ({
  result: checkPlanetsInSameHouse(kundli, [2, 9]) // Moon(2), Mars(9)
});

const hasGajakesariYoga = kundli => {
  let moonHouse = null,
    jupiterHouse = null;

  kundli.houses?.forEach(h => {
    h.planets?.forEach(p => {
      if (p.no === 2) moonHouse = h.house;     // Moon
      if (p.no === 3) jupiterHouse = h.house; // Jupiter
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
      h =>
        vipreetHouses.includes(h.house) &&
        h.planets?.some(p => lords.includes(p.no))
    )
  };
};

const hasRajYoga = kundli => {
  // Benefic planets (Jupiter=3, Venus=6, Mercury=5, Moon=2, Sun=1) in angular houses (1,4,7,10)
  const benefics = [1, 2, 3, 5, 6];
  const angularHouses = [1, 4, 7, 10];
  return {
    result: kundli.houses?.some(h =>
      angularHouses.includes(h.house) &&
      h.planets?.some(p => benefics.includes(p.no))
    )
  };
};

const hasDainyaYoga = kundli => {
  // Malefic planets (Saturn=8, Mars=9, Rahu=4, Ketu=7) in angular houses (1,4,7,10)
  const malefics = [4, 7, 8, 9];
  const angularHouses = [1, 4, 7, 10];
  return {
    result: kundli.houses?.some(h =>
      angularHouses.includes(h.house) &&
      h.planets?.some(p => malefics.includes(p.no))
    )
  };
};

const hasNeechBhangaRajaYoga = kundli => {
  // Simplified: if debilitated planet has own lord in same house or aspect
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
  // Moon (2) is lord of 1st house
  const lagnaLord = getRashiLord(kundli, 1);
  return { result: lagnaLord === 2 };
};

const hasParivartanaYoga = kundli => {
  // Mutual exchange of lords between two houses
  // i.e. lord of house A in house B and lord of house B in house A
  const lordsByHouse = kundli.houses?.reduce((acc, h) => {
    acc[h.house] = getRashiLord(kundli, h.house);
    return acc;
  }, {});

  for (let h1 = 1; h1 <= 12; h1++) {
    for (let h2 = h1 + 1; h2 <= 12; h2++) {
      const lordH1 = lordsByHouse[h1];
      const lordH2 = lordsByHouse[h2];
      if (
        lordH1 &&
        lordH2 &&
        getPlanetHouse(kundli, lordH1) === h2 &&
        getPlanetHouse(kundli, lordH2) === h1
      ) {
        return { result: true };
      }
    }
  }
  return { result: false };
};

// -------------------- CONFIG --------------------

const yogaDefinitions = [
  {
    key: "budhaAdityaYoga",
    label: "Budha-Aditya Yoga",
    reason: "Sun + Mercury in same house",
    checker: hasBudhaAdityaYoga
  },
  {
    key: "chandraMangalYoga",
    label: "Chandra-Mangal Yoga",
    reason: "Moon + Mars in same house",
    checker: hasChandraMangalYoga
  },
  {
    key: "gajakesariYoga",
    label: "Gajakesari Yoga",
    reason: "Moon & Jupiter in Kendra (0,3,6,9 houses apart)",
    checker: hasGajakesariYoga
  },
  {
    key: "vipreetRajYoga",
    label: "Vipreet Raj Yoga",
    reason: "Lords of 6/8/12 in their own houses",
    checker: hasVipreetRajYoga
  },
  {
    key: "rajYoga",
    label: "Raj Yoga",
    reason: "Benefic planets in angular houses (1,4,7,10)",
    checker: hasRajYoga
  },
  {
    key: "dainyaYoga",
    label: "Dainya Yoga",
    reason: "Malefic planets in angular houses (1,4,7,10)",
    checker: hasDainyaYoga
  },
  {
    key: "neechBhangaRajaYoga",
    label: "Neech Bhanga Raja Yoga",
    reason: "Debilitated planet canceled by own lord presence",
    checker: hasNeechBhangaRajaYoga
  },
  {
    key: "chandralagnaYoga",
    label: "Chandralagna Yoga",
    reason: "Moon is lord of Ascendant (1st house)",
    checker: hasChandralagnaYoga
  },
  {
    key: "parivartanaYoga",
    label: "Parivartana Yoga",
    reason: "Mutual exchange of house lords",
    checker: hasParivartanaYoga
  }
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

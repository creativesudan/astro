// PlanetStrengthTable.jsx
import React from "react";
import planets from "../../data/planets";
import planetHouseSymptoms from "../../data/planetSymptoms";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";

// ---------- Constants ----------
const RASHIS = [
  "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
  "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
];

const RASHI_LORDS = {
  1: 9, 2: 6, 3: 5, 4: 2, 5: 1, 6: 5,
  7: 6, 8: 9, 9: 3, 10: 8, 11: 8, 12: 3
};

const PLANET_RELATIONS = {
  1: { friends: [3, 6], enemies: [8, 10], neutrals: [2, 5, 9, 11, 12] },
  2: { friends: [3, 4], enemies: [7, 9, 10, 11], neutrals: [1, 5, 6, 8, 12] },
  3: { friends: [1, 5, 6], enemies: [8, 9, 10, 11], neutrals: [2, 4, 7, 12] },
  4: { friends: [2, 7], enemies: [1, 3, 9, 10, 11], neutrals: [4, 5, 6, 8, 12] },
  5: { friends: [1, 3, 9], enemies: [6, 10, 11], neutrals: [2, 4, 5, 7, 8, 12] },
  6: { friends: [1, 4], enemies: [3, 5, 9, 10, 11], neutrals: [2, 6, 7, 8, 12] },
  7: { friends: [2, 6], enemies: [1, 3, 5, 9], neutrals: [4, 7, 8, 10, 11, 12] },
  8: { friends: [3, 5, 6], enemies: [1, 4, 9], neutrals: [2, 7, 8, 10, 11, 12] },
  9: { friends: [3, 5, 6], enemies: [1, 4, 9], neutrals: [2, 7, 8, 10, 11, 12] }
};

const BENEFIC_PLANETS = [5, 6, 4, 2];
const MALEFIC_PLANETS = [7, 3, 8, 9, 1, 2];

const strengthIcons = {
  uchch: "🟢",
  neech: "🔴",
  neechbhang: "🟡",
  swagrahi: "🔵",
  normal: "⚪",
  unknown: "⚪",
};

const effectIcons = {
  positive: "🟢",
  mild_positive: "🟡",
  neutral: "⚪",
  mild_negative: "🟠",
  negative: "🔴",
  unknown: "⚪",
};

const strengthStyles = {
  uchch: { color: "green", fontWeight: 700 },
  neech: { color: "red", fontWeight: 700 },
  neechbhang: { color: "#b8860b" },
  swagrahi: { color: "blue" },
  normal: { color: "black" },
  unknown: { color: "gray" },
};

const effectStyles = {
  positive: { color: "green", fontWeight: 700 },
  mild_positive: { color: "darkgreen" },
  neutral: { color: "black" },
  mild_negative: { color: "darkred" },
  negative: { color: "red", fontWeight: 700 },
  unknown: { color: "gray" },
};

// ---------- Utility ----------
const getRashiName = (no) => RASHIS[no - 1] || "Unknown";
const getPlanetByNo = (no) => planets.find((p) => p.no === no);
const isDegreeClose = (d1, d2, t = 3) => Math.abs(d1 - d2) <= t;

const isNeechbhang = (planet, rashiNo, kundli) => {
  const planetData = getPlanetByNo(planet.no);
  if (!planetData?.debilitated_in) return false;
  if (getRashiName(rashiNo) !== planetData.debilitated_in.sign) return false;
  const lordNo = RASHI_LORDS[rashiNo];
  const lordHouse = kundli.houses.find((h) =>
    h.planets.some((p) => p.no === lordNo)
  );
  return lordHouse && [1, 4, 7, 10].includes(lordHouse.house);
};

const getAspectImpact = (planet, houseNo, aspects) => {
  let impact = 0;
  aspects.forEach((a) => {
    if (a.house_aspected === houseNo && a.planet_no !== planet.no) {
      if (BENEFIC_PLANETS.includes(a.planet_no)) impact++;
      if (MALEFIC_PLANETS.includes(a.planet_no)) impact--;
    }
  });
  return impact;
};

// ---------- Logic ----------
function evaluatePlanetStrength(planet, rashiNo, houseNo, kundli, aspects) {
  const planetData = getPlanetByNo(planet.no);
  if (!planetData)
    return {
      strengthKey: "unknown",
      strengthLabel: "Unknown",
      strengthReason: "Planet metadata missing",
      effectKey: "unknown",
      effectLabel: "Unknown",
      effectReason: "Planet metadata missing",
      degree: planet.degInSign ?? null,
    };

  const rashiName = getRashiName(rashiNo);
  const degInSign = Number.isFinite(planet.degInSign)
    ? planet.degInSign
    : planet.deg ?? planet.degree ?? null;

  const isExalted = planetData.exalted_in?.sign === rashiName;
  const isDebilitated = planetData.debilitated_in?.sign === rashiName;
  const isOwnSign = RASHI_LORDS[rashiNo] === planet.no;

  let strengthKey = "normal";
  let strengthReason = "Average placement";
  let effectKey = "neutral";
  let effectReason = "No strong influence detected";

  if (isExalted) {
    strengthKey = "uchch";
    strengthReason = `Exalted in ${rashiName} (${degInSign?.toFixed(2)}°)`;
    effectKey = "positive";
    effectReason = "Exalted planets give strong positive results.";
    if (isDegreeClose(degInSign, planetData.exalted_in?.degree)) {
      strengthReason += " Near exact exaltation point → stronger influence.";
      effectReason += " Very strong influence due to close degree.";
    }
  } else if (isDebilitated) {
    if (isNeechbhang(planet, rashiNo, kundli)) {
      strengthKey = "neechbhang";
      strengthReason = `Debilitated in ${rashiName} but Neechbhang applies (${degInSign?.toFixed(2)}°)`;
      effectKey = "positive";
      effectReason = "Debilitation cancelled by Neechbhang Yoga.";
    } else {
      strengthKey = "neech";
      strengthReason = `Debilitated in ${rashiName} (${degInSign?.toFixed(2)}°)`;
      effectKey = "negative";
      effectReason = "Debilitated planets give weaker/negative results.";
      if (isDegreeClose(degInSign, planetData.debilitated_in?.degree)) {
        strengthReason += " Near deep debilitation point → extra weakness.";
        effectReason += " Extra weakness due to close degree.";
      }
    }
  } else if (isOwnSign) {
    strengthKey = "swagrahi";
    strengthReason = `Own sign (${rashiName}) strengthens planet (${degInSign?.toFixed(2)}°)`;
    effectKey = "positive";
    effectReason = "Own sign placement strengthens influence.";
  } else {
    const relation = PLANET_RELATIONS[planet.no];
    const lordNo = RASHI_LORDS[rashiNo];
    if (relation?.friends?.includes(lordNo)) {
      effectKey = "mild_positive";
      effectReason = `Rashi lord (${lordNo}) is friendly to planet.`;
    } else if (relation?.enemies?.includes(lordNo)) {
      effectKey = "mild_negative";
      effectReason = `Rashi lord (${lordNo}) is enemy to planet.`;
    }
  }

  const aspectImpact = getAspectImpact(planet, houseNo, aspects);
  if (aspectImpact > 0) {
    effectReason += " Benefic aspects provide support.";
    if (effectKey === "negative") effectKey = "neutral";
    else if (effectKey === "neutral") effectKey = "mild_positive";
    else effectKey = "positive";
  } else if (aspectImpact < 0) {
    effectReason += " Malefic aspects reduce positivity.";
    if (effectKey === "positive") effectKey = "neutral";
    else if (effectKey === "neutral") effectKey = "mild_negative";
    else effectKey = "negative";
  }

  return {
    strengthKey,
    strengthLabel: `${strengthIcons[strengthKey]} ${
      strengthKey.charAt(0).toUpperCase() + strengthKey.slice(1)
    }`,
    strengthReason,
    effectKey,
    effectLabel: `${effectIcons[effectKey]} ${effectKey
      .replace(/_/g, " ")
      .replace(/\b\w/g, (l) => l.toUpperCase())}`,
    effectReason,
    degree: degInSign,
  };
}

// ---------- Helper to Render Symptoms ----------
const renderSymptoms = (planetNo, house, effectKey) => {
  const match = planetHouseSymptoms.find((p) => p.planet_no === planetNo);
  if (!match) return null;
  const symptomData = match.symptoms.find((s) => s.no === house);
  if (!symptomData) return null;

  let keyList = [];
  if (["positive", "mild_positive"].includes(effectKey)) {
    keyList = symptomData.positive || [];
  } else if (["negative", "mild_negative"].includes(effectKey)) {
    keyList = symptomData.negative || [];
  } else if (effectKey === "neutral") {
    keyList = symptomData.neutral || [];
  }

  return keyList.map((txt, idx) => (
    <li key={`${house}-${idx}`}>
      <Typography>{txt}</Typography>
    </li>
  ));
};


// Helper to render remedies only when negative or mild_negative
const renderRemedies = (planetNo, house, effectKey) => {
  if (!["negative", "mild_negative", "neutral"].includes(effectKey)) return null; // show only for negatives

  const match = planetHouseSymptoms.find((p) => p.planet_no === planetNo);
  if (!match) return null;
  const symptomData = match.symptoms.find((s) => s.no === house);
  if (!symptomData || !symptomData.remedies) return null;

  return symptomData.remedies.map((txt, idx) => (
    <li key={`remedy-${house}-${idx}`}>
      <Typography>{txt}</Typography>
    </li>
  ));
};

// Helper to render remedies only when negative or mild_negative
const renderHobbies = (planetNo, house, effectKey) => {

  const match = planetHouseSymptoms.find((p) => p.planet_no === planetNo);
  if (!match) return null;
  const symptomData = match.symptoms.find((s) => s.no === house);
  if (!symptomData || !symptomData.hobbies) return null;

  return symptomData.hobbies.map((txt, idx) => (
    <li key={`hobbies-${house}-${idx}`}>
      <Typography>{txt}</Typography>
    </li>
  ));
};

// Helper to render remedies only when negative or mild_negative
const renderCareer = (planetNo, house, effectKey) => {
  // if (["negative", "mild_negative"].includes(effectKey)) return null;

  const match = planetHouseSymptoms.find((p) => p.planet_no === planetNo);
  if (!match) return null;
  const symptomData = match.symptoms.find((s) => s.no === house);
  if (!symptomData || !symptomData.career) return null;

  return symptomData.career.map((txt, idx) => (
    <li key={`career-${house}-${idx}`}>
      <Typography>{txt}</Typography>
    </li>
  ));
};



// ---------- Component ----------
const PlanetStrengthTable = ({ kundliData = { houses: [] }, aspects = [] }) => {
  const houses = Array.isArray(kundliData.houses) ? kundliData.houses : [];
  if (!houses.length) return <p>No kundli data to display.</p>;

  const rows = houses.flatMap(({ rashi, house: houseNo, planets = [] }) =>
    planets
      .map((planet) => {
        const meta = getPlanetByNo(planet.no);
        if (!meta) return null;
        const evalRes = evaluatePlanetStrength(
          planet,
          rashi,
          houseNo,
          kundliData,
          aspects
        );
        return {
          planetNo: meta.no,
          planetName: meta.name,
          degree: evalRes.degree,
          house: houseNo,
          rashi: getRashiName(rashi),
          ...evalRes,
        };
      })
      .filter(Boolean)
  );

  return (
    <Box sx={{ width: "100%", mt: 2 }}>
      {rows.map((r, i) => (
        <Accordion key={i}>
          <AccordionSummary
            expandIcon={"+"}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              alignItems: "center",
            }}
          >
            <Typography sx={{ flexBasis: "20%", fontWeight: "bold" }}>
              {r.planetName}
            </Typography>
            <Typography sx={{ color: "text.secondary", flexBasis: "15%" }}>
              Degree: {typeof r.degree === "number" ? `${r.degree.toFixed(2)}°` : "-"}
            </Typography>
            <Typography sx={{ color: "text.secondary", flexBasis: "20%" }}>
              House: {r.house}, Rashi: {r.rashi}
            </Typography>
            <Typography sx={{ flexBasis: "15%", ...strengthStyles[r.strengthKey], fontWeight: 600 }}>
              {r.strengthLabel}
            </Typography>
            <Typography sx={{ flexBasis: "15%", ...effectStyles[r.effectKey], fontWeight: 600 }}>
              {r.effectLabel}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Table size="small">
              <TableBody>
                <TableRow>
                  <TableCell><strong>Strength</strong></TableCell>
                  <TableCell sx={strengthStyles[r.strengthKey]}>{r.strengthLabel}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><strong>Strength Reason</strong></TableCell>
                  <TableCell>{r.strengthReason}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><strong>Effect</strong></TableCell>
                  <TableCell sx={effectStyles[r.effectKey]}>{r.effectLabel}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><strong>Effect Reason & Symptoms</strong></TableCell>
                  <TableCell>
                    <ul>{renderSymptoms(r.planetNo, r.house, r.effectKey)}</ul>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><strong>Remedies</strong></TableCell>
                  <TableCell>
                    <ul>{renderRemedies(r.planetNo, r.house, r.effectKey)}</ul>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><strong>Hobbies</strong></TableCell>
                  <TableCell>
                    <ul>{renderHobbies(r.planetNo, r.house, r.effectKey)}</ul>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><strong>Career</strong></TableCell>
                  <TableCell>
                    <ul>{renderCareer(r.planetNo, r.house, r.effectKey)}</ul>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default PlanetStrengthTable;

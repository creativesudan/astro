import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField
} from "@mui/material";

// लाभकारी भाव नियम
const guruBeneficHouses = [2,5,7,9,11];
const shaniBeneficHouses = [3,6,11];
const mangalBeneficHouses = [3,6,11];
const suryaBeneficHouses = [3,6,10,11];
const shukraBeneficHouses = [1,2,3,4,5,7,9,10,11];
const budhBeneficHouses = [2,4,6,8,10];

// Rashi Names
const rashiNames = [
  "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
  "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
];

// ग्रह नाम Map
const planetNames = {
  1: "Sun",
  2: "Moon",
  3: "Jupiter",
  4: "Rahu",
  5: "Mercury",
  6: "Venus",
  7: "Ketu",
  8: "Saturn",
  9: "Mars"
};

// यहां आप अपने बैकएंड/Swiss Ephemeris API call से transit data लाएँगे
// फिलहाल demo के लिए random zodiac assign कर रहा हूँ
function getMockTransitData() {
  let planets = [];
  Object.keys(planetNames).forEach((p) => {
    const signNo = Math.floor(Math.random() * 12) + 1;
    planets.push({
      planetNo: parseInt(p),
      planet: planetNames[p],
      sign: signNo
    });
  });
  return planets;
}

export default function GocharTable({ kundliData, date }) {
  const [transits, setTransits] = useState([]);

  useEffect(() => {
    // यहां आप Swiss Ephemeris से real data fetch कर सकते हैं
    const t = getMockTransitData();
    setTransits(t);
  }, [date]);

  if (!kundliData || !kundliData.houses) {
    return <Typography>Please generate Kundli first.</Typography>;
  }

  // Lagna sign
  const lagnaSign = kundliData.houses.find(h => h.house === 1)?.rashi;
  // Moon sign
  const moonHouse = kundliData.houses.find(h =>
    h.planets.some(pl => pl.no === 2)
  );
  const moonSign = moonHouse?.rashi;

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6">
        Gochar Table - {date.toLocaleDateString()}
      </Typography>
      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Planet</TableCell>
              <TableCell>Transit Rashi</TableCell>
              <TableCell>House from Lagna</TableCell>
              <TableCell>House from Moon</TableCell>
              <TableCell>Effect (based on rules)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transits.map((tr, i) => {
              const houseFromLagna =
                ((tr.sign - lagnaSign + 12) % 12) + 1;
              const houseFromMoon =
                ((tr.sign - moonSign + 12) % 12) + 1;

              let effect = "Neutral";
              // Simple शुभ-अशुभ नियम
              if (tr.planet === "Jupiter" && guruBeneficHouses.includes(houseFromMoon)) effect = "Benefic";
              if (tr.planet === "Saturn" && shaniBeneficHouses.includes(houseFromMoon)) effect = "Benefic";
              if (tr.planet === "Mars" && mangalBeneficHouses.includes(houseFromMoon)) effect = "Benefic";
              if (tr.planet === "Sun" && suryaBeneficHouses.includes(houseFromMoon)) effect = "Benefic";
              if (tr.planet === "Venus" && shukraBeneficHouses.includes(houseFromMoon)) effect = "Benefic";
              if (tr.planet === "Mercury" && budhBeneficHouses.includes(houseFromMoon)) effect = "Benefic";

              return (
                <TableRow key={i} style={effect === "Benefic" ? { background: "#e2f0d9" } : {}}>
                  <TableCell>{tr.planet}</TableCell>
                  <TableCell>{rashiNames[tr.sign - 1]}</TableCell>
                  <TableCell>{houseFromLagna}</TableCell>
                  <TableCell>{houseFromMoon}</TableCell>
                  <TableCell>{effect}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

GocharTable.propTypes = {
  kundliData: PropTypes.object.isRequired,
  date: PropTypes.instanceOf(Date).isRequired
};

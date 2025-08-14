import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Box, Typography, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Collapse
} from "@mui/material";

const kpmDashaSequence = [
  { name: "Ketu", years: 7 },
  { name: "Venus", years: 20 },
  { name: "Sun", years: 6 },
  { name: "Moon", years: 10 },
  { name: "Mars", years: 7 },
  { name: "Rahu", years: 18 },
  { name: "Jupiter", years: 16 },
  { name: "Saturn", years: 19 },
  { name: "Mercury", years: 17 }
];

// Utility for date formatting
const fmt = (d) => new Date(d).toLocaleDateString("en-GB");

// Mahadasha generation
function generateMahaDashaTable(degInZodiac, birthDate, totalYears = 100) {
  const nakshatraSpan = 360 / 27;
  const starIndex = Math.floor(degInZodiac / nakshatraSpan);
  const startLordName = kpmDashaSequence[starIndex % 9].name;
  const starFraction = (degInZodiac % nakshatraSpan) / nakshatraSpan;
  const yearsLeftInStart = kpmDashaSequence.find(d => d.name === startLordName).years * (1 - starFraction);

  let dashaRows = [];
  let currentDate = new Date(birthDate);
  let startIndex = kpmDashaSequence.findIndex(d => d.name === startLordName);
  let yearsCount = 0;

  // पहला partial period
  let first = kpmDashaSequence[startIndex];
  let firstEnd = new Date(currentDate);
  firstEnd.setFullYear(firstEnd.getFullYear() + Math.floor(yearsLeftInStart));
  firstEnd.setMonth(firstEnd.getMonth() + Math.round((yearsLeftInStart % 1) * 12));
  dashaRows.push({ planet: first.name, from: new Date(currentDate), to: firstEnd });
  yearsCount += yearsLeftInStart;

  currentDate = new Date(firstEnd);
  let idx = (startIndex + 1) % kpmDashaSequence.length;

  while (yearsCount < totalYears) {
    let lord = kpmDashaSequence[idx];
    let endDate = new Date(currentDate);
    endDate.setFullYear(endDate.getFullYear() + lord.years);
    dashaRows.push({ planet: lord.name, from: new Date(currentDate), to: endDate });
    yearsCount += lord.years;
    currentDate = new Date(endDate);
    idx = (idx + 1) % kpmDashaSequence.length;
  }

  return dashaRows;
}

// Antar Dasha
function generateAntardashaTable(mahaLord, mahaFrom, mahaYears) {
  const antars = [];
  let startDate = new Date(mahaFrom);
  kpmDashaSequence.forEach(sub => {
    const antarYears = (sub.years / 120) * mahaYears;
    const antarEnd = new Date(startDate);
    antarEnd.setFullYear(antarEnd.getFullYear() + Math.floor(antarYears));
    antarEnd.setMonth(antarEnd.getMonth() + Math.round((antarYears % 1) * 12));
    antars.push({ antarLord: `${mahaLord}-${sub.name}`, from: new Date(startDate), to: antarEnd });
    startDate = new Date(antarEnd);
  });
  return antars;
}

// Pratyantar Dasha
function generatePratyantarDashaTable(antarLord, antarFrom, antarYears) {
  const pratyantars = [];
  let startDate = new Date(antarFrom);
  kpmDashaSequence.forEach(sub => {
    const pratyaYears = (sub.years / 120) * antarYears;
    const pratyaEnd = new Date(startDate);
    pratyaEnd.setFullYear(pratyaEnd.getFullYear() + Math.floor(pratyaYears));
    pratyaEnd.setMonth(pratyaEnd.getMonth() + Math.round((pratyaYears % 1) * 12));
    pratyantars.push({ pratyantarLord: `${antarLord}-${sub.name}`, from: new Date(startDate), to: pratyaEnd });
    startDate = new Date(pratyaEnd);
  });
  return pratyantars;
}

// Antardasha Row
function AntardashaRow({ antar, antarYears, isCurrentAntar }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <TableRow
        style={{ cursor: "pointer", background: isCurrentAntar ? "#e2f0d9" : "#fafafa" }}
        onClick={() => setOpen(!open)}
      >
        <TableCell>{open ? "▼" : "▶"} {antar.antarLord}{isCurrentAntar && " ← Current Antar"}</TableCell>
        <TableCell>{fmt(antar.from)}</TableCell>
        <TableCell>{fmt(antar.to)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell colSpan={3} style={{ padding: 0 }}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box m={1}>
              <Typography variant="caption"><b>Pratyantar Dashas of {antar.antarLord}</b></Typography>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Pratyantar</TableCell>
                    <TableCell>From</TableCell>
                    <TableCell>To</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {generatePratyantarDashaTable(antar.antarLord, antar.from, antarYears).map((pratya, idx) => {
                    const isCurrentPratya = new Date() >= pratya.from && new Date() < pratya.to;
                    return (
                      <TableRow key={idx} style={{ background: isCurrentPratya ? "#d0f0ff" : "white" }}>
                        <TableCell>{pratya.pratyantarLord}{isCurrentPratya && " ← Current Pratyantar"}</TableCell>
                        <TableCell>{fmt(pratya.from)}</TableCell>
                        <TableCell>{fmt(pratya.to)}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

// Mahadasha Row
function MahadashaRow({ row, isCurrent }) {
  const [open, setOpen] = useState(false);
  const mahaYears = (row.to - row.from) / (1000 * 60 * 60 * 24 * 365.25);
  return (
    <>
      <TableRow
        style={{ cursor: "pointer", background: isCurrent ? "#fff3cd" : "white" }}
        onClick={() => setOpen(!open)}
      >
        <TableCell>{open ? "▼" : "▶"} <strong>{row.planet}</strong>{isCurrent && " ← Current Maha"}</TableCell>
        <TableCell>{fmt(row.from)}</TableCell>
        <TableCell>{fmt(row.to)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell colSpan={3} style={{ padding: 0 }}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box m={1}>
              <Typography variant="subtitle2"><b>Antardashas of {row.planet}</b></Typography>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Antar Dasha</TableCell>
                    <TableCell>From</TableCell>
                    <TableCell>To</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {generateAntardashaTable(row.planet, row.from, mahaYears).map((antar, i) => {
                    const isCurrentAntar = new Date() >= antar.from && new Date() < antar.to;
                    const antarYears = (antar.to - antar.from) / (1000 * 60 * 60 * 24 * 365.25);
                    return (
                      <AntardashaRow key={i} antar={antar} antarYears={antarYears} isCurrentAntar={isCurrentAntar} />
                    );
                  })}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

// Main
export default function KPSystem({ kundliData, birthDate }) {
  if (!kundliData || !Array.isArray(kundliData.houses)) {
    return <Typography>Loading or invalid Kundli data...</Typography>;
  }
  const planetsList = kundliData.houses.flatMap(h => h.planets || []);
  const moon = planetsList.find(p => p.no === 2);
  const moonHouse = kundliData.houses.find(h => h.planets.some(pl => pl.no === 2));
  const moonDegInZodiac = moon?.deg || ((moonHouse?.rashi - 1) * 30 + moon?.degInSign);

  const mahaList = moon ? generateMahaDashaTable(moonDegInZodiac, birthDate, 100) : [];

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6">Mahadasha → Antardasha → Pratyantar Dasha (100 Years)</Typography>
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Maha Dasha</TableCell>
              <TableCell>From</TableCell>
              <TableCell>To</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mahaList.map((row, i) => {
              const isCurrent = new Date() >= row.from && new Date() < row.to;
              return <MahadashaRow key={i} row={row} isCurrent={isCurrent} />;
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

KPSystem.propTypes = {
  kundliData: PropTypes.object.isRequired,
  birthDate: PropTypes.instanceOf(Date).isRequired
};

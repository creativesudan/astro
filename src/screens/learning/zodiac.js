import React, { useState } from "react";
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, TextField,
  Box,
  Typography
} from "@mui/material";
import zodiacsData from "../../data/zodiacs";

const ZodiacsTable = ({ zodiacs }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter logic
  const filteredZodiacs = zodiacs.filter((z) => {
    const term = searchTerm.toLowerCase();
    return (
      z.no.toString().includes(term) ||
      z.rashi_hindi.toLowerCase().includes(term) ||
      z.name_english.toLowerCase().includes(term) ||
      z.element.toLowerCase().includes(term) ||
      z.nature.toLowerCase().includes(term) ||
      z.gender.toLowerCase().includes(term) ||
      z.direction.toLowerCase().includes(term) ||
      z.color.toLowerCase().includes(term) ||
      z.body_part.toLowerCase().includes(term) ||
      z.animal.toLowerCase().includes(term) ||
      z.nakshatras.join(", ").toLowerCase().includes(term) ||
      z.lord.toLowerCase().includes(term) ||
      z.traits.toLowerCase().includes(term) ||
      z.friends.planets.join(", ").toLowerCase().includes(term) ||
      z.enemies.planets.join(", ").toLowerCase().includes(term) ||
      z.neutrals.planets.join(", ").toLowerCase().includes(term) ||
      z.friends.zodiacs.join(", ").toLowerCase().includes(term) ||
      z.enemies.zodiacs.join(", ").toLowerCase().includes(term) ||
      z.neutrals.zodiacs.join(", ").toLowerCase().includes(term)
    );
  });

  return (
    <Paper sx={{ padding: 2 }}>
      {/* Table */}
      
        
        <Box sx={{ marginTop: 2, width: '100%', }}>
            <TextField
                fullWidth
                variant="outlined"
                label="Search Zodiacs"
                value={searchTerm}
                size="small"
                onChange={(e) => setSearchTerm(e.target.value)}
                sx={{ marginBottom: 2 }}
            />
        </Box>

        <TableContainer sx={{ maxHeight: 'calc(100vh - 200px)' }}>
        <Table size="small" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>No</TableCell>
              <TableCell>Rashi (Hindi / English)</TableCell>
              <TableCell>Element</TableCell>
              <TableCell>Nature</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Direction</TableCell>
              <TableCell>Color</TableCell>
              <TableCell>Body Part</TableCell>
              <TableCell>Animal</TableCell>
              <TableCell>Nakshatras</TableCell>
              <TableCell>Exaltation</TableCell>
              <TableCell>Debilitation</TableCell>
              <TableCell>Mooltrikon</TableCell>
              <TableCell>Lord</TableCell>
              <TableCell>Traits</TableCell>
              <TableCell>Friends (Planets)</TableCell>
              <TableCell>Enemies (Planets)</TableCell>
              <TableCell>Neutrals (Planets)</TableCell>
              <TableCell>Friends (Zodiacs)</TableCell>
              <TableCell>Enemies (Zodiacs)</TableCell>
              <TableCell>Neutrals (Zodiacs)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredZodiacs.map((z) => (
              <TableRow key={z.no}>
                <TableCell size="small"><Typography variant="caption">{z.no}</Typography></TableCell>
                <TableCell size="small"><Typography variant="caption">{z.rashi_hindi} ({z.name_english})</Typography></TableCell>
                <TableCell size="small"><Typography variant="caption">{z.element}</Typography></TableCell>
                <TableCell size="small"><Typography variant="caption">{z.nature}</Typography></TableCell>
                <TableCell size="small"><Typography variant="caption">{z.gender}</Typography></TableCell>
                <TableCell size="small"><Typography variant="caption">{z.direction}</Typography></TableCell>
                <TableCell size="small"><Typography variant="caption">{z.color}</Typography></TableCell>
                <TableCell size="small"><Typography variant="caption">{z.body_part}</Typography></TableCell>
                <TableCell size="small"><Typography variant="caption">{z.animal}</Typography></TableCell>
                <TableCell size="small"><Typography variant="caption">{z.nakshatras.join(", ")}</Typography></TableCell>
                <TableCell size="small"><Typography variant="caption">{z.exaltation.planet} ({z.exaltation.degree}°)</Typography></TableCell>
                <TableCell size="small"><Typography variant="caption">{z.debilitation.planet} ({z.debilitation.degree}°)</Typography></TableCell>
                <TableCell size="small"><Typography variant="caption">{z.mooltrikon.planet} ({z.mooltrikon.range})</Typography></TableCell>
                <TableCell size="small"><Typography variant="caption">{z.lord}</Typography></TableCell>
                <TableCell size="small"><Typography variant="caption">{z.traits}</Typography></TableCell>
                <TableCell size="small"><Typography variant="caption">{z.friends.planets.join(", ")}</Typography></TableCell>
                <TableCell size="small"><Typography variant="caption">{z.enemies.planets.join(", ")}</Typography></TableCell>
                <TableCell size="small"><Typography variant="caption">{z.neutrals.planets.join(", ")}</Typography></TableCell>
                <TableCell size="small"><Typography variant="caption">{z.friends.zodiacs.join(", ")}</Typography></TableCell>
                <TableCell size="small"><Typography variant="caption">{z.enemies.zodiacs.join(", ")}</Typography></TableCell>
                <TableCell size="small"><Typography variant="caption">{z.neutrals.zodiacs.join(", ")}</Typography></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </TableContainer>
        
    </Paper>
  );
};

export default function Zodiacs() {
  return <ZodiacsTable zodiacs={zodiacsData} />;
}

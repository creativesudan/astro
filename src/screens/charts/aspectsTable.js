import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@mui/material";

function AspectsTable({ aspects }) {
  if (!aspects || aspects.length === 0) {
    return <Typography variant="body1">No aspects data available.</Typography>;
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Planet</TableCell>
            <TableCell>From House</TableCell>
            <TableCell>Aspected House</TableCell>
            <TableCell>Aspect Type</TableCell>
            <TableCell>Strength</TableCell>
            <TableCell>Effect</TableCell>
            <TableCell>Strength Reason</TableCell>
            <TableCell>Effect Reason</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {aspects.map((asp, idx) => (
            <TableRow key={idx}>
              <TableCell>{asp.planet_name}</TableCell>
              <TableCell>{asp.house_from}</TableCell>
              <TableCell>{asp.house_aspected}</TableCell>
              <TableCell>{asp.type}</TableCell>
              <TableCell>{asp.strength}</TableCell>
              <TableCell>{asp.effect}</TableCell>
              <TableCell>{asp.strengthReason}</TableCell>
              <TableCell>{asp.effectReason}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default AspectsTable;

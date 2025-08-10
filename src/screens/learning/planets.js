import React, { useState } from "react";
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, TextField,
  Box,
  Typography
} from "@mui/material";
import planets from "../../data/planets";


const PlanetsTable = ({ planets }) => {
    return (
      <table border="1" cellPadding="8" style={{ borderCollapse: 'collapse', width: '100%' }}>
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        {/* <th>Symbol</th> */}
        <th>Karak</th>
        <th>Exalted In</th>
        <th>Debilitated In</th>
        <th>Drishti</th>
        <th>Friends</th>
        <th>Enemies</th>
        <th>Neutral</th>
        <th>Professions</th>
        <th>Favorable Colors</th>
        <th>Unfavorable Colors</th>
        <th>Day</th>
      </tr>
    </thead>
    <tbody>
      {planets.map((planet) => (
        <tr key={planet.no}>
          <td>{planet.no}</td>
          <td>{planet.hindi_name} ({planet.name})</td>
          {/* <td>{planet.symbol}</td> */}
          <td>{planet.karak}</td>
          <td>{planet.exalted_in.sign} (House {planet.exalted_in.house}, {planet.exalted_in.degree}°)</td>
          <td>{planet.debilitated_in.sign} (House {planet.debilitated_in.house}, {planet.debilitated_in.degree}°)</td>
          <td>
            {planet.drishti.map((d, i) => (
              <div key={i}>
                House {d.no} ({d.type})
              </div>
            ))}
          </td>
          <td>{planet.relationships.friends.join(', ')}</td>
          <td>{planet.relationships.enemies.join(', ')}</td>
          <td>{planet.relationships.neutral.join(', ')}</td>
          <td>{planet.professions.join(', ')}</td>
          <td>{planet.color.favorable.join(', ')}</td>
          <td>{planet.color.unfavorable.join(', ')}</td>
          <td>{planet.day}</td>
        </tr>
      ))}
    </tbody>
      </table>
    );
  };

export default function Planets() {
  return  <PlanetsTable planets={planets}/>
}

import React, { useState } from "react";
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, TextField,
  Box,
  Typography
} from "@mui/material";
import houses from "../../data/houses";


const HousesTable = ({ houses }) => {
    return (
      <>
        {houses.map((house, index) => (
          <table key={index} border="1" cellPadding="10" cellSpacing="0" style={{ width: '100%', marginBottom: '40px', borderCollapse: 'collapse' }}>
            <caption style={{ fontWeight: 'bold', fontSize: '18px', padding: '10px' }}>
              House {house.no}: {house.theme}
            </caption>
            <thead>
              <tr style={{ backgroundColor: '#ffe6e6' }}>
                <th colSpan="2"  style={{ backgroundColor: '#ffe6e6' }}>Problems</th>
              </tr>
              <tr>
                <th>Planet</th>
                <th>Effect</th>
              </tr>
            </thead>
            <tbody>
              {house.problems.map((item, idx) => (
                <tr key={'p' + idx}>
                  <td>{item.planet}</td>
                  <td>{item.effect}</td>
                </tr>
              ))}
              <tr style={{ backgroundColor: '#e6ffe6' }}>
                <th colSpan="2" style={{ backgroundColor: '#e6ffe6' }}>Benefits</th>
              </tr>
              <tr>
                <th>Planet</th>
                <th>Effect</th>
              </tr>
              {house.benefits.map((item, idx) => (
                <tr key={'b' + idx}>
                  <td>{item.planet}</td>
                  <td>{item.effect}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ))}
      </>
    );
  }

export default function Planets() {
  return  <HousesTable houses={houses}/>
}

import React, { useEffect, useState } from 'react';
import axios from "axios";
import {
  Box, Button, Paper, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, Typography
} from '@mui/material';
import { Link } from 'react-router-dom';

function KundliList() {
  const [savedKundlis, setSavedKundlis] = useState([]);

  async function fetchSavedKundlis() {
    try {
      const res = await axios.get("http://localhost:8000/api/kundli");
      setSavedKundlis(res.data);
    } catch (err) {
      console.error("Error fetching kundlis:", err);
    }
  }

  useEffect(() => {
    fetchSavedKundlis();
  }, []);

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6">Saved Kundlis</Typography>

      {savedKundlis.length === 0 ? (
        <Typography>No saved kundlis yet.</Typography>
      ) : (
        <TableContainer component={Paper} sx={{ mt: 2 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Gender</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Time</TableCell>
                <TableCell>Place</TableCell>
                <TableCell>Latitude</TableCell>
                <TableCell>Longitude</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {savedKundlis.map((k, i) => (
                <TableRow key={i}>
                  <TableCell>{k.name}</TableCell>
                  <TableCell>{k.gender}</TableCell>
                  <TableCell>{`${String(k.day).padStart(2, '0')}-${String(k.month).padStart(2, '0')}-${k.year}`}</TableCell>
                  <TableCell>{`${String(k.hourIST).padStart(2, '0')}:${String(k.minute).padStart(2, '0')}`}</TableCell>
                  <TableCell>{k.place}</TableCell>
                  <TableCell>{k.lat}</TableCell>
                  <TableCell>{k.lon}</TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      component={Link}
                      to={`/charts/${k.id}`} // index ko id ki tarah use kiya
                    >
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
}

export default KundliList;
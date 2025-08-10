// src/components/KundliForm.jsx
import React from "react";
import { Grid, TextField, Button } from "@mui/material";

const KundliForm = ({ formData, handleChange, handleSubmit }) => {
  return (
    <div style={{ marginTop: 20, paddingLeft: 60, flex: 1 }}>
      <h2>Kundli Form</h2>
   
        <Grid container spacing={3}>
          <Grid item size={{ xs: 6, md: 8 }}>
            <TextField
              fullWidth
              label="Date"
              size="small"
              value={formData.day}
              onChange={handleChange("day")}
            />
          </Grid>
          <Grid item size={{ xs: 6, md: 8 }}>
            <TextField
              fullWidth
              label="Month"
              size="small"
              value={formData.month}
              onChange={handleChange("month")}
            />
          </Grid>
          <Grid item size={{ xs: 6, md: 8 }}>
            <TextField
              fullWidth
              label="Year"
              size="small"
              value={formData.year}
              onChange={handleChange("year")}
            />
          </Grid>
          <Grid></Grid>
          <Grid item size={{ xs: 6, md: 4 }}>
            <TextField
              fullWidth
              label="HH"
              size="small"
              value={formData.hourIST}
              onChange={handleChange("hourIST")}
            />
          </Grid>
          <Grid item size={{ xs: 6, md: 4 }}>
            <TextField
              fullWidth
              label="MM"
              size="small"
              value={formData.minute}
              onChange={handleChange("minute")}
            />
          </Grid>
          <Grid></Grid>
          <Grid item size={{ xs: 6, md: 4 }}>
            <TextField
              fullWidth
              label="latitude"
              size="small"
              value={formData.lat}
              onChange={handleChange("lat")}
            />
          </Grid>
          <Grid item size={{ xs: 6, md: 4 }}>
            <TextField
              fullWidth
              label="longitude"
              size="small"
              value={formData.lon}
              onChange={handleChange("lon")}
            />
          </Grid>
          <Grid item size={{ xs: 6, md: 8 }}>
            <Button variant="contained" fullWidth onClick={handleSubmit}>
              Submit
            </Button>
          </Grid>
        </Grid>
    </div>
  );
};

export default KundliForm;

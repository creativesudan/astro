import React, { useState, useMemo } from "react";
import {
  Box,
  Button,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Paper,
} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { Country, State, City } from "country-state-city";

export default function CreateKundliMUI() {
  const [form, setForm] = useState({
    name: "",
    gender: "male",
    date: "",
    time: "",
    place: "",
    lat: "",
    lon: "",
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  function updateField(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function parseDateTimeToPayload(dateStr, timeStr) {
    if (!dateStr || !timeStr) return null;
    const [yearStr, monthStr, dayStr] = dateStr.split("-");
    const [hourStr, minuteStr] = timeStr.split(":");
    return {
      year: parseInt(yearStr, 10),
      month: parseInt(monthStr, 10),
      day: parseInt(dayStr, 10),
      hourIST: parseInt(hourStr, 10),
      minute: parseInt(minuteStr, 10),
    };
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setResult(null);

    if (!form.name.trim()) return setError("Please enter name.");
    if (!form.date) return setError("Please select date of birth.");
    if (!form.time) return setError("Please select time of birth.");
    if (!form.lat || !form.lon)
      return setError("Please provide latitude and longitude.");

    const dt = parseDateTimeToPayload(form.date, form.time);
    if (!dt) return setError("Invalid date/time.");

    const payload = {
      name: form.name.trim(),
      gender: form.gender,
      place: form.place.trim(),
      ...dt,
      lat: parseFloat(form.lat),
      lon: parseFloat(form.lon),
    };

    try {
      setLoading(true);
    //   const res = await fetch("/api/kundli", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(payload),
    //   });

    const res = await fetch("http://localhost:8000/api/kundli", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    });

      if (!res.ok) throw new Error(await res.text());

      setResult(await res.json());
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  function useMyLocation() {
    if (!navigator.geolocation)
      return setError("Geolocation not supported in this browser.");
    setError(null);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        updateField("lat", pos.coords.latitude.toFixed(6));
        updateField("lon", pos.coords.longitude.toFixed(6));
      },
      (err) => setError("Unable to get location: " + err.message)
    );
  }

  function fillDelhi() {
    updateField("place", "New Delhi, Delhi");
    updateField("lat", "28.613939");
    updateField("lon", "77.209023");
  }

  // 📌 Generate cities grouped by state from country-state-city
  const indiaStates = useMemo(() => State.getStatesOfCountry("IN"), []);
  const allCities = useMemo(() => {
    return indiaStates.flatMap((state) => {
      return City.getCitiesOfState("IN", state.isoCode).map((c) => ({
        city: c.name,
        state: state.name,
        lat: c.latitude,
        lon: c.longitude,
      }));
    });
  }, [indiaStates]);

  return (
    <Paper sx={{ maxWidth: 800, mx: "auto", p: 4 }}>
      <Typography variant="h5" gutterBottom>
        Create Kundli 
      </Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>

{/* Section 1 - Personal Details */}
<Box sx={{ mb: 4 }}>
  <Grid container spacing={2}>
    <Grid item xs={12} size={3}>
      <TextField
        label="Full Name"
        value={form.name}
        onChange={(e) => updateField("name", e.target.value)}
        fullWidth
      />
    </Grid>

    <Grid item xs={12} size={3}>
      <FormControl fullWidth>
        <InputLabel>Gender</InputLabel>
        <Select
          value={form.gender}
          label="Gender"
          onChange={(e) => updateField("gender", e.target.value)}
        >
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
          <MenuItem value="other">Other</MenuItem>
        </Select>
      </FormControl>
    </Grid>

    <Grid item xs={12} size={3}>
      <TextField
        type="date"
        label="Date of Birth"
        InputLabelProps={{ shrink: true }}
        value={form.date}
        onChange={(e) => updateField("date", e.target.value)}
        fullWidth
      />
    </Grid>

    <Grid item xs={12} size={3}>
      <TextField
        type="time"
        label="Time of Birth"
        InputLabelProps={{ shrink: true }}
        value={form.time}
        onChange={(e) => updateField("time", e.target.value)}
        fullWidth
      />
    </Grid>
  </Grid>
</Box>

    {/* Section 2 - Place Details */}
    <Box sx={{ mb: 4 }}>
    <Grid container spacing={2}>
        <Grid item xs={12} size={6}>
        <Autocomplete
            options={allCities}
            getOptionLabel={(option) => `${option.city}, ${option.state}`}
            groupBy={(option) => option.state}
            onChange={(event, newValue) => {
            if (newValue) {
                updateField("place", `${newValue.city}, ${newValue.state}`);
                updateField("lat", newValue.lat.toString());
                updateField("lon", newValue.lon.toString());
            }
            }}
            renderInput={(params) => (
            <TextField {...params} label="Place" fullWidth/>
            )}
        />
        </Grid>

        <Grid item xs={12} size={3}>
        <TextField
            label="Latitude"
            value={form.lat}
            onChange={(e) => updateField("lat", e.target.value)}
            fullWidth
        />
        </Grid>

        <Grid item xs={12} size={3}>
        <TextField
            label="Longitude"
            value={form.lon}
            onChange={(e) => updateField("lon", e.target.value)}
            fullWidth
        />
        </Grid>
    </Grid>
    </Box>

    {/* Section 3 - Actions */}
    <Box sx={{ mb: 4 }}>
    <Grid container spacing={2}>
        <Grid item xs={12} display="flex" gap={1}>
        <Button variant="outlined" onClick={useMyLocation}>
            Use My Location
        </Button>
        <Button variant="outlined" onClick={fillDelhi}>
            New Delhi
        </Button>
        <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ ml: "auto" }}
            disabled={loading}
        >
            {loading ? "Generating..." : "Generate Kundli"}
        </Button>
        </Grid>
    </Grid>
    </Box>

    {error && (
    <Typography color="error" sx={{ mt: 2 }}>
        {error}
    </Typography>
    )}
    </Box>


      <Box sx={{ mt: 4 }}>
        <Typography variant="h6">Result</Typography>
        {!result && (
          <Typography variant="body2" color="text.secondary">
            No result yet. Submit the form to generate kundli.
          </Typography>
        )}
        {result && (
          <Paper sx={{ p: 2, mt: 1, bgcolor: "#f9f9f9" }}>
            <pre style={{ whiteSpace: "pre-wrap" }}>
              {JSON.stringify(result, null, 2)}
            </pre>
          </Paper>
        )}
      </Box>
    </Paper>
  );
}

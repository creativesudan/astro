import React, { useState } from "react";
import KundliForm from "../form/create_kundli";
import D1_chart from "./d1_chart";
import PropTypes from "prop-types";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import PlanetStrengthTable from "./planetStrength";
import DoshTable from "./doshTable";
import AspectsTable from "./aspectsTable";
import YogaTable from "./yogas";
import planets from "../../data/planets";
import { getPlanetaryAspects } from "../../utils/aspects";

function Charts() {
  const [formData, setFormData] = useState({
    day: "1",
    month: "12",
    year: "1995",
    hourIST: "11",
    minute: "35",
    lat: 28.6139,
    lon: 77.2090,
  });

  const [kundliData, setKundli] = useState({});
  const [value, setValue] = useState(0);

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSubmit = () => {
    fetch("http://localhost:8000/api/kundli", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        year: parseInt(formData.year),
        month: parseInt(formData.month),
        day: parseInt(formData.day),
        hourIST: parseInt(formData.hourIST),
        minute: parseInt(formData.minute),
        lat: parseFloat(formData.lat),
        lon: parseFloat(formData.lon),
      }),
    })
      .then((res) => res.json())
      .then((json) => setKundli(json))
      .catch((err) => console.error("Fetch error:", err));
  };

  const handleTabChange = (event, newValue) => setValue(newValue);

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <div role="tabpanel" hidden={value !== index} {...other}>
        {value === index && (
          <Box sx={{ p: 3 }}>
            {children}
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  const aspects = getPlanetaryAspects(kundliData, planets);

  return (
    <>
      <div className="chart">
        <fieldset>
          <Typography variant="h6">D1 Chart</Typography>
          <D1_chart kundliData={kundliData} />
        </fieldset>
        <KundliForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
      </div>

      <Box sx={{ bgcolor: "background.paper" }}>
        <Tabs value={value} onChange={handleTabChange} variant="scrollable" scrollButtons="auto">
          <Tab label="Basic Details" />
          <Tab label="Dosha" />
          <Tab label="Yogas" />
          <Tab label="Drishti" />
        </Tabs>

        <TabPanel value={value} index={0}>
          <PlanetStrengthTable kundliData={kundliData} aspects={aspects} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <DoshTable kundliData={kundliData} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <YogaTable kundliData={kundliData}/>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <AspectsTable aspects={aspects} />
        </TabPanel>
      </Box>
    </>
  );
}

export default Charts;

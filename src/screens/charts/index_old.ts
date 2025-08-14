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
import DashaTable from "./DashaTable";
import D9_chart from "./d9_chart";
import KPSystem from "./kpsystem";

import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import GocharTable from "./gocharTable";

function Charts() {
  const [formData, setFormData] = useState({
    day: "13",
    month: "4",
    year: "1997",
    hourIST: "22",
    minute: "10",
    lat: 54.5973,
    lon: 5.9301,
  });

  const [kundliData, setKundli] = useState(null);
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
      .then((json) => {
        setKundli(json);
        console.log("Kundli Data:", json);
      })
      .catch((err) => console.error("Fetch error:", err));
  };

  const handleTabChange = (event, newValue) => setValue(newValue);

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <div role="tabpanel" hidden={value !== index} {...other}>
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  const aspects = getPlanetaryAspects(kundliData || {}, planets);

  const birthDate = new Date(
    parseInt(formData.year),
    parseInt(formData.month) - 1,
    parseInt(formData.day),
    parseInt(formData.hourIST),
    parseInt(formData.minute)
  );

  return (
    <>
      <div>
        <div className="chart">
          <fieldset>
            <Typography variant="h6">D1 Chart</Typography>
            {kundliData?.houses ? (
              <D1_chart kundliData={kundliData} />
            ) : (
              <Typography>कृपया जन्म विवरण भरें और कुंडली बनाएं।</Typography>
            )}
          </fieldset>

          <KundliForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>

        {/* KP System Dynamic */}
        <GocharTable kundliData={kundliData} date={new Date()} />
        <KPSystem kundliData={kundliData} planets={planets} birthDate={birthDate} />

        <fieldset>
          <legend>Planetary Strengths</legend>
          <Box sx={{ bgcolor: "background.paper" }}>
            <Tabs
              value={value}
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons="auto"
            >
              <Tab label="Basic Details" />
              <Tab label="Dosha" />
              <Tab label="Yogas" />
              <Tab label="Drishti" />
            </Tabs>
            <TabPanel value={value} index={0}>
              <PlanetStrengthTable kundliData={kundliData || {}} aspects={aspects} />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <DoshTable kundliData={kundliData || {}} />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <YogaTable kundliData={kundliData || {}} />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <AspectsTable aspects={aspects} />
            </TabPanel>
          </Box>
        </fieldset>

        <fieldset>
          <legend>Dashas</legend>
          {kundliData ? (
            <Box>
              <DashaTable
                moonNakshatraDegree={kundliData.moonNakshatraDegree ?? 12.8}
                birthDate={birthDate}
                totalYears={50}
              />
            </Box>
          ) : (
            <Typography>
              कृपया जन्म विवरण दर्ज करें और कुंडली बनाएं।
            </Typography>
          )}
        </fieldset>
      </div>
    </>
  );
}

export default Charts;

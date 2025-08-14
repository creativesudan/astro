import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
import KPSystem from "./kpsystem";
import GocharTable from "./gocharTable";
import DeathPeriods from "./deathPeriod";

function Charts() {
  const { id } = useParams();
  const [kundliData, setKundli] = useState(null);
  const [periods, setPeriods] = useState({ sadeSati: [], dhaiya: [], panuti: [] });
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(true);
  const [periodsLoading, setPeriodsLoading] = useState(true);

  // -------------------- Fetch Kundli --------------------
  useEffect(() => {
    if (!id) return;
    setLoading(true);

    fetch(`http://localhost:8000/api/kundli/${id}`)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then(data => {
        let item = Array.isArray(data) ? data.find(k => String(k.id) === String(id)) : data;
        if (!item) {
          setKundli(null);
          setLoading(false);
          return;
        }

        const gk = item.generatedKundli;
        const moonHouse = gk?.houses?.find(h => h.planets?.some(p => p.name?.toLowerCase() === "moon"));
        const moon = moonHouse?.planets?.find(p => p.name?.toLowerCase() === "moon");

        const mappedKundli = {
          id: item.id ?? null,
          name: item.name ?? "Unknown",
          gender: item.gender ?? "Unknown",
          place: item.place ?? "Unknown",
          birthDate: new Date(
            item.year ?? 0,
            (item.month ?? 1) - 1,
            item.day ?? 1,
            item.hourIST ?? 0,
            item.minute ?? 0
          ),
          ascendant: gk?.ascendant ?? null,
          houses: gk?.houses ?? [],
          moonNakshatraDegree: typeof moon?.deg === "number" ? moon.deg : 0,
        };

        setKundli(mappedKundli);
        setLoading(false);
      })
      .catch(err => {
        console.error("Fetch Kundli error:", err);
        setKundli(null);
        setLoading(false);
      });
  }, [id]);

  // -------------------- Fetch Periods --------------------
  useEffect(() => {
    if (!id) return;
    setPeriodsLoading(true);

    fetch(`http://localhost:8000/api/periods/${id}`)
      .then(res => res.json())
      .then(data => {
        if (data?.success && data.periods) {
          setPeriods({
            sadeSati: data.periods.sadeSati ?? [],
            dhaiya: data.periods.dhaiya ?? [],
            panuti: data.periods.panuti ?? [],
          });
        } else {
          setPeriods({ sadeSati: [], dhaiya: [], panuti: [] });
        }
        setPeriodsLoading(false);
      })
      .catch(err => {
        console.error("Fetch Periods error:", err);
        setPeriods({ sadeSati: [], dhaiya: [], panuti: [] });
        setPeriodsLoading(false);
      });
  }, [id]);

  const handleTabChange = (event, newValue) => setValue(newValue);

  const TabPanel = ({ children, value, index, ...other }) => (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );



  useEffect(() => {
    setPeriodsLoading(false);
    setPeriods({
      sadeSati: [{ start: new Date("2025-01-01"), end: new Date("2027-03-01") }],
      dhaiya: [{ start: new Date("2026-05-01"), end: new Date("2026-10-01") }],
      panuti: [{ start: new Date("2025-09-01"), end: new Date("2025-12-01") }]
    });
  }, []);


  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  const formatDate = (d) => (d ? new Date(d).toLocaleDateString() : "-");

  if (loading) return <Typography>Loading Kundli data...</Typography>;
  if (!kundliData) return <Typography>❌ Kundli data not found.</Typography>;

  const aspects = getPlanetaryAspects(kundliData, planets);



  return (
    <div>
      {/* D1 Chart */}
      <fieldset>
        <Typography variant="h6">D1 Chart</Typography>
        {kundliData.houses?.length ? (
          <D1_chart kundliData={kundliData} />
        ) : (
          <Typography>कुंडली डेटा उपलब्ध नहीं है।</Typography>
        )}
      </fieldset>

      {/* Gochar Table */}
      <GocharTable kundliData={kundliData} date={new Date()} />

      {/* KP System */}
      <KPSystem kundliData={kundliData} planets={planets} birthDate={kundliData.birthDate} />

      {/* Planetary Strength / Dosha / Yogas / Drishti */}
      <fieldset>
        <legend>Planetary Strengths</legend>
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
            <YogaTable kundliData={kundliData} />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <AspectsTable aspects={aspects} />
          </TabPanel>
        </Box>
      </fieldset>

      {/* Dashas */}
      {/* <fieldset>
        <legend>Dashas</legend>
        <DashaTable moonNakshatraDegree={kundliData.moonNakshatraDegree} birthDate={kundliData.birthDate} totalYears={50} />
      </fieldset> */}

      <DeathPeriods kundliData={kundliData} />

      {/* Moon Periods */}
      <fieldset>
  <legend>Moon Periods (Sade Sati / Dhaiya / Panuti)</legend>
  {periodsLoading ? (
    <Typography>Loading periods...</Typography>
  ) : (
    ["sadeSati", "dhaiya", "panuti"].map((key) => (
      <div key={key} style={{ marginBottom: "15px" }}>
        <Typography variant="subtitle1" sx={{ textTransform: "capitalize" }}>
          {key === "sadeSati"
            ? "Sade Sati"
            : key === "dhaiya"
            ? "Dhaiya"
            : "Panuti"}
        </Typography>
        {periods[key]?.length ? (
          <ul>
            {periods[key].map((p, idx) => (
              <li key={idx}>
                {p.start && p.end
                  ? `${formatDate(p.start)} - ${formatDate(p.end)}`
                  : "Calculating..."}
              </li>
            ))}
          </ul>
        ) : (
          <Typography sx={{ color: "gray" }}>Calculating...</Typography>
        )}
      </div>
    ))
  )}
</fieldset>

    </div>
  );
}

export default Charts;

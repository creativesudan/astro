import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";

function DeathPeriods({ kundliData }) {
  const [deathData, setDeathData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!kundliData?.id) return; // id नहीं है तो API call मत करो
    setLoading(true);

    fetch(`http://localhost:8000/api/death-period/${kundliData.id}`)
      .then(res => res.json())
      .then(data => {
        setDeathData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Death period fetch error:", err);
        setLoading(false);
      });
  }, [kundliData]);

  if (loading) return <Typography>Loading Death Period...</Typography>;
  if (!deathData) return <Typography>Death Period data not available.</Typography>;

  if (!deathData.success) {
    return (
      <Typography color="error">
        {deathData.error || "Error fetching Death Period data"}
      </Typography>
    );
  }

  const dp = deathData.deathPeriod || {};

  return (
    <fieldset style={{ marginTop: "20px" }}>
      <legend>🕰 Death Period</legend>
      <Typography><strong>Risk:</strong> {dp.risk}</Typography>
      <Typography><strong>Comment:</strong> {dp.comment}</Typography>
      <Typography><strong>Suggested Period:</strong> {dp.suggestedPeriod}</Typography>
    </fieldset>
  );
}

DeathPeriods.propTypes = {
  kundliData: PropTypes.shape({
    id: PropTypes.number
  })
};

export default DeathPeriods;

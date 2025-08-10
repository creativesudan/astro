// Charts.jsx
import React, { useState } from "react";
import planets from "../../data/planets"; // ✅ import the new component

const D1_chart = ({ kundliData }) => {
  const House = ({ index }) => (
    <div className="inner">
      <div className="data">
        <div className="rashi">{kundliData?.houses?.[index]?.rashi}</div>
        <span className="planets">
          {kundliData?.houses?.[index]?.planets?.map((e, i, arr) => {
            const planetName = (planets.find((p) => p.no === e.no)?.name || e.name).slice(0, 3);
            return (
              <React.Fragment key={i}>
                <span className="planet-name">
                  {planetName}
                  {e.vakri ? "*" : ""}
                </span>
                <span className="planet-degree">
                  {Math.floor(e?.degInSign)}
                </span>
                {i < arr.length - 1 ? ", " : ""}
              </React.Fragment>
            );
          })}
        </span>
        <div className="house_num">{kundliData?.houses?.[index]?.house}</div>
      </div>
    </div>
  );

  return (
    <div className="kundli">
      <div className="headerHouses">
        <div className="topLeft corner_house">
          <a href="#0" className="topHouse houses"><House index={1} /></a>
          <a href="#0" className="leftHouse houses"><House index={2} /></a>
        </div>
        <div className="topRight corner_house">
          <a href="#0" className="rightHouse houses"><House index={10} /></a>
          <a href="#0" className="topHouse houses"><House index={11} /></a>
        </div>
      </div>

      <div className="center_houses">
        <a href="#0" className="center_4 houses"><House index={0} /></a>
        <a href="#0" className="center_4 houses"><House index={9} /></a>
        <a href="#0" className="center_4 houses"><House index={3} /></a>
        <a href="#0" className="center_4 houses"><House index={6} /></a>
      </div>

      <div className="footerHouses">
        <div className="bottomLeft corner_house">
          <a href="#0" className="bottomHouse houses"><House index={5} /></a>
          <a href="#0" className="leftHouse houses"><House index={4} /></a>
        </div>
        <div className="bottomRight corner_house">
          <a href="#0" className="rightHouse houses"><House index={8} /></a>
          <a href="#0" className="bottomHouse houses"><House index={7} /></a>
        </div>
      </div>
    </div>
  );
};


export default D1_chart;

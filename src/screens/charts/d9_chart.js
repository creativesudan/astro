import React from "react";
import planets from "../../data/planets";  // आपका planets data

const D9_chart = ({ d9Positions }) => {
  // D9 positions में हर ग्रह की Navamsha राशि (sign) होगी। 
  // हम 12 भावों के आधार पर grouping कर के दिखा सकते हैं।

  // Navamsha भाव के लिए 12 house keys बनाएँ
  const houses = Array.from({ length: 12 }, (_, i) => i + 1);

  // प्रत्येक भाव में ग्रहों की लिस्ट समूहित करें (sign = house number)
  const planetsByHouse = {};
  houses.forEach(houseNo => {
    planetsByHouse[houseNo] = [];
  });

  d9Positions?.forEach(p => {
    if (p.navamshaSign) {
      if (!planetsByHouse[p.navamshaSign]) planetsByHouse[p.navamshaSign] = [];
      planetsByHouse[p.navamshaSign].push(p);
    }
  });

  // House component to display each house with planets
  const House = ({ houseNo }) => (
    <div className="inner">
      <div className="data">
        <div className="rashi">{houseNo}</div>
        <span className="planets">
          {planetsByHouse[houseNo]?.map((p, i, arr) => {
            const planetName = (planets.find(pl => pl.no === p.no)?.name || p.name).slice(0, 3);
            return (
              <React.Fragment key={i}>
                <span className="planet-name">
                  {planetName}
                  {p.vakri ? "*" : ""}
                </span>
                <span className="planet-degree">{Math.floor(p.degInSign)}</span>
                {i < arr.length - 1 ? ", " : ""}
              </React.Fragment>
            );
          })}
        </span>
        <div className="house_num">{houseNo}</div>
      </div>
    </div>
  );

  // UI layout same as D1 chart — class names भी आप अपने CSS के अनुसार एडजस्ट करें
  return (
    <div className="kundli">
      <div className="headerHouses">
        <div className="topLeft corner_house">
          <a href="#0" className="topHouse houses"><House houseNo={2} /></a>
          <a href="#0" className="leftHouse houses"><House houseNo={3} /></a>
        </div>
        <div className="topRight corner_house">
          <a href="#0" className="rightHouse houses"><House houseNo={11} /></a>
          <a href="#0" className="topHouse houses"><House houseNo={12} /></a>
        </div>
      </div>

      <div className="center_houses">
        <a href="#0" className="center_4 houses"><House houseNo={1} /></a>
        <a href="#0" className="center_4 houses"><House houseNo={10} /></a>
        <a href="#0" className="center_4 houses"><House houseNo={4} /></a>
        <a href="#0" className="center_4 houses"><House houseNo={7} /></a>
      </div>

      <div className="footerHouses">
        <div className="bottomLeft corner_house">
          <a href="#0" className="bottomHouse houses"><House houseNo={5} /></a>
          <a href="#0" className="leftHouse houses"><House houseNo={6} /></a>
        </div>
        <div className="bottomRight corner_house">
          <a href="#0" className="rightHouse houses"><House houseNo={9} /></a>
          <a href="#0" className="bottomHouse houses"><House houseNo={8} /></a>
        </div>
      </div>
    </div>
  );
};

export default D9_chart;

// App.js
import React, { forwardRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link as RouterLink} from "react-router-dom";
import Home from "../home";
import Charts from "../charts";
import Learning from "../learning";
import MatchMaking from "../matchMaking";



const LinkRouter = forwardRef(function LinkRouter(itemProps, ref) {
    return <RouterLink ref={ref} {...itemProps} role={undefined} />;
  });

  const pages = [
    { label: "Home", path: "/" },
    { label: "Charts", path: "/charts" },
    { label: "Learning", path: "/learning" },
    { label: "Match Making", path: "/match-making" },
    { label: "Info", path: "/info" }
  ];

function PublicRoutes() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/charts" element={<Charts />} /> */}
        <Route path="/charts/:id" element={<Charts />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/match-making" element={<MatchMaking />} />
      </Routes>
    </>
  );
}

export default PublicRoutes;

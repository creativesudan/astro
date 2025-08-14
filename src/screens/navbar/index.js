// App.js
import React, { forwardRef, useState } from "react";
import { AppBar, Box, Toolbar, IconButton, Menu, MenuItem, Typography, Container } from "@mui/material";
import { BrowserRouter as Router, Routes, Route, Link as RouterLink} from "react-router-dom";


const LinkRouter = forwardRef(function LinkRouter(itemProps, ref) {
    return <RouterLink ref={ref} {...itemProps} role={undefined} />;
  });

  const pages = [
    { label: "Home", path: "/" },
    // { label: "Charts", path: "/charts" },
    { label: "Match Making", path: "/match-making" },
    { label: "Learning", path: "/learning" },
    // { label: "Info", path: "/info" }
  ];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <>
      <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              border: '1px solid #fff',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              padding:'4px 8px',
              borderRadius: 2,
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Astrology Nerds
          </Typography>



          <Box sx={{ display: { xs: 'flex' } }}>
              {pages.map((page) => (
                <MenuItem
                  key={page.path}
                  component={LinkRouter}  // ✅ forwardRef wrapper
                  to={page.path}
                  onClick={handleCloseNavMenu}
                  sx={{
                    textAlign: "center",
                    textDecoration: "none",
                    color: "inherit"
                  }}
                >
                  {page.label}
                </MenuItem>
              ))}
          </Box>
        
        
        </Toolbar>
      </Container>
      </AppBar>
    </>
  );
}

export default Navbar;

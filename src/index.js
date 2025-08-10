import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { KundliProvider } from './kundliContext';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff5722", // orange
    },
    secondary: {
      main: "#4caf50", // green
    },
    background: {
      default: "#f4f4f4", // page background
      paper: "#fff"       // card background
    },
    text: {
      primary: "#333",    // main text color
      secondary: "#666"   // secondary text color
    }
  },
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <ThemeProvider theme={theme}>
      <KundliProvider>
        <App />
      </KundliProvider>
    </ThemeProvider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

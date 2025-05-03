import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";
import "@fontsource/inter"; 


let theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2", 
    },
    secondary: {
      main: "#ff4081",
    },
    background: {
      default: "#f9f9fb",
      paper: "#fff",
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    h4: {
      fontWeight: 700,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme); 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

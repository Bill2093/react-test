import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import App from "./App";
//import "./styles.css"; Ya no es necesario con MUI.


const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#f6f7fb",
    },
  },
});
//Task 4: Styling and Responsiveness
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

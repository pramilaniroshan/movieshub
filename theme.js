"use client";
import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#293a36",
      light: "#6CD591",
    },
    secondary: {
      main: "#1B2626",
    },
    success: {
      main: "#34D399",
    },
  },
});

export default theme;

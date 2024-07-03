import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#00A76F",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#F4F6F8",
      paper: "#FFFFFF",
    },
  },
  shape: {
    borderRadius: 16,
  },
});

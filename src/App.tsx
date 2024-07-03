import { Box, Button, AppBar, Toolbar, Typography } from "@mui/material";
import "./App.css";
import { SurfingOutlined } from "@mui/icons-material";
import CountrySelect from "./components/CountrySelect";
import NightsStayIcon from "@mui/icons-material/NightsStay";
function App() {
  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar>
          <NightsStayIcon />
          <Typography variant="h6">Clima app</Typography>
        </Toolbar>
      </AppBar>

      <Box
        display={"flex"}
        justifyContent={"start"}
        alignItems={"start"}
        flexDirection={"column"}
        m={5}
        maxWidth={400}
        mx={"auto"}
        gap={2}
      >
        <CountrySelect />
        <Button startIcon={<SurfingOutlined />} variant="contained">
          Optener clima
        </Button>
      </Box>
    </>
  );
}

export default App;

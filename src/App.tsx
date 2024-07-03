import {
  Box,
  Button,
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
} from "@mui/material";
import "./App.css";
import { SurfingOutlined } from "@mui/icons-material";
import useServerClima from "./api/useServerClima";
import { useState } from "react";
//Icons-----------------------------------
import PlaceIcon from "@mui/icons-material/Place";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import noContentIcon from "../public/ic-content.svg";

function App() {
  const { clima, getClima, isFetching } = useServerClima();

  const [inputCity, setInputCity] = useState<string>("");

  const handleClima = (e: any) => {
    setInputCity(e.target.value);
  };

  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar>
          <NightsStayIcon />
          <Typography variant="h6">ClimateClick</Typography>
        </Toolbar>
      </AppBar>

      <Box px={1} mx={"auto"} maxWidth={450}>
        <Box
          display={"flex"}
          justifyContent={"start"}
          alignItems={"start"}
          flexDirection={"column"}
          my={2}
          gap={1}
          p={2}
          boxShadow={15}
          borderRadius={2}
        >
          <TextField
            fullWidth
            label="Ciudad"
            id="fullWidth"
            onChange={(e) => handleClima(e)}
          />
          <Button
            onClick={() => {
              getClima(inputCity);
            }}
            startIcon={<SurfingOutlined />}
            variant="contained"
          >
            Obtener clima
          </Button>

          {isFetching ? (
            <CircularProgress sx={{ marginTop: "20px", alignSelf: "center" }} />
          ) : clima?.current ? (
            <Card sx={{ width: "100%", marginTop: "20px" }}>
              <CardContent>
                <Typography
                  variant="body1"
                  color="primary"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "12px",
                  }}
                >
                  <PlaceIcon fontSize="small" color="primary" />{" "}
                  {clima?.location?.name}, {clima?.location?.region},{" "}
                  {clima?.location?.country}
                </Typography>
                <Typography variant="h5">Condiciones del tiempo</Typography>
                <Box display="flex" alignItems="center" marginY="12px">
                  <CardMedia
                    component="img"
                    sx={{ width: 64, height: 64 }}
                    image={clima?.current?.condition?.icon}
                    alt={clima?.current?.condition?.text}
                  />
                  <Typography variant="h5" sx={{ marginLeft: "12px" }}>
                    {clima?.current?.temp_c} <sup>o</sup>C
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {clima?.current?.condition?.text}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Humedad: {clima?.current?.humidity}%
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Viento: {clima?.current?.wind_kph} kph{" "}
                  {clima?.current?.wind_dir}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Sensación térmica: {clima?.current?.feelslike_c} <sup>o</sup>C
                </Typography>
              </CardContent>
            </Card>
          ) : (
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              minHeight={"100px"}
              width={"100%"}
              flexDirection={"column"}
            >
              <CardMedia
                component="img"
                sx={{ width: 260 }}
                image={noContentIcon}
                alt={clima?.current?.condition?.text}
              />
              <Typography variant="body2" color="#C4CCD3" ml={1}>
                Sin datos para mostrar
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
}
export default App;

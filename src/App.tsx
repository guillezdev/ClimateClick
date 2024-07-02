import { Box, Button, Container } from "@mui/material";
import "./App.css";
import { SurfingOutlined } from "@mui/icons-material";

function App() {
  return (
    <>
      <Container>
        <Box display={"flex"}>Clima app</Box>
        <Button startIcon={<SurfingOutlined />} variant="text">
          Probar clima
        </Button>
      </Container>
    </>
  );
}

export default App;

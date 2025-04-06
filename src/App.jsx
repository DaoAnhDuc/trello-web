import { Box, Container } from "@mui/material";
import React from "react";
import ModeSelect from "./components/ModeSelect";

const App = ({}) => {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: "100vh", backgroundColor: "primary.main" }}>
      <Box
        sx={{
          backgroundColor: "primary.light",
          height: (theme) => theme.trello.appBarHeight,
          display: "flex",
          alignItems: "center",
        }}
      >
        <ModeSelect />
      </Box>
      <Box
        sx={{
          backgroundColor: "primary.dark",
          height: (theme) => theme.trello.boardBarHeight,
          display: "flex",
          alignItems: "center",
        }}
      >
        Boad bar
      </Box>
      <Box
        sx={{
          backgroundColor: "primary.main",
          height: (theme) => `calc(100% - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`,
          display: "flex",
          alignItems: "center",
        }}
      >
        Box Content
      </Box>
    </Container>
  );
};

export default App;

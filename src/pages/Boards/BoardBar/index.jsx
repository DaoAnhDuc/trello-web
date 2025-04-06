import { Box } from "@mui/material";
import React from "react";

const BoardBar = () => {
  return (
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
  );
};

export default BoardBar;

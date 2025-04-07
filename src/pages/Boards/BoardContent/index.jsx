import { Box } from "@mui/material";
import React from "react";

const BoardContent = () => {
  return (
    <Box
      sx={{
        bgcolor: (theme) => (theme.palette.mode === "dark" ? "#34495e" : "#1976d2"),
        height: (theme) => `calc(100% - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`,
        display: "flex",
        alignItems: "center",
      }}
    >
      Box Content
    </Box>
  );
};

export default BoardContent;

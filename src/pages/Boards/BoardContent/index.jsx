import { Box } from "@mui/material";
import React from "react";

const BoardContent = () => {
  return (
    <Box
      sx={{
        bgcolor: (theme) => (theme.palette.mode === "dark" ? "#34495e" : "#1976d2"),
        height: (theme) => `calc(100% - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`,
        display: "flex",
        p: 2,
      }}
    >
      <Box
        sx={{
          minWidth: 300,
          maxWidth: 300,
          bgcolor: (theme) => (theme.palette.mode === "dark" ? "#333643" : "#ebecf0"),
          borderRadius: "6px",
          height: 400,
        }}
      ></Box>
    </Box>
  );
};

export default BoardContent;

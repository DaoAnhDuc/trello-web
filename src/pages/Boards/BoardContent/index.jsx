import { Box } from "@mui/material";
import React from "react";

const BoardContent = () => {
  return (
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
  );
};

export default BoardContent;

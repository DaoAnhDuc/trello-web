import React from "react";
import Card from "./Card/Card";
import { Box } from "@mui/material";

const ListCards = ({ cards }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        p: "0 5px",
        m: "0 5px",
        maxHeight: (theme) =>
          `calc(${theme.trello.bordContentHeight} - ${theme.spacing(5)} - ${theme.trello.columnHeaderHeight} - ${theme.trello.columnFooterHeight})`,
        overflowX: "hidden",
        overflowY: "auto",
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#ced0da",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "#bfc2cf",
        },
      }}
    >
      {cards.map((card) => (
        <Card key={card._id} card={card} />
      ))}
    </Box>
  );
};

export default ListCards;

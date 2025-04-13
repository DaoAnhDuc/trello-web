import React from "react";
import Column from "./Column/Column";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { NoteAdd } from "@mui/icons-material";
import { horizontalListSortingStrategy, SortableContext } from "@dnd-kit/sortable";

const ListColumns = ({ columns }) => {
  return (
    <SortableContext items={columns?.map(c => c._id)} strategy={horizontalListSortingStrategy}>
      <Box
        sx={{
          bgcolor: "inherit",
          width: "100%",
          height: "100%",
          display: "flex",
          overflowX: "auto",
          overflowY: "hidden",
          gap: 2,
          p: "0 10px",
          "&::-webkit-scrollbar-track": {
            mx: "10px",
          },
        }}
      >
        {columns.map((column) => (
          <Column column={column} key={column._id} />
        ))}
        <Box
          sx={{
            minWidth: 200,
            maxWidth: 200,
            bgcolor: "#ffffff3d",
            borderRadius: "6px",
            height: "fit-content",
          }}
        >
          <Button sx={{ color: "white", width: "100%", justifyContent: "flex-start", py: 1, pl: 2.5 }} startIcon={<NoteAdd />}>
            Add new column
          </Button>
        </Box>
      </Box>
    </SortableContext>
  );
};

export default ListColumns;

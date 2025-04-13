import { Box } from "@mui/material";
import ListColumns from "./ListColumns/ListColumns";
import { mapOrder } from "~/utils/order-array-based-on-another-array";
import { DndContext } from "@dnd-kit/core";
import { useEffect, useState } from "react";
import { arrayMove } from "@dnd-kit/sortable";

const BoardContent = ({ board }) => {
  const [orderColumnsState, setOrderColumnsState] = useState([]);

  useEffect(() => {
    const orderColumns = mapOrder(board.columns, board.columnOrderIds, "_id");
    setOrderColumnsState(orderColumns);
    return () => {};
  }, [board]);

  const handleDragEnd = (event) => {
    console.log(event);
    const { active, over } = event;
    if(!over) return
    if (active.id !== over.id) {
      //lay vi tri cu tu active
      const oldIndex = orderColumnsState.findIndex((c) => c._id === active.id);
      //lay vi tri moi tu over
      const newIndex = orderColumnsState.findIndex((c) => c._id === over.id);

      const dndOrderColumns = arrayMove(orderColumnsState, oldIndex, newIndex);
      const dndOrderColumnsIds = dndOrderColumns.map((i) => i._id);
      console.log(dndOrderColumnsIds);
      setOrderColumnsState(dndOrderColumns);
    }
  };
  return (
    <DndContext onDragEnd={handleDragEnd}>
      <Box
        sx={{
          bgcolor: (theme) => (theme.palette.mode === "dark" ? "#34495e" : "#1976d2"),
          height: (theme) => theme.trello.bordContentHeight,
          padding: "10px 0",
        }}
      >
        <ListColumns columns={orderColumnsState} />
      </Box>
    </DndContext>
  );
};

export default BoardContent;

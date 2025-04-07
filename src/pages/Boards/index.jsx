
const Board = () => {
  return (
    <Box
      sx={{
        bgcolor: (theme) => (theme.palette.mode === "dark" ? "#34495e" : "#1976d2"),
        height: (theme) => theme.trello.boardBarHeight,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{ minWidth: 300, maxWidth: 300, bgcolor: (theme) => (theme.palette.mode === "dark" ? "#333643" : "#ebecf0"), ml: 2, borderRadius: 6, height: 400 }}
      ></Box>
    </Box>
  );
};

export default Board;

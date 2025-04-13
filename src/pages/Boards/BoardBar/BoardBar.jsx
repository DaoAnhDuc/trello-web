import { Dashboard, VpnLock, AddToDrive, Bolt, Filter, FilterList, PersonAdd } from "@mui/icons-material";
import { Avatar, AvatarGroup, Box, Button, Chip, Tooltip } from "@mui/material";
import React from "react";
import { capitalizeFirstLetter } from "~/utils/capitalize-first-letter";

const BoardBar = ({board}) => {
  const MENU_STYLE = {
    color: "white",
    bgcolor: 'transparent',
    border: "none",
    px: 0.5,
    borderRadius: 0.5,
    "& .MuiSvgIcon-root": {
      color: "white",
    },
    "&:hover": {
      bgcolor: "primary.50",
    },
  };
  return (
    <Box
      sx={{
        bgcolor: (theme) => (theme.palette.mode === "dark" ? "#34495e" : "#1976d2"),
        height: (theme) => theme.trello.boardBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        overflowX: "auto",
        overflowY: "hidden",
        px: 2,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Chip icon={<Dashboard />} label={board?.title} clickable sx={MENU_STYLE}></Chip>
        <Chip icon={<VpnLock />} label={capitalizeFirstLetter(board?.type)} clickable sx={MENU_STYLE}></Chip>
        <Chip icon={<AddToDrive />} label="Add to Google Drive" clickable sx={MENU_STYLE}></Chip>
        <Chip icon={<Bolt />} label="AUTOMATION" clickable sx={MENU_STYLE}></Chip>
        <Chip icon={<FilterList />} label="Filters" clickable sx={MENU_STYLE}></Chip>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Button
          startIcon={<PersonAdd />}
          variant="outlined"
          sx={{
            color: "white",
            box: "white",
            borderColor: "white",
            border: "none",
            boxShadow: "0 0 0 0.5px white",
            "&:hover": {
              borderColor: "white",
            },
          }}
        >
          Invite
        </Button>
        <AvatarGroup
          max={3}
          sx={{
            "& .MuiAvatarGroup-avatar": {
              width: 36,
              height: 36,
              fontSize: "1.2rem",
              border: "none",
              color: "white",
              cursor: "pointer",
              "&:first-of-type": {
                bgcolor: "#a4b0de",
              },
            },
          }}
        >
          <Tooltip title="TrungQuanDev">
            <Avatar alt="Remy Sharp" src="https://tse1.mm.bing.net/th?id=OIP.OmY0aMZt_kkYDkN5p2kcQgHaG-&pid=Api&P=0&h=180" />
          </Tooltip>
          <Tooltip title="TrungQuanDev">
            <Avatar alt="Remy Sharp" />
          </Tooltip>
          <Tooltip title="TrungQuanDev">
            <Avatar alt="Remy Sharp" src="https://tse1.mm.bing.net/th?id=OIP.OmY0aMZt_kkYDkN5p2kcQgHaG-&pid=Api&P=0&h=180" />
          </Tooltip>
          <Tooltip title="TrungQuanDev">
            <Avatar alt="Remy Sharp" src="https://tse1.mm.bing.net/th?id=OIP.OmY0aMZt_kkYDkN5p2kcQgHaG-&pid=Api&P=0&h=180" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  );
};

export default BoardBar;

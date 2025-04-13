import AppsIcon from "@mui/icons-material/Apps";
import { Badge, Box, Button, InputAdornment, SvgIcon, TextField, Tooltip, Typography } from "@mui/material";
import { ReactComponent as TrelloIcon } from "~/assets/trello.svg";

import ModeSelect from "../ModeSelect/ModeSelect";
import Workspaces from "./Menus/Workspaces";
import Recent from "./Menus/Recent";
import Started from "./Menus/Started";
import Templates from "./Menus/Templates";
import { Close, HelpOutline, LibraryAdd, NotificationsNone, Search } from "@mui/icons-material";
import Profile from "./Menus/Profile";
import { useState } from "react";

const AppBar = () => {
  const [searchValue, setSearchValue] = useState("")
  return (
    <Box
      px={2}
      sx={{
        bgcolor: (theme) => (theme.palette.mode === "dark" ? "#2c3e50" : "#1565c0"),
        height: (theme) => theme.trello.appBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        overflowX: "auto",
        overflowY: "hidden",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <AppsIcon sx={{ color: "white" }} />
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <SvgIcon component={TrelloIcon} fontSize="small" sx={{ color: "white" }} />
          <Typography variant="span" sx={{ fontWeight: "bold", fontSize: "1.2rem" }} color={"white"}>
            Trello
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 1 }}>
            <Workspaces />
            <Recent />
            <Started />
            <Templates />
            <Button sx={{ color: "white", border: "none", "&:hover": { border: "none" } }} variant="outlined" startIcon={<LibraryAdd />}>
              Create
            </Button>
          </Box>
        </Box>
        <Box></Box>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <TextField
          label="Search..."
          type="text"
          size="small"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search sx={{ color: "white" }} />
              </InputAdornment>
            ),
            endAdornment: searchValue ? (
              <InputAdornment position="end">
                <Close sx={{ color: "white", cursor: "pointer" }} fontSize="small" onClick={() => setSearchValue("")} />
              </InputAdornment>
            ) : null,
          }}
          sx={{
            minWidth: 120,
            maxWidth: 180,
            "& label": {
              color: "white",
              bgcolor: (theme) => (theme.palette.mode === "dark" ? "#2c3e50" : "#1565c0"),
              px: 1,
            },
            "& input": {
              color: "white",
            },
            "& label.Mui-focused": {
              color: "white",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: "none",
                boxShadow: "0 0 0 0.5px white",
              },
              "&:hover fieldset": {
                boxShadow: "0 0 0 1px white",
              },
              "&:Mui-focused fieldset": {
                boxShadow: "0 0 0 1px white",
              },
            },
          }}
        />
        <ModeSelect />
        <Tooltip title="Notification">
          <Badge color="warning" variant="dot" sx={{ cursor: "pointer" }}>
            <NotificationsNone sx={{ cursor: "pointer", color: "white" }} />
          </Badge>
        </Tooltip>
        <Tooltip title="Help">
          <HelpOutline sx={{ cursor: "pointer", color: "white" }} />
        </Tooltip>
        <Profile />
      </Box>
    </Box>
  );
};

export default AppBar;

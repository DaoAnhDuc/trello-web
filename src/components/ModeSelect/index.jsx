import { Box, MenuItem, FormControl, InputLabel, Select } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import { useColorScheme } from "@mui/material/styles";
import React from "react";

const ModeSelect = () => {
  const { mode, setMode } = useColorScheme();

  const handleChange = (event) => {
    const selectedMode = event.target.value;
    setMode(selectedMode);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel
        id="label-select-dark-light-mode"
        sx={{
          color: "white",
          "&.Mui-focused": { color: "white !important" },
        }}
      >
        Mode
      </InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        size="small"
        id="select-dark-light-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
        sx={{
          color: "white",
          ".MuiOutlinedInput-notchedOutline": { border: "none", boxShadow: "0 0 0 0.5px white" },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
            boxShadow: "0 0 0 0.5px white",
          },
          "&:Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
            boxShadow: "0 0 0 1px white",
          },
          ".MuiSvgIcon-root": { color: "white !important" },
        }}
      >
        <MenuItem value="light">
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <LightModeIcon fontSize="small" />
            Light
          </Box>
        </MenuItem>
        <MenuItem value="dark">
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <DarkModeOutlinedIcon fontSize="small" />
            Dark
          </Box>
        </MenuItem>
        <MenuItem value="system">
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <SettingsBrightnessIcon fontSize="small" />
            System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default ModeSelect;

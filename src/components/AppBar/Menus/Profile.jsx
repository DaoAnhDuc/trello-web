import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import React from "react";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
const Profile = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        id="basic-button"
        sx={{ color: "white", p: 0, m: 0 , minWidth: 40}}
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Avatar sx={{ width: 36, height: 36 }} src="https://tse1.mm.bing.net/th?id=OIP.OmY0aMZt_kkYDkN5p2kcQgHaG-&pid=Api&P=0&h=180"></Avatar>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default Profile;

import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import classes from "./Menubar.module.css";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import NavigationItem from "../NavigationItem/NavigationItem";

const Menubar = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.Menubar}>
      <IconButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon fontSize={"large"} />
      </IconButton>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        autoFocus
        // anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        keepMounted
        // transformOrigin={{ vertical: "top", horizontal: "left" }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <NavigationItem link="/">Home</NavigationItem>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavigationItem link="/offers">Offers</NavigationItem>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavigationItem link="/gallery">Gallery</NavigationItem>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavigationItem link="/contact">Book Now</NavigationItem>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavigationItem link="/contact">Contact Us</NavigationItem>
        </MenuItem>
      </Menu>
    </div>
  );
};
export default Menubar;

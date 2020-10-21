import React from "react";
import classes from "./AppBar.module.css";
import NavigationItems from "../NavigationItems/NavigationItems";
import Menubar from "../NavigationItems/Menubar/Menubar";

const AppBar = (props) => {
  return (
    <header>
      <div className={classes.NavigationItems}>
        <NavigationItems />
      </div>
      <div>
        <Menubar />
      </div>
    </header>
  );
};
export default AppBar;

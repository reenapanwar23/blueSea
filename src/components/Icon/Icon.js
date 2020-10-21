import React from "react";
import classes from "./Icon.module.css";

const Icon = (props) => {
  return (
    <span className={classes.Icon}>
      <img
        className={classes.image}
        src={require(`../../assets/${props.link}/${props.img}`)}
        alt="- "
      />
    </span>
  );
};
export default Icon;

import React from "react";
import classes from "./Button.module.css";
const Button = (props) => {
  return (
    <div className={classes.Button}>
      {props.labels.map((label) => (
        <button key={label}>{label}</button>
      ))}
    </div>
  );
};
export default Button;

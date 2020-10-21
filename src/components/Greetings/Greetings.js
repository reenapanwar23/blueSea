import React from "react";
import classes from "./Greetings.module.css";

const Greetings = (props) => {
  return (
    <div>
      <section className={classes.HomeSec}>
        <p>
          Reflecting the peace and beauty of the Ocean, BlueSea is a sanctuary
          for both physical and spiritual rejuvenation.
        </p>
        <button onClick={props.clicked}>Explore</button>
      </section>
    </div>
  );
};
export default Greetings;

import React from "react";
import Icon from "../Icon/Icon";
import classes from "./Activities.module.css";

const Activities = (props) => {
  const activities = [
    {
      icon: "discover.PNG",
      label: "DISCOVER",
    },
    {
      icon: "dining.PNG",
      label: "DINING",
    },
    {
      icon: "facilities.PNG",
      label: "HOTEL FACILITIES & AMENITIES",
    },
    {
      icon: "car.PNG",
      label: "TRANSPORTATION & PARKING",
    },
    {
      icon: "wellness.PNG",
      label: "WELLNESS & SPA",
    },
    {
      icon: "wedding.PNG",
      label: "WEDDING",
    },
  ];

  return (
    <div className={classes.Activities}>
      {activities.map((desc) => {
        return (
          <div key={desc.label} className={classes.Activity}>
            <Icon img={desc.icon} link={"icons"} />
            <p>{desc.label}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Activities;

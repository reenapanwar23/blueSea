import classes from "./NavigationItems.module.css";
import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = (props) => {
  return (
    <div className={classes.NavigationItems}>
      <NavigationItem link="/">Home</NavigationItem>
      {/* <NavigationItem link="/offers">Offers</NavigationItem> */}
      <NavigationItem link="/gallery">Gallery</NavigationItem>
      <NavigationItem link="/contact">Book Now</NavigationItem>
      <NavigationItem link="/contact">Contact Us</NavigationItem>
    </div>
  );
};
export default NavigationItems;

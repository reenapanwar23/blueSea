import React from "react";
import AppBar from "../../components/AppBar/AppBar";
import Categories from "../../components/Category/Categories";
import Button from "../../components/UI/Button/Button";
import classes from "./Gallery.module.css";
const Gallery = (props) => {
  return (
    <div className={classes.Gallery}>
      <AppBar/>
      <div>
        <Categories />
      </div>
      <div className={classes.direct}>
        <h4>
         Offering you luxury villas with delicious food and fun filled activities at best prices!
        </h4>
        <div className={classes.Buttons}>
        <Button labels={["BOOK NOW","VIEW OFFERS"]}/>
        </div>
        
      </div>
    </div>
  );
};
export default Gallery;

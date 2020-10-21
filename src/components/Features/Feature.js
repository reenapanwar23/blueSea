import React from "react";
import classes from "./Feature.module.css";
import { Slide } from "react-reveal";
import Features from "./Features";
import Icon from "../Icon/Icon";
import Button from "../UI/Button/Button";

const Feature = (props) => {
  return Features.map((EachFeature) => {
    return (
      <div className={classes.Feature} key={EachFeature.title}>
        <Slide left duration={1500} distance={"20px"}>
          <div className={classes.main}>
            <Icon img={EachFeature.images} link={"Gallery/Features"} />
          </div>
        </Slide>

        <Slide right duration={1500} distance={"20px"}>
          <div className={classes.cont}>
            <Slide right duration={1500} delay={100} distance={"20px"}>
              <h2>{EachFeature.title}</h2>
            </Slide>

            <Slide right duration={1500} delay={300} distance={"20px"}>
              <p>{EachFeature.desc}</p>
              <Button labels={EachFeature.buttonLabels} />
            </Slide>
          </div>
        </Slide>
      </div>
    );
  });
};

export default Feature;

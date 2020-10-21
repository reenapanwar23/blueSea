import React from "react";
import { AutoRotatingCarousel, Slide } from "material-auto-rotating-carousel";
import { blue, green, lightGreen, lightBlue } from "@material-ui/core/colors";
import classe from "./Carousel.module.css";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

const Carousel = (props) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));

  console.log(matches);
  const desktopView = (
    <AutoRotatingCarousel
      label="Close"
      open={props.open}
      onClose={() => {
        props.Closed();
      }}
      onStart={() => {
        props.Closed();
      }}
      style={{ position: "absolute" }}
      mobile={matches}
    >
      <Slide
        media={
          <img
            src={require("../../assets/Gallery/Accomodation/A3.PNG")}
            alt="Villas"
          />
        }
        mediaBackgroundStyle={{ backgroundColor: blue[400] }}
        style={{ backgroundColor: blue[600] }}
        title="Ocean View Accomodations"
        subtitle="Sleep deeply to the sound of waves and awake to the panoramic ocean views. "
      />
      <Slide
        media={
          <img
            src={require("../../assets/Gallery/Activities/A3.jpg")}
            alt="Scuba Diving"
          />
        }
        mediaBackgroundStyle={{ backgroundColor: green[400] }}
        style={{ backgroundColor: green[600] }}
        title="Must try Experiences"
        subtitle="Discover the wonderland underneath the turquoise waters exuberating with sea-life."
      />
      <Slide
        media={
          <img
            src={require("../../assets/Gallery/Eventss/E1.jpg")}
            alt="Celebrations"
          />
        }
        mediaBackgroundStyle={{ backgroundColor: lightBlue[400] }}
        style={{ backgroundColor: lightBlue[600] }}
        title="For out-of-the-ordinary moments"
        subtitle="Perfect celebration on a hidden island that suits your specifications."
      />
      <Slide
        media={
          <img
            src={require("../../assets/Gallery/Wellness/S2.jpg")}
            alt="Spa"
          />
        }
        mediaBackgroundStyle={{ backgroundColor: lightGreen[500] }}
        style={{ backgroundColor: lightGreen[700] }}
        title="Wellness & Spa"
        subtitle="Achieve a healthy, balanced body and mind with our wellness programs."
      />
    </AutoRotatingCarousel>
  );
  return (
    <div style={{ position: "relative", width: "100%" }}>
      <div className={classe.desktopView}>{desktopView}</div>
    </div>
  );
};

export default Carousel;

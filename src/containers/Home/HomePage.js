import classes from "./HomePage.module.css";
import React, { useState } from "react";
import AppBar from "../../components/AppBar/AppBar";
import Greetings from "../../components/Greetings/Greetings";
import Carousel from "../../components/Carousel/Carousel";
import Activities from "../../components/Activities/Activities";
import Feature from "../../components/Features/Feature";

const HomePage = () => {
  const [openExplore, setExplore] = useState(false);
  return (
    <div>
      <div className={classes.HomePage}>
        <AppBar />
        <main>
          <h1>BlueSea - Infinity & Beyond</h1>
        </main>
        <Greetings clicked={() => setExplore(true)} />
        <Carousel
          open={openExplore}
          Closed={() => {
            setExplore(false);
          }}
        />
      </div>
      <div className={classes.Activities}>
        <Activities />
      </div>
      <div>
        <Feature />
      </div>
    </div>
  );
};

export default HomePage;

import React from "react";
import "./App.css";
import HomePage from "./containers/Home/HomePage";
import { Redirect, Route, Switch } from "react-router-dom";
import Contact from "./containers/Contact/Contact";
import Gallery from "./containers/Gallery/Gallery";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/contact" component={Contact} />
        <Route path="/gallery" component={Gallery} />
        <Redirect path="/offers" to="/"/>
      </Switch>
    </div>
  );
}

export default App;

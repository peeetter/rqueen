import React from "react";
import "./Main.css";

import { Switch, Route } from "react-router-dom";

import Home from "../Home/Home.js";
import About from "../About/About";
import Contact from "../Contact/Contact.js";

function Main() {
  return (
    <div className="main">
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path={`/about`} component={About}></Route>
        <Route exact path="/contact" component={Contact}></Route>
      </Switch>
    </div>
  );
}

export default Main;

import React from "react";
import "./Main.css";
import { Switch, Route } from "react-router-dom";
import WhatWeDo from "../WhatWeDo/WhatWeDo.js";
import WhoWeAre from "../WhoWeAre/WhoWeAre.js";
import Contact from "../Contact/Contact.js";
import Home from "../Home/Home.js";

function Main() {
  return (
    <div className="main">
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path={`/who-we-are`} component={WhoWeAre}></Route>
        <Route path="/what-we-do" component={WhatWeDo}></Route>
        <Route path="/contact" component={Contact}></Route>
      </Switch>
    </div>
  );
}

export default Main;

import React from "react";
import "./Main.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import WhatWeDo from "../WhatWeDo/WhatWeDo.js";
import WhoWeAre from "../WhoWeAre/WhoWeAre.js";
import Contact from "../Contact/Contact.js";
import Home from "../Home/Home.js";

function Main() {
  return (
    <div className="main">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path={`/who-we-are`} component={WhoWeAre}></Route>
          <Route exact path="/what-we-do" component={WhatWeDo}></Route>
          <Route exact path="/contact" component={Contact}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Main;

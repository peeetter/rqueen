import React from "react";
import "./Main.css";

import { Switch, Route } from "react-router-dom";

import WhatWeDo from "../WhatWeDo/WhatWeDo.js";
import HowWeThink from "../HowWeThink/HowWeThink.js";
import Contact from "../Contact/Contact.js";

function Main() {
  return (
    <div className="main">
      <Switch>
        <Route exact path="/" component={WhatWeDo}></Route>
        <Route exact path={`/who-we-are`} component={HowWeThink}></Route>
        <Route exact path="/what-we-do" component={WhatWeDo}></Route>
        <Route exact path="/contact" component={Contact}></Route>
      </Switch>
    </div>
  );
}

export default Main;

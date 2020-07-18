import React, { Component } from "react";

import "./App.css";
import Header from "./Components/Header/Header.js";
import Main from "./Components/Main/Main.js";
import WhoWeAre from "./Components/WhoWeAre/WhoWeAre.js";
import WhatWeDo from "./Components/WhatWeDo/WhatWeDo.js";
import Contact from "./Components/Contact/Contact.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;

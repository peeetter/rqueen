import React, { Component } from "react";

import "./App.css";
import Header from "./Components/Header/Header.js";
import Main from "./Components/Main/Main.js";
import WhoWeAre from "./Components/WhoWeAre/WhoWeAre.js";
import WhatWeDo from "./Components/WhatWeDo/WhatWeDo.js";
import Contact from "./Components/Contact/Contact.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, description: "Test" },
        { id: 2, description: "Test2" },
        { id: 3, description: "Test3" },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        <Header header={this.state.todos[0].id} />
        <Main />
      </div>
    );
  }
}

export default App;

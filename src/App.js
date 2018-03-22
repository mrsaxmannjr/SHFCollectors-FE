import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Header from "./Components/Header";
import Home from "./Components/Home";
import FigureDetail from "./Components/FigureDetail";
import Collection from "./Components/Collection";
import Footer from "./Components/Footer";

class App extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  render() {
    return (
      <Router>
        <div >
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/:id" component={FigureDetail} />
          <Route path="/Collection" component={Collection} />
          {/* <Footer /> */}
        </div>
      </Router>
    );
  }
}

export default App;

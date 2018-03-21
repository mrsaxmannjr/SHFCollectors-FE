import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Header from "./Components/Header";
import Home from "./Components/Home";
import FiguresGrid from "./Components/FiguresGrid";
import FigurePage from "./Components/FigurePage";
import Collection from "./Components/Collection";
import Footer from "./Components/Footer";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Router>
        <div >
          <Header />
          <Route exact path="/" component={Home} />
          {/* <Route path="/FiguresGrid" component={FiguresGrid} /> */}
          <Route path="/FigurePage" component={FigurePage} />
          <Route path="/Collection" component={Collection} />
          <Footer />
        </div>
      </Router>

    );
  }
}

export default App;

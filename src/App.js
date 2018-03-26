import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Header from "./Components/Header";
import Home from "./Components/Home";
import FigureDetail from "./Components/FigureDetail";
import Collection from "./Components/Collection";
import About from "./Components/About";
import Footer from "./Components/Footer";

const App = () => (
  <Router>
    <div >
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/FigureDetail/:id" component={FigureDetail} />
        <Route path="/Collection" component={Collection} />
        {/* <Route path="/About" component={About} /> */}
      </Switch>
      {/* <Footer /> */}
    </div>
  </Router>
);

export default App;

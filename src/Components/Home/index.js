import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import FiguresGrid from "../FiguresGrid";
import logo from "./logo.png";

class Home extends Component {
  render() {
    return (
      <TheHome className="container">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" />
            <li data-target="#carouselExampleIndicators" data-slide-to="1" />
            <li data-target="#carouselExampleIndicators" data-slide-to="2" />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100 img-fluid" src="http://www.shfiguarts.com/content/banner/2018031111446.jpg" alt="First slide" />

            </div>
            <div className="carousel-item">
              <img className="d-block w-100 img-fluid" src="http://www.shfiguarts.com/content/banner/2018031110652.jpg" alt="Second slide" />

            </div>
            <div className="carousel-item">
              <img className="d-block w-100 img-fluid" src="http://www.shfiguarts.com/content/banner/20170503114919.jpg" alt="Third slide" />

            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>

        <div className="jumbotron jumbotron-fluid container-padding">
          <img id="logo" className="float-right" src={logo} alt="" />
          <div className="container container-padding">
            <h1 className="display-4 text-primary">Welcome to S.H.F.Collectors!</h1>
            <p className="lead">S.H.F. Collectors is the place to be when you want to browse the catalog of fantastic figures from S.H.Figuarts! Find the best deals, browse figure features, populate your virtual collection and unlock collector achievements!</p>
            <br />

            <h3 className="display-5 text-primary">Why S.H.Figuarts?</h3>

            <p className="lead">S.H.Figuarts represents a new standard in action figures brought about by Bandai's state of the art of design technology. Designed to perfectly mimic the range of motion of the human body, the series name is a contraction of the concepts of "Simple Style" and "Heroic Action." Standing roughly 14cm tall, the highly posable SH Figuarts figures are designed to feel like little treasures.</p>
            <br />
            <h3 className="display-6 text-success">Find the next addition for your collection below!</h3>
          </div>
        </div>

        <FiguresGrid />

      </TheHome>
    );
  }
}

export default Home;

const TheHome = styled.div`
.container-padding {
  padding-left: 1rem;
}

#logo {
  margin-top: -56px;
  margin-right: 15px;
}
`;

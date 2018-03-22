import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import FiguresGrid from "../FiguresGrid";


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

        <FiguresGrid />

        {/* <Link to="/AllFigures">
          <button type="button" className="btn btn-primary btn-lg btn-block">All Figures</button>
        </Link> */}

      </TheHome>
    );
  }
}

export default Home;

const TheHome = styled.div`

`;

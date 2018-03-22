import React, { Component } from "react";
import styled from "styled-components";

import API from "../../lib/API";

class AllFiguresTEST extends Component {
  state = {
      figures: [],
    };

  async componentDidMount() {
    const figures = await API.getAllTEST();
    console.log(figures[0].LargeImage[0].URL[0]);
    console.log(figures[0]);
    this.setState({
      figures: figures
    });
  }

  render() {
    return (
      <AllFigs className="card">
        <div className="card-header" id="headingOne">
          <h5 className="mb-0">
            <button type="button" className="btn btn-primary btn-lg btn-block" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
          ALL FIGURES
            </button>
          </h5>
        </div>
        <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
          <section className="row">
            {this.state.figures.map(figure => (
              <div className="card col-xs-12 col-sm-6 col-md-4" key="">
                <img className="card-img-top" src={figure.images} alt="test" />
                {/* <div className="card-body">
                  <h5 className="card-title">{figure.name}</h5>
                  <p className="card-text">{figure.line}</p>
                  <a href="#" className="btn btn-primary">{figure.line}</a>
                </div> */}
              </div>
            ))}
          </section>
        </div>
      </AllFigs>
    );
  }
}

export default AllFiguresTEST;

const AllFigs = styled.div`

`;

import React, { Component } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

import API from "../../lib/API";
import Figure from "../Figure";

class AllFiguresStatic extends Component {
  state = {
      figures: [],
    };

  async componentDidMount() {
    const figures = await API.getAll();
    // console.log(figures);
    this.setState({
      figures,
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
        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
          <section className="row">
            {this.state.figures.map(figure => <Figure key={figure.id} figure={figure} />)}
          </section>
        </div>
      </AllFigs>
    );
  }
}

export default AllFiguresStatic;

const AllFigs = styled.div`

`;

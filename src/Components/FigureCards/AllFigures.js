import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import API from "../../lib/API";
import Figure from "../Figure";

class AllFigures extends Component {
  state = {
      figures: [],
    };

  async componentDidMount() {
    const data = await API.getAllTEST();
    // console.log("All Data: ", data);
    const figures = data.filter(figure => figure.LargeImage)
    // console.log(figures);
    // console.log(figures.map(figure => figure.ASIN[0]));
    // console.log(figures.map(figure => figure.LargeImage[0].URL[0]));
    // console.log(figures.map(figure => figure.ItemAttributes[0].Title[0]));
    // console.log(figures.map(figure => figure.ItemAttributes[0].Feature[0]));
    // console.log(figures.map(figure => figure.OfferSummary[0].LowestNewPrice[0].FormattedPrice[0]));
    // console.log("List Price: ", figures.map(figure => figure.ItemAttributes[0].ListPrice[0].FormattedPrice[0]));
    // console.log("Realese Date: ", figures.map(figure => figure.ItemAttributes[0].ReleaseDate[0]));

    this.setState({
      figures: figures,
    });
  }

  render() {
    // console.log("Figures state: ", this.state.figures.map(figure => figure.ASIN[0]));
    return (
      <AllFigs className="card">
        <div className="card-header" id="headingOne">
          <h5 className="mb-0">
          <button type="button" className="btn btn-primary btn-lg btn-block text-left" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">ALL FIGURES</button>
          </h5>
        </div>
        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
          <section className="row">
            {this.state.figures.map(figure => <Figure key={figure.ASIN[0]} figure={figure} />)}
          </section>
        </div>
      </AllFigs>
    );
  }
}

export default AllFigures;

const AllFigs = styled.div`

`;

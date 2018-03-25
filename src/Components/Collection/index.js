import React, { Component } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

import API from "../../lib/API";


class Collection extends Component {
  state = {
      figures: [],
    };

  async componentDidMount() {
    const figures = await API.getCollectionData();
    console.log(figures.collection.map(figure => figure.feature));
    this.setState({
      figures: figures.collection
    });
  }

  render() {
    console.log("Collection state: ", this.state.figures);
    return (
      <TheCollection>
        <div className="jumbotron">
          <h1 className="display-4">Welcome to your Collection!</h1>
          <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to        featured content or information.</p>
          <hr className="my-4"/>
          <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
          <p className="lead">
          <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
          </p>
        </div>
        <div id="shelfDiv" className="container">
          {this.state.figures.map(figure =>
            <div className="card" >
              <img className="card-img-top" src={figure.image} alt="Card image cap"/>
              <div className="card-body">
                <p className="card-text">{figure.title}</p>
              </div>
            </div>
          )}
        </div>
      </TheCollection>
    );
  }
}

export default Collection;

const TheCollection = styled.div`
#shelfDiv {
  display: flex;
}

.card{
  width: 10rem;
}
`;

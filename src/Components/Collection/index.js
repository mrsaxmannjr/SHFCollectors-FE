import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import API from "../../lib/API";
import WishList from "../WishList";
import Achievements from "../Achievements";


class Collection extends Component {
  state = {
      figures: [],
    };

  async componentDidMount() {
    const figures = await API.getCollectionData();
    // console.log(figures.collection.map(figure => figure.feature));
    this.setState({
      figures: figures.collection
    });
  }

  render() {
    // console.log("Collection state: ", this.state.figures);
    return (
      <TheCollection>
        <ul className="nav nav-tabs nav-justified nav-fill ">
          <li className="nav-item">
            <a className="nav-link active" data-toggle="tab" href="#collection">Collection</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#wish-list">Wish List</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#achievements">Collection Achievements</a>
          </li>
        </ul>
        <div id="myTabContent" className="tab-content">
          <div className="tab-pane fade show active" id="collection">
            <h5 id="collection-progress">Collection Progress</h5>
            <div className="progress ">
              <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "75%"}}></div>
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
          </div>
          <div className="tab-pane fade" id="wish-list">
            <WishList />
          </div>
          <div className="tab-pane fade" id="achievements">
            <Achievements />
          </div>
        </div>
      </TheCollection>
    );
  }
}

export default Collection;

const TheCollection = styled.div`
padding-top: 1rem;
#collection-progress{
  padding-top: 1rem;
  padding-bottom: .5rem;
}
#shelfDiv {
  display: flex;
}

.card{
  width: 10rem;
}
`;

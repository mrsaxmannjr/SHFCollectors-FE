import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import API from "../../lib/API";
import WishList from "../WishList";
import Achievements from "../Achievements";
import shelf from "./shelf.png";


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
            <a className="nav-link" data-toggle="tab" href="#achievements">Achievements</a>
          </li>
        </ul>
        <div id="myTabContent" className="tab-content">
          <div className="tab-pane fade show active" id="collection">
            <h5 id="collection-progress">Collection Progress</h5>
            <div className="progress ">
              <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "75%"}}></div>
            </div>
            <div id="shelfDiv" className="container" style={{backgroundImage: `url(${shelf})`}}>
              {this.state.figures.map(figure =>
                <div className="row shadowDiv" >
                  <img className="card-img-top fig" src={figure.image} alt="Card image cap"/>

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
  background: no-repeat center;
  background-size: cover;
  margin-top: 2rem;
  height: 50rem;
  display: flex;
  justify-content: flex-start;
}

.shadowDiv {
  margin-left: 3.4rem;
  margin-right: 3.6rem;
}

.fig {
  height: 150px;
  width: auto;
  padding: .5rem .25rem 0 .25rem;
  box-shadow: 0 10px 6px -6px black;
}

`;

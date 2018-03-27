import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import API from "../../lib/API";
import WishList from "../WishList";
import Achievements from "../Achievements";
import shelf from "./shelfTest.jpg";


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
              <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style={{width: "75%"}}></div>
            </div>
            <div id="shelfDiv" className="container">
              {this.state.figures.map(figure =>
              <div>
                <div className="shadowDiv" >
                  <img className="fig" src={figure.image} alt="image cap" />
                </div>
                <div>
                  <img className="shelf" src={shelf} alt="shelfTest" />
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

}

.shadowDiv {
  display: flex;
  justify-content: flex-start;
}

.fig {
  margin-left: 18px;
  margin-bottom: -25px;
}

.shelf {


  height: 20px;
  width: 400px;

}

`;

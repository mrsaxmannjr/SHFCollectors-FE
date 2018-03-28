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
    collectionProgress: 0,
    };

  async componentDidMount() {
    const figures = await API.getCollectionData();
    const wishListData = await API.getWishListData();
    console.log("wishListData: ", wishListData);
    const collectionProgress =  10 * (figures.collection.map((figure, index) => index).length);
    const wishListProgress =  10 * (wishListData.wishlist.map((data, index) => index).length);
    console.log("collectionProgress: ", collectionProgress);
    console.log("wishListProgress: ", wishListProgress);

    this.setState({
      figures: figures.collection,
      collectionProgress: collectionProgress,
    });
  }

  render() {
    const { figures, collectionProgress } = this.state;
    // console.log("Collection state: ", figures);
    // console.log("collectionProgress: ", collectionProgress);

    return (
      <TheCollection>
         <div className="progress collection-percent">
              <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-valuenow="" aria-valuemin="0" aria-valuemax="100" style={{ width: `${collectionProgress}%` }}>{collectionProgress}%</div>
            </div>
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

            <div id="shelfDiv" className="">
              {figures.map(figure =>
              <div>
                <div className="figureDiv" >
                  <img className="figure" src={figure.image} alt="image cap" />
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

.collection-percent{
  margin-top: .5rem;
  margin-bottom: 1.5rem;
}
#shelfDiv {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.figureDiv {
  display: flex;
  justify-content: flex-start;
}

.figure {
  margin-left: 18px;
  margin-bottom: -30px;
}

.shelf {
  height: 20px;
  width: 400px;
  margin-bottom: 2rem;
}

`;

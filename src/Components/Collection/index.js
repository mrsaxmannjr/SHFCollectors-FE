import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import API from "../../lib/API";
import WishList from "../WishList";
import Achievements from "../Achievements";
import shelf from "./shelfTest.jpg";


class Collection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      figures: [],
      wishListData: [],
      progressPercent: 0,
    };
    this.componentReMount = this.componentReMount.bind(this);
  }

  async componentDidMount() {
    const figures = await API.getCollectionData();
    const wishListData = await API.getWishListData();
    console.log("wishListData: ", wishListData);
    const collectionProgress = figures.collection.map((figure, index) => index).length;
    const wishListProgress = wishListData.wishlist.map((data, index) => index).length;
    const progressPercent = Math.floor((collectionProgress / wishListProgress) * 100);
    console.log("collectionProgress: ", collectionProgress);
    console.log("wishListProgress: ", wishListProgress);
    console.log("progressPercent: ", progressPercent);

    this.setState({
      figures: figures.collection,
      wishListData: wishListData.wishlist,
      progressPercent,
    });
  }

  async componentReMount() {
    const figures = await API.getCollectionData();
    const wishListData = await API.getWishListData();
    console.log("wishListData: ", wishListData);
    const collectionProgress = figures.collection.map((figure, index) => index).length;
    const wishListProgress = wishListData.wishlist.map((data, index) => index).length;
    const progressPercent = Math.floor((collectionProgress / wishListProgress) * 100);
    console.log("collectionProgress: ", collectionProgress);
    console.log("wishListProgress: ", wishListProgress);
    console.log("progressPercent: ", progressPercent);

    this.setState({
      figures: figures.collection,
      wishListData: wishListData.wishlist,
      progressPercent,
    });
    return Promise.resolve(figures);
  }

  render() {
    const { figures, progressPercent } = this.state;
    // console.log("Collection state: ", figures);
    // console.log("collectionProgress: ", collectionProgress);

    return (
      <TheCollection>
        <div className="card border-primary hero ">
          <h3 className=" card-header display-7 text-center border-primary text-primary">COLLECTION</h3>
          <div className="card-body card-padding">
            <p className=" card-header  ">Progress</p>

            <div className="progress collection-percent text-center">

              <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-valuenow="" aria-valuemin="0" aria-valuemax="100" style={{ width: `${progressPercent}%` }}>{progressPercent}%</div>
            </div>
          </div>
        </div>


        <ul className="nav nav-tabs nav-justified nav-fill ">
          <li className="nav-item ">
            <a className="nav-link active " data-toggle="tab" href="#collection">Collection</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#wish-list">Wish List</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#achievements">Achievements</a>
          </li>
        </ul>
        <div id="myTabContent" className="tab-content ">
          <div className="tab-pane fade show active " id="collection">

            <div id="shelfDiv" className="">
              {figures.map(figure =>
                (<div>
                  <div className="figureDiv" >
                    <img className="figure" src={figure.image} alt="image cap" />
                  </div>
                  <div>
                    <img className="shelf" src={shelf} alt="shelfTest" />
                  </div>
                </div>),
              )}
            </div>
          </div>
          <div className="tab-pane fade container" id="wish-list">
            <WishList componentReMount={this.componentReMount} />
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

.hero {
  margin-bottom: 3rem;
}

.card-padding {
  padding-bottom: 2rem;
}
.collection-percent{

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
  margin-left: 20px;
  margin-bottom: -30px;
}

.shelf {
  height: 20px;
  width: 400px;
  margin-bottom: 2rem;
}

`;

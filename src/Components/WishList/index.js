import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import API from "../../lib/API";
import PostCollectionButtonWL from "../PostButton/PostCollectionButtonWL";
import PostCollectionButton from "../PostButton/PostCollectionButton";

class WishList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      figures: [],
      figuresCollection: [],
    };

    this.renderContent = this.renderContent.bind(this);
  }
  async componentDidMount() {
    const figures = await API.getWishListData();
    const figuresWishListLength = figures.wishlist.length;
    console.log("figuresWishListLength: ", figuresWishListLength);
    // console.log(figures.wishlist.map(figure => figure.feature));
    const figuresCollection = await API.getCollectionData();
    const figuresCollectionLength = figuresCollection.collection.length;
    console.log("figuresCollection: ", figuresCollection.collection[0].ASIN);
    console.log("figuresCollectionLength: ", figuresCollectionLength);

    this.setState({
      figures: figures.wishlist,
      figuresCollection: figuresCollection.collection,
    });
    console.log("figuresASIN: ", this.state.figures[0].ASIN);
    console.log("figuresCollectionASIN: ", this.state.figuresCollection[0].ASIN);
  }

  componentReMount = async () => {
    const figuresCollection = await this.props.componentReMount();
    this.setState({
      figuresCollection: figuresCollection.collection,
    });
  }

  renderContent(ASIN) {
    const ASINS = this.state.figuresCollection.map(figure => figure.ASIN);
    console.log("ASINS:", ASINS);
    if (ASINS.includes(ASIN)) {
      return "card-img-top figureImage";
    }
    return "card-img-top";
  }

  render() {
    console.log("PROPS: ", this.props);
    const { figures, figuresCollection } = this.state;
    // console.log("WishList state: ", this.state.figures);
    return (
      <TheWishList>
        <div id="myTabContent" className="tab-content container">
          <section id="shelfDiv" className="row">
            {figures.map(figure =>
              (<div className="card col-xs-12 col-sm-6 col-md-3 border-primary align-items-center figure" >
                <PostCollectionButtonWL ASIN={figure.ASIN} title={figure.title} image={figure.image} feature={figure.feature} componentReMount={this.componentReMount} />
                <img className={this.renderContent(figure.ASIN)} src={figure.image} alt={figure.title} />
                <div className="card-body">
                  <p className="card-title">{figure.title}</p>
                </div>
                {/* <PostCollectionButton id={figure.id} title={figure.title} image={figure.image} feature={figure.feature} componentReMount={this.props.componentReMount} /> */}
              </div>),
            )}
          </section>
        </div>
      </TheWishList>
    );
  }
}

export default WishList;

const TheWishList = styled.div`
.figure {
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin-bottom: 6rem;
}

.figureImage {
  filter: grayscale(100%);
}

`;

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
    };
  }
  async componentDidMount() {
    const figures = await API.getWishListData();
    // console.log(figures.wishlist.map(figure => figure.feature));
    this.setState({
      figures: figures.wishlist,
    });
  }

  render() {
    console.log("PROPS: ", this.props);
    const { figures } = this.state;
    // console.log("WishList state: ", this.state.figures);
    return (
      <TheWishList>
        <div id="myTabContent" className="tab-content container">
          <section id="shelfDiv" className="row">
            {figures.map(figure =>
              (<div className="card col-xs-12 col-sm-6 col-md-3 border-primary align-items-center figure" >
                <PostCollectionButtonWL id={figure.id} title={figure.title} image={figure.image} feature={figure.feature} componentReMount={this.props.componentReMount} />
                <img className="card-img-top" src={figure.image} alt={figure.title} />
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
`;

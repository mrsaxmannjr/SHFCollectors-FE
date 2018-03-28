import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import API from "../../lib/API";
import PostCollectionButton from "../PostButton/PostCollectionButton";

class WishList extends Component {
  state = {
      figures: [],
    };

  async componentDidMount() {
    const figures = await API.getWishListData();
    // console.log(figures.wishlist.map(figure => figure.feature));
    this.setState({
      figures: figures.wishlist
    });
  }

  render() {
    const { figures } = this.state;
    // console.log("WishList state: ", this.state.figures);
    return (
      <TheWishList>
        <div id="myTabContent" className="tab-content">
          <div className="tab-pane fade show active" id="collection">

            <div id="shelfDiv" className="container">
              {figures.map(figure =>
                <div className="card" >
                  <img className="card-img-top" src={figure.image} alt="Card image cap"/>
                  <div className="card-body">
                    <p className="card-text">{figure.title}</p>
                    <PostCollectionButton id={figure.id} title={figure.title} image={figure.image} feature={figure.feature}  />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </TheWishList>
    );
  }
}

export default WishList;

const TheWishList = styled.div`
#collection-progress {
  padding-top: 1rem;
  padding-bottom: .5rem;
}

#shelfDiv {
  display: flex;
}

.card {
  width: 10rem;
}
`;

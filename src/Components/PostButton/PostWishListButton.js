import React, { Component } from "react";
import styled from "styled-components";

import API from "../../lib/API";

const Message = () => (
  <div className="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>Figure was added to your Wish List!</strong>
    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
);


class PostWishListButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      ASIN: this.props.id,
      title: this.props.title,
      image: this.props.image,
      feature: this.props.feature,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick() {
    this.setState({
      clicked: true,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    // console.log("STATE: ", this.state);
    const data = {
      ASIN: this.props.id,
      title: this.props.title,
      image: this.props.image,
      feature: this.props.feature,
    };
    // console.log("Fig Data from FORM: ", data);
    API.postWishListData(data);
  }

  render() {
    // console.log("id DATA from FigureDetail: ", this.props.id);
    // console.log("title DATA from FigureDetail: ", this.props.title);
    // console.log("image DATA from FigureDetail: ", this.props.image);
    // console.log("feature DATA from FigureDetail: ", this.props.feature);

    return (
      <TheForm>
        <form method="post" encType="text/plain" onSubmit={this.handleSubmit}>
          <button className="btn btn-primary btn-success" type="submit" id="submit" onClick={this.handleClick}>Add to Wish List</button>
        </form>
        {this.state.clicked ? <Message /> : null}
      </TheForm>
    );
  }
}

export default PostWishListButton;

const TheForm = styled.div`
display: flex;

`;

import React, { Component } from "react";

import API from "../../lib/API";

class PostCollectionButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ASIN: this.props.id,
      title: this.props.title,
      image: this.props.image,
      feature: this.props.feature,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("STATE: ", this.state, "PROPS:", this.props);
    const data = {
      ASIN: this.props.id,
      title: this.props.title,
      image: this.props.image,
      feature: this.props.feature,
    };
    console.log("Fig Data from FORM: ", data);
    if (data.ASIN !== undefined) {
      console.log("Fig Data from FORM: ", data);
      API.postCollectionData(data);
    }
  }

  render() {
    console.log("id DATA from FigureDetail: ", this.props.id);
    console.log("title DATA from FigureDetail: ", this.props.title);
    console.log("image DATA from FigureDetail: ", this.props.image);
    console.log("feature DATA from FigureDetail: ", this.props.feature);
    return (
      <div>
        <form method="post" encType="text/plain" onSubmit={this.handleSubmit}>
          <button className="btn btn-primary btn-success button-padding" type="submit" id="submit">Add to Collection</button>
        </form>
      </div>
    );
  }
}

export default PostCollectionButton;

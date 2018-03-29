import React, { Component } from "react";

import API from "../../lib/API";

class PostCollectionButtonWL extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ASIN: this.props.ASIN,
      title: this.props.title,
      image: this.props.image,
      feature: this.props.feature,
      amazonUrl: this.props.amazonUrl,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit() {
    // event.preventDefault();
    // console.log("STATE: ", this.state, "PROPS:", this.props);
    const data = {
      ASIN: this.props.ASIN,
      title: this.props.title,
      image: this.props.image,
      feature: this.props.feature,
    };
    // console.log("Fig Data from FORM: ", data);
    if (data.ASIN !== undefined) {
      // console.log("Fig Data from FORM: ", data);
      await API.postCollectionData(data);
      await this.props.componentReMount();
    }
  }

  render() {
    // console.log("id DATA from FigureDetail: ", this.props.id);
    // console.log("title DATA from FigureDetail: ", this.props.title);
    // console.log("image DATA from FigureDetail: ", this.props.image);
    // console.log("feature DATA from FigureDetail: ", this.props.feature);
    // console.log("amazonUrl DATA from FigureDetail: ", this.props.amazonUrl);

    return (
      <div>
        <a href={this.props.amazonUrl} target="_blank" className="btn btn-success button-padding" id="submit" onClick={this.handleSubmit}>Add to Collection</a>
      </div>
    );
  }
}

export default PostCollectionButtonWL;

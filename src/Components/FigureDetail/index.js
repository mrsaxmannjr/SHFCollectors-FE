import React, { Component } from "react";

import API from "../../lib/API";

class FigureDetail extends Component {
  state = {
    figures: [],
  };

async componentDidMount() {
  const figures = await API.getAll();
  console.log(figures);
  this.setState({
    figures,
  });
}
  render() {
    return (
      <div>
      </div>
    );
  }
}

export default FigureDetail;

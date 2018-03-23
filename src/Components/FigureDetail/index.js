import React, { Component } from "react";
import { Link } from "react-router-dom";
import Overdrive from "react-overdrive";


import API from "../../lib/API";
import Figure from "../Figure";

class FigureDetails extends Component {
  state = {
    figure: {ASIN: [], LargeImage: [{URL: []}]},
    };

  // async componentDidMount() {
  //   const figures = await API.getAll();
  //   const figure = await figures.filter(item => item.id == this.props.match.params.id)
  //   this.setState({
  //     figure: figure[0],
  //   });
  //   console.log(this.state.figure.images[1]);
  // }

  async componentDidMount() {
    const data = await API.getAllTEST();
    const figures = await data.filter(figure => figure.LargeImage);
    console.log(figures);
    console.log(figures.map(figure => figure.ASIN[0]));
    console.log(figures.map(figure => figure.LargeImage[0].URL[0]));
    console.log(this.props.match.params.id);

    const figure = figures.filter(item => item.ASIN[0] == this.props.match.params.id)
    console.log("state ", figure[0]);
    this.setState({
      figure: figure[0],
    });

  }

  render() {
    console.log("Image URL", this.state.figure && this.state.figure.LargeImage && this.state.figure.LargeImage[0].URL[0]);

    console.log("Image ID", this.state.figure.ASIN && this.state.figure.ASIN[0]);

    const { figure } = this.state;

    return (
      <div className="card col-xs-12 col-sm-6 col-md-4" key={figure.ASIN[0]}>
      <Overdrive id={figure.id} duration="500">
          <img id={figure.id} className="card-img-top" src={figure.LargeImage[0].URL[0]} alt={figure.name} />
      </Overdrive>
    {/* <div className="card-body">
      <h5 className="card-title">{figure.name}</h5>
      <p className="card-text">{figure.description}</p>
      <a href="#" className="btn btn-primary">{figure.price}</a>
    </div> */}
        </div>
    );
  }
}

export default FigureDetails;

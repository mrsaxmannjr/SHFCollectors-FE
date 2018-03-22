import React, { Component } from "react";
import { Link } from "react-router-dom";
import Overdrive from "react-overdrive";


import API from "../../lib/API";
import Figure from "../Figure";

class FigureDetails extends Component {
  state = {
    figure: {},
    };

  async componentDidMount() {
    const figures = await API.getAll();
    const figure = await figures.filter(item => item.id == this.props.match.params.id)
    this.setState({
      figure: figure[0],
    });
    console.log(this.state.figure.images[1]);
  }

  render() {
    const { figure } = this.state;

    return (
      <div className="card col-xs-12 col-sm-6 col-md-4" key={figure.id}>
      <Overdrive id={figure.id} duration="500">
          <img id={figure.id} className="card-img-top" src={figure.images} alt={figure.name} />
      </Overdrive>
    <div className="card-body">
      <h5 className="card-title">{figure.name}</h5>
      <p className="card-text">{figure.description}</p>
      <a href="#" className="btn btn-primary">{figure.price}</a>
    </div>
        </div>
    );
  }
}

export default FigureDetails;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import Overdrive from "react-overdrive";


import API from "../../lib/API";
import Figure from "../Figure";

class FigureDetails extends Component {
  state = {
    figure: {
      id: [],
      image: [{ URL: [] }],
      title: [{ Title: [] }],
      feature: [{ Feature: [] }],
      amazonUrl: [],
      lowestPriceNew: [{ FormattedPrice: [] }],
      listPrice: [{ FormattedPrice: [] }],
      releaseDate: [{ ReleaseDate: [] }],
    },
  };

  async componentDidMount() {
    const data = await API.getAllTEST();
    const figures = await data.filter(figure => figure.LargeImage);
    console.log(figures);
    // console.log(figures.map(figure => figure.ASIN[0]));
    // console.log(figures.map(figure => figure.LargeImage[0].URL[0]));

    const figure = figures.filter(item => item.ASIN[0] == this.props.match.params.id)
    // console.log("figure state ", figure[0]);
    this.setState({
      // figure: figure[0],
      id: figure[0].ASIN[0],
      image: figure[0].LargeImage[0].URL[0],
      title: figure[0].ItemAttributes[0].Title[0],
      feature: figure[0].ItemAttributes[0].Feature[0],
      amazonUrl: figure[0].DetailPageURL[0],
      lowestPriceNew: figure[0].OfferSummary[0].LowestNewPrice[0].FormattedPrice[0],
      listPrice: figure[0].ItemAttributes[0].ListPrice[0].FormattedPrice[0],
      releaseDate: figure[0].ItemAttributes[0].ReleaseDate[0],
    });

  }

  render() {
    // console.log("Image URL", this.state.figure && this.state.figure.LargeImage && this.state.figure.LargeImage[0].URL[0]);

    // console.log("Image ID", this.state.figure.ASIN && this.state.figure.ASIN[0]);

    // console.log("setState: ", this.state.figure);
    // const { figure } = this.state;

    const { id, image, title, feature, amazonUrl, lowestPriceNew, listPrice, releaseDate } = this.state;

    console.log("id state: ", id);
    console.log("image state: ", image);
    console.log("title state: ", title);
    console.log("feature state: ", feature);
    console.log("amazonUrl state: ", amazonUrl);
    console.log("lowestPriceNew state: ", lowestPriceNew);
    console.log("listPrice state: ", listPrice);
    console.log("releaseDate state: ", releaseDate);

    return (
      <div className="card col-xs-12 col-sm-6 col-md-4" key={id}>
      <Overdrive id={id} duration="500">
          <img id={id} className="card-img-top" src={image} alt={id} />
      </Overdrive>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{feature}</p>
          <h5 className="card-title">Release Date: {releaseDate}</h5>
          <h5 className="card-title">Current List Price New: {listPrice}</h5>
          <h5 className="card-title">Best Price New: {lowestPriceNew}</h5>
          <a href={amazonUrl} target="_blank" className="btn btn-primary">Buy it on Amazon!</a>
          <a href={amazonUrl} target="_blank" className="btn btn-primary">Add to your Collectors Wish List</a>
    </div>
        </div>
    );
  }
}

export default FigureDetails;

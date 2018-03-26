import React, { Component } from "react";
import { Link } from "react-router-dom";
import Overdrive from "react-overdrive";
import styled from "styled-components";

import Coverflow from 'react-coverflow';
import { StyleRoot } from 'radium';

import API from "../../lib/API";
import Figure from "../Figure";
import PostCollectionButton from "../PostButton/PostCollectionButton";
import PostWishListButton from "../PostButton/PostWishListButton";

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
    figureSetURLs: [],
  };

  async componentDidMount() {
    const data = await API.getAllTEST();
    const figures = await data.filter(figure => figure.LargeImage);

    const imageSet = await data.filter((figure, i) => figure.ImageSets[0].ImageSet[i]);
    // console.log("imageSet: ", imageSet);
    const set = await imageSet[0].ImageSets[0].ImageSet.map(img => img.LargeImage[0].URL[0]);
    // const setURLs = await set.map(img => img.LargeImage[0].URL[0]);
    // console.log("set: ", set);
    // const images = await imageSet.map((imageSet, i) => imageSet.LargeImage)
    // console.log("images: ", images);


    const figure = figures.filter(item => item.ASIN[0] == this.props.match.params.id)

    const figureSetURLsMatch = imageSet.filter(item => item.ASIN[0] == this.props.match.params.id);
    console.log("figureSetURLsMatch: ", figureSetURLsMatch);

    const figureSetURLs = figureSetURLsMatch[0].ImageSets[0].ImageSet.map(img => img.LargeImage[0].URL[0]);
    console.log("figureSetURLs: ", figureSetURLs);

    this.setState({
      figure: figure[0],
      id: figure[0].ASIN[0],
      image: figure[0].LargeImage[0].URL[0],
      title: figure[0].ItemAttributes[0].Title[0],
      feature: figure[0].ItemAttributes[0].Feature[0],
      amazonUrl: figure[0].DetailPageURL[0],
      lowestPriceNew: figure[0].OfferSummary[0].LowestNewPrice[0].FormattedPrice[0],
      listPrice: figure[0].ItemAttributes[0].ListPrice[0].FormattedPrice[0],
      releaseDate: figure[0].ItemAttributes[0].ReleaseDate[0],
      figureSetURLs: figureSetURLs,
    });
  }

  render() {

    const { figure, id, image, title, feature, amazonUrl, lowestPriceNew, listPrice, releaseDate, figureSetURLs } = this.state;

    // console.log("Figure state: ", figure);
    // console.log("id state: ", id);
    // console.log("image state: ", image);
    // console.log("title state: ", title);
    // console.log("feature state: ", feature);
    // console.log("amazonUrl state: ", amazonUrl);
    console.log("lowestPriceNew state: ", lowestPriceNew);
    // console.log("listPrice state: ", listPrice);
    // console.log("releaseDate state: ", releaseDate);
    // console.log("FigureDetail state: ", figure );
    console.log("figureSetURLs state: ", figureSetURLs);

    return (
      <TheDetail>
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
          <PostCollectionButton id={id} title={title} image={image} feature={feature}  />
          <PostWishListButton id={id} title={title} image={image} feature={feature}  />
        </div>
      </div>

  <StyleRoot>
    <Coverflow
      displayQuantityOfSide={1}
      navigation
      infiniteScroll
      media={{
        '@media (max-width: 900px)': {
          width: '600px',
          height: '300px'
        },
        '@media (min-width: 900px)': {
          width: '960px',
          height: '600px'
        }
      }}
          >
            { figureSetURLs.map(setURL => <img src={setURL} alt=''/>)}
    </Coverflow>
  </StyleRoot>

</TheDetail>
    );
  }
}

export default FigureDetails;

const TheDetail = styled.div`
display: flex;
`

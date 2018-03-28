import React, { Component } from "react";
import { Link } from "react-router-dom";
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
    // console.log("DATA: ", data);
    const figures = data.filter(figure => figure.LargeImage);

    const imageSet = data.filter((figure, i) => figure.ImageSets[0].ImageSet[i]);
    // console.log("imageSet: ", imageSet);
    const set = imageSet[0].ImageSets[0].ImageSet.map(img => img.LargeImage[0].URL[0]);
    // const setURLs = await set.map(img => img.LargeImage[0].URL[0]);
    // console.log("set: ", set);
    // const images = await imageSet.map((imageSet, i) => imageSet.LargeImage)
    // console.log("images: ", images);

    const figure = figures.filter(item => item.ASIN[0] + '' === '' + this.props.match.params.id)

    const figureSetURLsMatch = imageSet.filter(item => item.ASIN[0] + '' === '' + this.props.match.params.id);
    // console.log("figureSetURLsMatch: ", figureSetURLsMatch);

    const figureSetURLs = figureSetURLsMatch && figureSetURLsMatch[0] && figureSetURLsMatch[0].ImageSets && figureSetURLsMatch[0].ImageSets[0].ImageSet.map(img => img.LargeImage[0].URL[0]) || [];
    // console.log("figureSetURLs: ", figureSetURLs);

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

   async componentReMount() {
    const figures = await API.getCollectionData();
    const wishListData = await API.getWishListData();
    console.log("wishListData: ", wishListData);
    const collectionProgress = figures.collection.map((figure, index) => index).length;
    const wishListProgress = wishListData.wishlist.map((data, index) => index).length;
    const progressPercent = Math.floor((collectionProgress / wishListProgress) * 100);
    console.log("collectionProgress: ", collectionProgress);
    console.log("wishListProgress: ", wishListProgress);
    console.log("progressPercent: ", progressPercent);

    this.setState({
      figures: figures.collection,
      progressPercent,
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
    // console.log("lowestPriceNew state: ", lowestPriceNew);
    // console.log("listPrice state: ", listPrice);
    // console.log("releaseDate state: ", releaseDate);
    // console.log("FigureDetail state: ", figure );
    // console.log("figureSetURLs state: ", figureSetURLs);

    return (
      <div>
      <TheDetail>
        <TheDetailCard className="card col-xs-12 col-sm-6 col-md-4" key={id}>
          <img id={id} className="card-img-top fig img-fluid" src={image} alt={id} />
        </TheDetailCard>

        <StyleRoot>
          <Coverflow displayQuantityOfSide={1} active={0} navigation infiniteScroll
           media={{'@media (max-width: 900px)': { width: '600px', height: '300px'},
                    '@media (min-width: 900px)': { width: '960px', height: '540px'}}}>
            { figureSetURLs.map(setURL => <img src={setURL} alt=''/>)}
          </Coverflow>
        </StyleRoot>
      </TheDetail>

      <TheDescription>

            <h3 className=" text-left">{title}</h3>
          <p className="">{feature}</p>
          <div className="flex">
          <div>
            <h5 className="">Release Date: {releaseDate}</h5>
            <h5 className="">Current List Price New: {listPrice}</h5>
              <h5 className="">Best Price New: {lowestPriceNew}</h5>
            </div>
            <div className="buttons">
            {/* <a href={amazonUrl} target="_blank" className="btn btn-primary button-padding">Buy it on Amazon!</a> */}
              <PostCollectionButton id={id} title={title} image={image} feature={feature}  amazonUrl={amazonUrl} />
              <PostWishListButton id={id} title={title} image={image} feature={feature} />
            </div>
          </div>
    </TheDescription>

</div>
    );
  }
}

export default FigureDetails;

const TheDetail = styled.div`
display: flex;

@media (max-width: 900px) {
  flex-wrap: wrap;
}
`

const TheDetailCard = styled.div`
img {
  object-fit: contain;
  height: 540px;
  width: 100%;
}
`
const TheDescription = styled.div`
padding: 0 2rem 0 1rem;

.flex {
  display:flex;
  justify-content: flex-start;
  flex-direction: column;
}

.buttons {
  display:flex;
  flex-direction: row;
}

.button-padding {
  margin-right: 1rem;
}
`

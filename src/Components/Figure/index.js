import React, { Component } from "react";
import { Link } from "react-router-dom";
import Overdrive from "react-overdrive";

const Figure = ({ figure }) => {
  console.log("FIGURE STATE YO: ", figure);
  return (
    <div className="card col-xs-12 col-sm-6 col-md-4" key={figure.ASIN[0]}>
      <Link to={`FigureDetail/${figure.ASIN[0]}`}>
        <Overdrive id={figure.ASIN[0]} duration="500">
          <img id={figure.ASIN[0]} className="card-img-top" src={figure.LargeImage[0].URL[0]} alt={figure.ASIN[0]} />
        </Overdrive>
      </Link>
      <div className="card-body">
        <h5 className="card-title">{figure.ItemAttributes[0].Title[0]}</h5>
      </div>
    </div>
  );
};
export default Figure;

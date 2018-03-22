import React, { Component } from "react";
import { Link } from "react-router-dom";
import Overdrive from "react-overdrive";

const Figure = ({ figure }) => (
  <div className="card col-xs-12 col-sm-6 col-md-4" key={figure.id}>
    <Link to={`/${figure.id}`}>
      <Overdrive id={figure.id} duration="500">
        <img id={figure.id} className="card-img-top" src={figure.images[0]} alt={figure.name} />
      </Overdrive>
    </Link>
    {/* <div className="card-body">
      <h5 className="card-title">{figure.name}</h5>
      <p className="card-text">{figure.description[0]}</p>
      <a href="#" className="btn btn-primary">{figure.price}</a>
    </div> */}
  </div>
);
export default Figure;

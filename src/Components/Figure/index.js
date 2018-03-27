import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Figure = ({ figure }) => (
  <TheFigure className="card col-xs-12 col-sm-6 col-md-4" key={figure.ASIN[0]}>
    <Link to={`FigureDetail/${figure.ASIN[0]}`}>
      <img id={figure.ASIN[0]} className="card-img-top rounded mx-auto d-block" src={figure.LargeImage[0].URL[0]} alt={figure.ASIN[0]} />
    </Link>
    <div className="card-body">
      <h5 className="card-title">{figure.ItemAttributes[0].Title[0]}</h5>
    </div>
  </TheFigure>
);
export default Figure;

const TheFigure = styled.div`
img {
  height: 300px;
  width: auto;
}
`;

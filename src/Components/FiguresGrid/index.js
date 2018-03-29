import React from "react";
import styled from "styled-components";

// import AllFiguresStatic from "../FigureCards/AllFiguresStatic";
import AllFigures from "../FigureCards/AllFigures";
// import DragonBallFigures from "../FigureCards/DragonBallFigures";
// import StarWarsFigures from "../FigureCards/StarWarsFigures";
// import MarvelFigures from "../FigureCards/MavelFigures";

const FiguresGrid = () => (
  <TheFG className="container">
    <div id="accordion" >
      {/* <AllFiguresStatic /> */}
      <AllFigures />
      {/* <DragonBallFigures /> */}
      {/* <StarWarsFigures /> */}
      {/* <MarvelFigures /> */}
    </div>
  </TheFG>
);

export default FiguresGrid;

const TheFG = styled.div`

`;

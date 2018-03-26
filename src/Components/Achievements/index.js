import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import API from "../../lib/API";

class Achievements extends Component {
  state = {
      figures: [],
    };

  async componentDidMount() {
    const figures = await API.getCollectionData();
    console.log("Collection Titles:", figures.collection.map(figure => figure.title));
    const titlesArray = figures.collection.map(figure => figure.title.toLowerCase());
    const trueSaiyans = titlesArray.filter(title => title.includes("goku") || title.includes("vegeta") || title.includes("nappa") || title.includes("brolly"));
    console.log("titlesArray: ", titlesArray);
    console.log("Achievement Check:" , trueSaiyans.length >=4 ? true : false);
    this.setState({
      figures: figures.collection
    });
  }

  render() {
    console.log("Collection state: ", this.state.figures);
    return (
      <TheAchievements>
        <div id="accordion" >

    </div>
              {this.state.figures.map(figure =>
                <div className="card" >
                  <img className="card-img-top" src={figure.image} alt="Card image cap"/>
                  <div className="card-body">
                    <p className="card-text">{figure.title}</p>
                  </div>
                </div>
              )}
      </TheAchievements>
    );
  }
}

export default Achievements;

const TheAchievements = styled.div`
#collection-progress {
  padding-top: 1rem;
  padding-bottom: .5rem;
}

#shelfDiv {
  display: flex;
}

.card {
  width: 10rem;
}
`;

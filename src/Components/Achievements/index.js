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
    console.log(figures.collection.map(figure => figure.feature));
    this.setState({
      figures: figures.collection
    });
  }

  render() {
    console.log("Collection state: ", this.state.figures);
    return (
      <TheAchievements>
        <div id="myTabContent" className="tab-content">
          <div className="tab-pane fade show active" id="collection">
            <h5 id="collection-progress">Collection Progress</h5>
              <div className="progress ">
                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "75%"}}></div>
              </div>
            <div id="shelfDiv" className="container">
              {this.state.figures.map(figure =>
                <div className="card" >
                  <img className="card-img-top" src={figure.image} alt="Card image cap"/>
                  <div className="card-body">
                    <p className="card-text">{figure.title}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
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

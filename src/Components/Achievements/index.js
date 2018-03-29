import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import API from "../../lib/API";

class Achievements extends Component {
  state = {
    figures: [],
    achievements: [],
    };

  async componentDidMount() {
    const figures = await API.getCollectionData();
    const achievements = await API.getAchievementsData();
    // console.log("Figures Data: ", figures);
    // console.log("Achievement Data: ", achievements);
    // console.log("Collection ASINs:", figures.collection.map(figure => figure.ASIN));
    const AsinArray = figures.collection.map(figure => figure.ASIN);

    const trueSaiyans = AsinArray.filter(ASIN => ASIN.includes("B078K3YWN3") || ASIN.includes("B06XC8G4TJ") || ASIN.includes("B06XFXHFHL") || ASIN.includes("B075YZPM1P"));
    // console.log("titlesArray: ", AsinArray);
    // console.log("Achievement Check:", trueSaiyans.length === 4 ? true : false);
    const unlockedAchievements = [];
    this.setState({
      figures: figures.collection,
      achievements: achievements.achievements
    });
  }

  render() {
    const { figures, achievements } = this.state;
    // console.log("Collection state: ", figures);
    // console.log("Achievement state: ", achievements);
    return (
      <TheAchievements className="container">
          <section className=" row">
          {achievements.map(achievement =>
                <div className="card col-xs-12 col-sm-6 col-md-4" >
                  <h5 className="card-title text-center">{achievement.achievement}</h5>
                  <img className="card-img-top" src={achievement.image} alt="Card image cap"/>
                  <div className="card-body">
                    <p className="card-text">{achievement.detail}</p>
                  </div>
                </div>
              )}
          </section>
      </TheAchievements>
    );
  }
}

export default Achievements;

const TheAchievements = styled.div`

`;

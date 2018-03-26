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
    console.log("Figures Data: ", figures);
    console.log("Achievement Data: ", achievements);
    // console.log("Collection ASINs:", figures.collection.map(figure => figure.ASIN));
    // const AsinArray = figures.collection.map(figure => figure.ASIN);

    // const trueSaiyans = AsinArray.filter(ASIN => ASIN.includes("B078K3YWN3") || ASIN.includes("B06XC8G4TJ") || ASIN.includes("B06XFXHFHL") || ASIN.includes("B075YZPM1P"));
    // console.log("titlesArray: ", AsinArray);
    // console.log("Achievement Check:", trueSaiyans.length === 4 ? true : false);
    // const unlockedAchievements = [];
    this.setState({
      figures: figures.collection,
      achievements: achievements.achievements
    });
  }

  render() {
    console.log("Collection state: ", this.state.figures);
    console.log("Achievement state: ", this.state.achievements);
    return (
      <TheAchievements>
        <div id="accordion" >
        <div className="card-header" id="headingOne">
          <h5 className="mb-0">
          <button type="button" className="btn btn-primary btn-lg btn-block text-left " data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">ALL FIGURES</button>
          </h5>
        </div>
          <div id="collapseOne" className="collapse " aria-labelledby="headingOne" data-parent="#accordion">
          <div className="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
          {/* <section className="row">
          {this.state.figures.map(figure =>
                <div className="card" >
                  <img className="card-img-top" src={figure.image} alt="Card image cap"/>
                  <div className="card-body">
                    <p className="card-text">{figure.title}</p>
                  </div>
                </div>
              )}
          </section> */}
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

import React, { Component } from "react";
import styled from "styled-components";

import API from "../../lib/API";

class DragonBallFigures extends Component {
  state = {
      dragonBall: [],

    };

  async componentDidMount() {
    const dragonBall = await API.getDragonBall();
    const starWars = await API.getStarWars();
    const marvel = await API.getMarvel();
    console.log(dragonBall);

    this.setState({
      dragonBall,

    });
  }
  render() {
    return (
      <TheDB className="card">
        <div className="card-header" id="heading2">
          <h5 className="mb-0">
            <button type="button" className="btn btn-primary btn-lg btn-block" data-toggle="collapse" data-target="#collapse2" aria-expanded="false" aria-controls="collapseOne">
          DRAGON BALL
            </button>
          </h5>
        </div>
        <div id="collapse2" className="collapse" aria-labelledby="heading2" data-parent="#accordion">
          <section className="row">
            {this.state.dragonBall.map(figure => (
              <div className="card col-xs-12 col-sm-6 col-md-4" key={figure.id}>
                <img className="card-img-top" src={figure} alt={figure.name} />
                {/* <div className="card-body">
                      <h5 className="card-title">{figure.name}</h5>
                      <p className="card-text">{figure.line}</p>
                      <a href="#" className="btn btn-primary">{figure.line}</a>
                    </div> */}
              </div>
            ))}
          </section>
        </div>
      </TheDB>
    );
  }
}

export default DragonBallFigures;

const TheDB = styled.div`

`;

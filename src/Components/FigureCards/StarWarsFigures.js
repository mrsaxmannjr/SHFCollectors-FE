import React, { Component } from "react";
import styled from "styled-components";

import API from "../../lib/API";

class StarWarsFigures extends Component {
  state = {
      starWars: [],
    };

  async componentDidMount() {
    const starWars = await API.getStarWars();
    console.log(starWars);
    this.setState({
      starWars,
    });
  }
  render() {
    return (
      <TheSWF className="card">
        <div className="card-header" id="headingTwo">
          <h5 className="mb-0">
            <button type="button" className="btn btn-primary btn-lg btn-block" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          STAR WARS
            </button>
          </h5>
        </div>
        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
          <section className="row">
            {this.state.starWars.map(figure => (
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
      </TheSWF>
    );
  }
}

export default StarWarsFigures;

const TheSWF = styled.div`

`;

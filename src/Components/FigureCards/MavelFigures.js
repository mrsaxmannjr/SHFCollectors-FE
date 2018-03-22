import React, { Component } from "react";
import styled from "styled-components";

import API from "../../lib/API";

class MarvelFigures extends Component {
  state = {
      marvel: [],
    };

  async componentDidMount() {
    const marvel = await API.getMarvel();
    console.log(marvel);
    this.setState({
      marvel,
    });
  }
  render() {
    return (
      <TheMF className="card">
        <div className="card-header" id="headingThree">
          <h5 className="mb-0">
            <button type="button" className="btn btn-primary btn-lg btn-block" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          MARVEL
            </button>
          </h5>
        </div>
        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
          <section className="row">
            {this.state.marvel.map(figure => (
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
      </TheMF>
    );
  }
}

export default MarvelFigures;

const TheMF = styled.div`

`;

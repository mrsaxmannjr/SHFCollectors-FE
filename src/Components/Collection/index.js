import React, { Component } from "react";

import API from "../../lib/API";

class FiguresGrid extends Component {
  constructor() {
    super();

    this.state = {
      figures: [],
    };
  }

  async componentDidMount() {
    const figures = await API.getAll();
    console.log(figures);
    this.setState({
      figures,
    });
  }
  render() {
    return (
      <div >
        <main className="container">
          <section className="row">
            {this.state.figures.map(figure => (
              <div className="card col-xs-12 col-sm-6 col-md-4" key={figure.id}>
                <img className="card-img-top" src={figure.mainImage} alt={figure.name} />
                <div className="card-body">
                  <h5 className="card-title">{figure.name}</h5>
                  <p className="card-text">{figure.line}</p>
                  <a href="#" className="btn btn-primary">{figure.line}</a>
                </div>
              </div>
            ))}
          </section>
        </main>
      </div>
    );
  }
}

export default FiguresGrid;

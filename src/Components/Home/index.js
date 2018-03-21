import React, { Component } from "react";

class Home extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1 className="display-3">Hello, world!</h1>
          <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-4" />
          <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
          </p>
        </div>
        <button type="button" className="btn btn-primary btn-lg btn-block">Dragon Ball figures</button><button type="button" className="btn btn-primary btn-lg btn-block">Star Wars figures</button><button type="button" className="btn btn-primary btn-lg btn-block">Marvel Figures</button>
      </div>
    );
  }
}

export default Home;

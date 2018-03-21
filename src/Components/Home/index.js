import React, { Component } from "react";
import styled from "styled-components";

import API from "../../lib/API";


class Home extends Component {
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
      <TheHome className="container">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" />
            <li data-target="#carouselExampleIndicators" data-slide-to="1" />
            <li data-target="#carouselExampleIndicators" data-slide-to="2" />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100 img-fluid" src="http://www.shfiguarts.com/content/banner/2018031111446.jpg" alt="First slide" />

            </div>
            <div className="carousel-item">
              <img className="d-block w-100 img-fluid" src="http://www.shfiguarts.com/content/banner/2018031110652.jpg" alt="Second slide" />

            </div>
            <div className="carousel-item">
              <img className="d-block w-100 img-fluid" src="http://www.shfiguarts.com/content/banner/20170503114919.jpg" alt="Third slide" />

            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>

        <div id="accordion">
          <div className="card">
            <div className="card-header" id="headingOne">
              <h5 className="mb-0">
                <button type="button" className="btn btn-primary btn-lg btn-block" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
          DRAGON BALL
                </button>
              </h5>
            </div>

            <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
              <section className="row">
                {this.state.figures.map(figure => (
                  <div className="card col-xs-12 col-sm-6 col-md-4" key={figure.id}>
                    <img className="card-img-top" src={figure.images[0]} alt={figure.name} />
                    <div className="card-body">
                      <h5 className="card-title">{figure.name}</h5>
                      <p className="card-text">{figure.line}</p>
                      <a href="#" className="btn btn-primary">{figure.line}</a>
                    </div>
                  </div>
                ))}
              </section>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingTwo">
              <h5 className="mb-0">
                <button type="button" className="btn btn-primary btn-lg btn-block" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          STAR WARS
                </button>
              </h5>
            </div>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
              <div className="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingThree">
              <h5 className="mb-0">
                <button type="button" className="btn btn-primary btn-lg btn-block" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          MARVEL
                </button>
              </h5>
            </div>
            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
              <div className="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
              </div>
            </div>
          </div>
        </div>
      </TheHome>
    );
  }
}

export default Home;

const TheHome = styled.div`

`;

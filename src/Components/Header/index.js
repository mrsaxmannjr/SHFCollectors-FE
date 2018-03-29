import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import me from "./me.jpg";
import logo from "./logo.png";

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <Link className="navbar-brand" to="/"><TheLogo src={logo} alt="logo" /></Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/">HOME</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Collection">COLLECTION</Link>
        </li>
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="text" placeholder="Search" />
        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
      <Me className="nav-item">
        <a href="https://jamesmann.tech/" target="_blank" rel="noopener noreferrer"><img className="" src={me} alt="" /></a>
      </Me>
    </div>
  </nav>
);

export default Header;

const Me = styled.div`
img {
  height: 60px;
  border-radius: 50%;
  margin-left: 2rem;
  margin-right: 1rem;
}
`;

const TheLogo = styled.img`
height: 45px;
`;

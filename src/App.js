import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { professionals } from "./data/professionals.json";
import "./App.css";

export default () => {
  const _renderProfessionals = (professional, index) => {
    const { name, job, address, contact, sex } = professional;
    const genderImage =
      sex === "male"
        ? require("./images/male.png")
        : require("./images/female.png");

    return (
      <div key={index} className="App-professionals-container">
        <img src={genderImage} className="App-logo" alt="Kantabanji_Logo" />
        <div className="App-professionals-content">
          <span>{name}</span>
          <span>{job}</span>
          <span>{address}</span>
          <span>{contact}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={require("./images/logo.png")}
          className="App-logo"
          alt="Kantabanji_Logo"
        />
        <span>
          It's not mine, it's our Kantabanji <br /> and <br /> We together
          welcomes you to become a part of this family!
        </span>
        <img
          src={require("./images/welcome.jpeg")}
          className="App-logo"
          alt="Welcome_Logo"
        />
      </header>
      <Navbar bg="primary" variant="light">
        <Nav className="mr-auto">
          <Nav.Link>Professionals</Nav.Link>
        </Nav>
      </Navbar>
      <div className="App-content">
        <span>Confused about career?</span>
        <span>
          No Worries, We KBJ Professionals will do our best to put some help on
          your journey.
        </span>
        <div className="App-professionals">
          {professionals.map(_renderProfessionals)}
        </div>
      </div>
      <footer className="App-footer">
        <span>KBJ Professionals Association, Kantabanji</span>
      </footer>
    </div>
  );
};

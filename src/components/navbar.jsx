import React, { Component } from "react";

var navStyle = {
  backgroundColor: "#5EB1BF"
};

var navElement = {
  color: "white"
};

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg" style={navStyle}>
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="nav-link" style={navElement} href="index.html">
              Home
            </a>
          </div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" style={navElement} href="About.html">
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;

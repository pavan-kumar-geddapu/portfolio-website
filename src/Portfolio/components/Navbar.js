import React, { Component } from "react";

import "../css/Navbar.css";

class Navbar extends Component {
  render() {
    return(
      <div className = "custom-navbar">
        <div className = "custom-navbar-brand"></div>
        <div className = "custom-navbar-item"></div>
        <div className = "custom-navbar-item"></div>
        <div className = "custom-navbar-item"></div>
      </div>
    );
  }
}

export default Navbar;

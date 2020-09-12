import React, { Component } from "react";
import "./css/Portfolio.css";

import Navbar from "./components/Navbar";
import Description from "./components/Description";
import ContactHeader from "./components/ContactHeader";

class Portfolio extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <div className = "base-container">
        <Navbar />
        <Description />
        <ContactHeader />
      </div>
    );
  }
}

export default Portfolio;
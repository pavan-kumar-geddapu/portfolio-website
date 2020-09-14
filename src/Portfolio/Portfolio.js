import React, { Component } from "react";
import "./css/Portfolio.css";

import Navbar from "./components/Navbar";
import Description from "./components/Description";
import ContactHeader from "./components/ContactHeader";

class Portfolio extends Component {

  constructor(props) {
    super(props);
    this.state = {
      descriptionItem: "aboutme"
    };
  }

  changeDescriptionItem = (item) => {
    this.setState({descriptionItem: item});
  }

  render() {
    const {descriptionItem} = this.state;
    return(
      <div className = "base-container">
        <Navbar 
          descriptionItem = {descriptionItem}
          changeDescriptionItem = {this.changeDescriptionItem}
        />
        <Description 
          descriptionItem = {descriptionItem}
        />
        <ContactHeader />
      </div>
    );
  }
}

export default Portfolio;
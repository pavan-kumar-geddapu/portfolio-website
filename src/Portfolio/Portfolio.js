import React, { Component } from "react";
import { withGetScreen } from "react-getscreen";
import "./css/Portfolio.css";

import Navbar from "./components/Navbar";
import Description from "./components/Description";
import ContactHeader from "./components/ContactHeader";

const widthBreakPoint = 900;

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
    
    let curScreenWidth = window.innerWidth;
    const {descriptionItem} = this.state;

    if(curScreenWidth >= widthBreakPoint){
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
    else {
      return(
        <div className = "base-container">
          <ContactHeader />
          <Navbar 
            descriptionItem = {descriptionItem}
            changeDescriptionItem = {this.changeDescriptionItem}
          />
          <Description 
            descriptionItem = {descriptionItem}
          />
        </div>
      );
    }
  }
}

export default withGetScreen(Portfolio);
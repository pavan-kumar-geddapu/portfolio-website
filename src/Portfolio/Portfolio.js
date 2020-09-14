import React, { Component } from "react";
import { withGetScreen } from "react-getscreen";
import "./css/Portfolio.css";

import Navbar from "./components/Navbar";
import Description from "./components/Description";
import ContactHeader from "./components/ContactHeader";

const widthBreakPoint = 901;

class Portfolio extends Component {

  constructor(props) {
    super();
    this.state = {
      descriptionItem: "aboutme",
      curScreenWidth: widthBreakPoint
    };
  }

  componentDidMount() {
    window.addEventListener("resize", () => {
      this.changeDimensions();
    });
    this.changeDimensions();
  };

  changeDimensions = () => {
    this.setState({curScreenWidth: window.innerWidth});
  }

  changeDescriptionItem = (item) => {
    this.setState({descriptionItem: item});
  }

  render() {

    const {descriptionItem} = this.state;

    if(this.state.curScreenWidth >= widthBreakPoint){
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
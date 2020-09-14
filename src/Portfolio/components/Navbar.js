import React, { Component } from "react";
import { MdAccountCircle } from "react-icons/md";
import { MdBusinessCenter } from "react-icons/md";
import { MdFolder } from "react-icons/md";
import { MdPermPhoneMsg } from "react-icons/md";

import "../css/Navbar.css";

class Navbar extends Component {

  render() {

    const {
      descriptionItem,
      changeDescriptionItem
    } = this.props;

    return(
      <div className = "custom-navbar">
        <div className = "custom-navbar-brand custom-brand"></div>
        <div 
            className = {`custom-navbar-item ${descriptionItem === "aboutme" ? 'active' : ''}`}
            onClick = {() => changeDescriptionItem("aboutme")}
          >
            <MdAccountCircle size = {30}/>
            <h3>about me</h3>          
          </div>
        <div 
          className = {`custom-navbar-item ${descriptionItem === "resume" ? 'active' : ''}`}
          onClick = {() => changeDescriptionItem("resume")}
        >
          <MdBusinessCenter size = {30}/>
          <h3>resume</h3>          
        </div>
        <div 
          className = {`custom-navbar-item ${descriptionItem === "projects" ? 'active' : ''}`}
          onClick = {() => changeDescriptionItem("projects")}
        >
          <MdFolder size = {30}/>
          <h3>projects</h3>          
        </div>
        <div 
          className = {`custom-navbar-item ${descriptionItem === "contact" ? 'active' : ''}`}
          onClick = {() => changeDescriptionItem("contact")}
        >
          <MdPermPhoneMsg size = {30}/>
          <h3>contact</h3>          
        </div>
      </div>
    );
  }
}

export default Navbar;

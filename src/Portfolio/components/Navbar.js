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
      <div className = "navbar-container">
        <div className = "custom-navbar-brand">
          <img className = "custom-image" src={require('../assets/profile_pic.jpg')} alt="not found"></img>
        </div>
        <div className = "custom-navbar">
          <div 
              className = "custom-navbar-item"
              onClick = {() => changeDescriptionItem("aboutme")}
            >
              <div className = {`${descriptionItem === "aboutme" ? 'arrow' : ''}`} ></div>
              <div className = {`${descriptionItem === "aboutme" ? 'active' : ''}`} ></div>
              <div className = "custom-navbar-item-icons">
                <MdAccountCircle />
              </div>
              <h3>about me</h3>         
            </div>
          <div 
            className = "custom-navbar-item"
            onClick = {() => changeDescriptionItem("resume")}
          >
            <div className = {`${descriptionItem === "resume" ? 'arrow' : ''}`} ></div>
            <div className = {`${descriptionItem === "resume" ? 'active' : ''}`} ></div>
            <div className = "custom-navbar-item-icons">
              <MdBusinessCenter />
            </div>
            <h3>resume</h3>          
          </div>
          <div 
            className = "custom-navbar-item"
            onClick = {() => changeDescriptionItem("projects")}
          >
            <div className = {`${descriptionItem === "projects" ? 'arrow' : ''}`} ></div>
            <div className = {`${descriptionItem === "projects" ? 'active' : ''}`} ></div>
            <div className = "custom-navbar-item-icons">
              <MdFolder />
            </div>
            <h3>projects</h3>        
          </div>
          <div 
            className = "custom-navbar-item"
            onClick = {() => changeDescriptionItem("contact")}
          >
            <div className = {`${descriptionItem === "contact" ? 'arrow' : ''}`} ></div>
            <div className = {`${descriptionItem === "contact" ? 'active' : ''}`} ></div>
            <div className = "custom-navbar-item-icons">
              <MdPermPhoneMsg />
            </div>
            <h3>contact</h3>          
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;

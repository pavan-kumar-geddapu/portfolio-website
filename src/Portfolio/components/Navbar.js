import React, { Component } from "react";
import { MdAccountCircle } from "react-icons/md";
import { MdBusinessCenter } from "react-icons/md";
import { MdFolder } from "react-icons/md";
import { MdPermPhoneMsg } from "react-icons/md";

import "../css/Navbar.css";

class Navbar extends Component {
  render() {
    return(
      <div className = "custom-navbar">
        <div className = "custom-navbar-brand custom-brand"></div>
        <div className = "custom-navbar-item">
          <MdAccountCircle size = {30}/>
          <h3>about me</h3>          
        </div>
        <div className = "custom-navbar-item">
          <MdBusinessCenter size = {30}/>
          <h3>resume</h3>          
        </div>
        <div className = "custom-navbar-item">
          <MdFolder size = {30}/>
          <h3>projects</h3>          
        </div>
        <div className = "custom-navbar-item">
          <MdPermPhoneMsg size = {30}/>
          <h3>contact</h3>          
        </div>
      </div>
    );
  }
}

export default Navbar;

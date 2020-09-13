import React, { Component } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

import "../css/ContactHeader.css";

class ContactHeader extends Component {
  render() {
    return(
      <div className = "custom-contactheader">
        <div className = "custom-contact-item">
          <FaLinkedinIn size = {20}/>
        </div>
        <div className = "custom-contact-item">
          <FaGithub size = {20}/>
        </div>
        <div className = "custom-contact-item">
        <FaFacebookF size = {20}/>
        </div>
      </div>
    );
  }
}

export default ContactHeader;

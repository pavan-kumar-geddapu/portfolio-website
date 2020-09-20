import React, { Component } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

import "../css/ContactHeader.css";

class ContactHeader extends Component {
  render() {
    return(
      <div className = "custom-contactheader">
        <a 
          className = "custom-contact-item"
          href="https://www.linkedin.com/in/pavan-kumar-geddapu/" target="_blank" rel="noopener noreferrer"
        >
          <FaLinkedinIn size = {20} style={{marginTop: "10px"}}/>
        </a>
        <a 
          className = "custom-contact-item"
          href="https://github.com/pavan-kumar-geddapu" target="_blank" rel="noopener noreferrer"
        >
          <FaGithub size = {20} style={{marginTop: "10px"}}/>
        </a>
        <a 
          className = "custom-contact-item"
          href="https://www.facebook.com/pavankumargeddapu/" target="_blank" rel="noopener noreferrer"  
        >
        <FaFacebookF size = {20} style={{marginTop: "10px"}}/>
        </a>
      </div>
    );
  }
}

export default ContactHeader;

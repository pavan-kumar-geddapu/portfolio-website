import React, { Component } from "react";
import "../css/Contact.css";

import { GrLocation } from "react-icons/gr";
import { FiSmartphone } from "react-icons/fi";
import { FaRegPaperPlane } from "react-icons/fa";

class Contact extends Component {
  render() {
    return(
      <>
        <div className = "row">
          <div className = "main-heading">
            <h1>Contact</h1>
          </div>
        </div>
        <div className = "row">
          <div className = "start-rectangle"></div>
          <div className = "sub-heading">
            <h1>Personal Info</h1>
          </div>
          <div className = "contact-container">
            <div className = "contact-card">
              <div className = "contact-card-icon">
                <GrLocation />
              </div>
              <h2>Address</h2>
              <p>4-309</p>
              <p>Maruthi Nagar 3rd lane</p>
              <p>Rajam, Srikakulam</p>
              <p>Andhra Pradesh, India</p>
              <p>PIN: 532127</p>
            </div>
            <div className = "contact-card">
              <div className = "contact-card-icon">
                <FiSmartphone />
              </div>
              <h2>Give Me A Call</h2>
              <p>Mobile: +91 9493778352</p>
              <p>Mobile: +91 8309530034</p>
            </div>
            <div className = "contact-card">
              <div className = "contact-card-icon">
                <FaRegPaperPlane />
              </div>
              <h2>Let's Connect</h2>
              <p>Email:</p>
              <p>pavankumargeddapu@gmail.com</p>
              <p>
                Linkedin: 
                <a href="#" target="_blank" rel="noopener noreferrer">Link</a>
              </p>
              <p>
                Github: 
                <a href="#" target="_blank" rel="noopener noreferrer">Link</a>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Contact;
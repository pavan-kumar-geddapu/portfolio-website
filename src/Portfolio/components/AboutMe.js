import React, { Component } from "react";

class AboutMe extends Component {
  render() {
    return(
      <>
        <div className = "row">
          <div className = "main-heading">
            <h1>Pavan Kumar Geddapu</h1>
            <h3>Software Development Engineer</h3>
          </div>
        </div>
        <div className = "row">
          <div className = "start-rectangle"></div>
          <div className = "sub-heading">
            <h1>about me</h1>
          </div>
          <div className = "sub-content">
            <p>my name is pavan. my name is pavan. my name is pavan. my name is pavan. my name is pavan.
              my name is pavan. my name is pavan. my name is pavan. my name is pavan. my name is pavan.
              my name is pavan. my name is pavan. my name is pavan. my name is pavan. my name is pavan.
            </p>
          </div>
        </div>

        <div className = "row">
          <div className = "start-rectangle"></div>
          <div className = "sub-heading">
            <h1>personal Info</h1>
          </div>
          <div className = "start-bright-circle"></div>
          <div className = "divider-container">
            <div className = "divider-children sub-heading">
              <h2>Name</h2>
            </div>
            <div className = "divider-children sub-heading">
              <h3>Pavan Kumar Geddapu</h3>
            </div>
          </div>
          <div className = "divider-container">
            <div className = "divider-children sub-heading">
              <h2>Birthday</h2>
            </div>
            <div className = "divider-children sub-heading">
              <h3>30-08-1999</h3>
            </div>
          </div>
          <div className = "divider-container">
            <div className = "divider-children sub-heading">
              <h2>Place Of Birth</h2>
            </div>
            <div className = "divider-children sub-heading">
              <h3>Andhra Pradesh</h3>
            </div>
          </div>
          <div className = "divider-container">
            <div className = "divider-children sub-heading">
              <h2>Nationality</h2>
            </div>
            <div className = "divider-children sub-heading">
              <h3>Indian</h3>
            </div>
          </div>
          <div className = "divider-container">
            <div className = "divider-children sub-heading">
              <h2>Martial Status</h2>
            </div>
            <div className = "divider-children sub-heading">
              <h3>Single</h3>
            </div>
          </div>
          <div className = "start-dark-circle"></div>
        </div>

        <div className = "row">
          <div className = "start-rectangle"></div>
          <div className = "sub-heading">
            <h1>Contact Info</h1>
          </div>
          <div className = "start-bright-circle"></div>
          <div className = "divider-container">
            <div className = "divider-children sub-heading">
              <h2>Address</h2>
              <h3>Door No: 4-309, Maruthi Nagar 3rd Lane</h3>
              <h3>Rajam, Srikakulam (dist), Andhra Pradesh</h3>
              <h3>Pin : 532127</h3>
            </div>
            <div className = "divider-children sub-heading">
              <h2>Email</h2>
              <h3>pavankumarg11091999@gmail.com</h3>
              <h2>Phone</h2>
              <h3>+91 9493778352</h3>
            </div>
          </div>
          <div className = "start-dark-circle"></div>
        </div>
      </>
    );
  }
}

export default AboutMe;
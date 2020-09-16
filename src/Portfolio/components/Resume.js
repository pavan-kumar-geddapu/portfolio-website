import React, { Component } from "react";

class Resume extends Component {
  render() {
    return(
      <>
        <div className = "row">
          <div className = "main-heading">
            <h1>Resume</h1>
          </div>
        </div>

        <div className = "row">
          <div className = "start-rectangle"></div>
          <div className = "sub-heading">
            <h1>Experience</h1>
          </div>
          <div className = "start-bright-circle"></div>
          <div className = "divider-container">
            <div className = "divider-children sub-heading">
              <h3>Aug-2020 Present</h3>
              <h2>Software Development Engineer</h2>
            </div>
            <div className = "divider-children sub-heading">
              <h3>
                i am a software development engineer. i am a software development engineer.
                i am a software development engineer. i am a software development engineer.
              </h3>
            </div>
          </div>
          <div className = "start-dark-circle"></div>
          <div className = "divider-container">
            <div className = "divider-children sub-heading">
              <h3>May-2019 July-2019</h3>
              <h2>Software Development Intern</h2>
            </div>
            <div className = "divider-children sub-heading">
              <h3>
                i am a software development Intern. i am a software development Intern.
                i am a software development Intern. i am a software development Intern.
              </h3>
            </div>
          </div>
          <div className = "start-bright-circle"></div>
        </div>

        <div className = "row">
          <div className = "start-rectangle"></div>
          <div className = "sub-heading">
            <h1>Education</h1>
          </div>
          <div className = "start-bright-circle"></div>
          <div className = "divider-container">
            <div className = "divider-children sub-heading">
              <h3>July-2016 June-2020</h3>
              <h2>Visvesvaraya National Institute of Technology</h2>
              <h3>Nagpur, Maharastra</h3>
            </div>
            <div className = "divider-children sub-heading">
              <h3>B.tech. in Computer Science and Engineering</h3>
              <h2>8.09</h2>
            </div>
          </div>
          <div className = "start-dark-circle"></div>
          <div className = "divider-container">
            <div className = "divider-children sub-heading">
              <h3>July-2014 May-2016</h3>
              <h2>Sri chaitanya Boys Junior College</h2>
              <h3>Vijayawada, Andhra Pradesh</h3>
            </div>
            <div className = "divider-children sub-heading">
              <h3>XII class</h3>
              <h2>97.9 %</h2>
            </div>
          </div>
          <div className = "start-bright-circle"></div>
          <div className = "divider-container">
            <div className = "divider-children sub-heading">
              <h3>July-2009 April-2014</h3>
              <h2>Jawahar Navodaya Vidyalaya</h2>
              <h3>Srikakulam, Andhra Pradesh</h3>
            </div>
            <div className = "divider-children sub-heading">
              <h3>X class</h3>
              <h2>10</h2>
            </div>
          </div>
          <div className = "start-dark-circle"></div>
        </div>
      </>
    );
  }
}

export default Resume;
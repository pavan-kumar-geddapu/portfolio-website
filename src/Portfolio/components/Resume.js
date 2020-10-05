import React, { Component } from "react";
import "../css/Resume.css";

import { BiLink } from "react-icons/bi";
import mastercardLogo from "../assets/mastercard.png";
import courseraLogo from "../assets/coursera.png";

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
              <h3>
                Aug-2020 <span><div className = "arrow-left"></div>Present</span>
              </h3>
              <h2>Software Development Engineer</h2>
              <div className = "orginsation-icon">
                  <img className = "image-fill" src={mastercardLogo} alt="not found"></img>
              </div>
            </div>
            <div className = "divider-children sub-heading">
              <h3>
                New software development engineer learning all the cutting edge technologies that mastercard is using and developing
                my skills for the full stack web development.
              </h3>
            </div>
          </div>
          <div className = "start-dark-circle"></div>
          <div className = "divider-container">
            <div className = "divider-children sub-heading">
              <h3>May-2019 July-2019</h3>
              <h2>Software Development Intern</h2>
              <div className = "orginsation-icon">
                  <img className = "image-fill" src={mastercardLogo} alt="not found"></img>
              </div>
            </div>
            <div className = "divider-children sub-heading">
              <h3>
                Developed a web application to monitor all the apps deployed in PCF with live updates which helps other
                developers to act quickly when some app is down.
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
        
        {/* skill progress bars */}
        <div className = "row">
        <div className = "start-rectangle"></div>
        <div className = "sub-heading">
          <h1>Skills</h1>
        </div>
        <div className = "start-bright-circle"></div>
        <div className = "divider-container">
          <div className = "divider-children sub-heading">
            <h2>CPP</h2>
          </div>
          <div className = "divider-children">
            <div className = "progress-bar" >
              <span style={{width: "60%"}}></span>
            </div>
          </div>
        </div>
        <div className = "divider-container">
          <div className = "divider-children sub-heading">
            <h2>Java</h2>
          </div>
          <div className = "divider-children">
            <div className = "progress-bar" >
              <span style={{width: "55%"}}></span>
            </div>
          </div>
        </div>
        <div className = "divider-container">
          <div className = "divider-children sub-heading">
            <h2>Python</h2>
          </div>
          <div className = "divider-children">
            <div className = "progress-bar" >
              <span style={{width: "50%"}}></span>
            </div>
          </div>
        </div>
        <div className = "divider-container">
          <div className = "divider-children sub-heading">
            <h2>HTML</h2>
          </div>
          <div className = "divider-children">
            <div className = "progress-bar" >
              <span style={{width: "65%"}}></span>
            </div>
          </div>
        </div>
        <div className = "divider-container">
          <div className = "divider-children sub-heading">
            <h2>CSS</h2>
          </div>
          <div className = "divider-children">
            <div className = "progress-bar" >
              <span style={{width: "65%"}}></span>
            </div>
          </div>
        </div>
        <div className = "divider-container">
          <div className = "divider-children sub-heading">
            <h2>JavaScript</h2>
          </div>
          <div className = "divider-children">
            <div className = "progress-bar" >
              <span style={{width: "50%"}}></span>
            </div>
          </div>
        </div>
        <div className = "divider-container">
          <div className = "divider-children sub-heading">
            <h2>Oracle SQL</h2>
          </div>
          <div className = "divider-children">
            <div className = "progress-bar" >
              <span style={{width: "45%"}}></span>
            </div>
          </div>
        </div>
        <div className = "divider-container">
          <div className = "divider-children sub-heading">
            <h2>Angular</h2>
          </div>
          <div className = "divider-children">
            <div className = "progress-bar" >
              <span style={{width: "30%"}}></span>
            </div>
          </div>
        </div>
        <div className = "divider-container">
          <div className = "divider-children sub-heading">
            <h2>React</h2>
          </div>
          <div className = "divider-children">
            <div className = "progress-bar" >
              <span style={{width: "40%"}}></span>
            </div>
          </div>
        </div>
        <div className = "divider-container">
          <div className = "divider-children sub-heading">
            <h2>Spring Boot</h2>
          </div>
          <div className = "divider-children">
            <div className = "progress-bar" >
              <span style={{width: "30%"}}></span>
            </div>
          </div>
        </div>
        <div className = "start-dark-circle"></div>
        </div>

        <div className = "row">
          <div className = "start-rectangle"></div>
          <div className = "sub-heading">
            <h1>Certificates</h1>
          </div>
          <div className = "certificate-card-container">
            <div className = "certificate-card" >
              <h2>Front-End JavaScript Frameworks: Angular</h2>
              <h3>
                Aug-2020 <span><div className = "arrow-left"></div>No expiration</span>
              </h3>
              <p>Angular Framework</p>
              <div className = "certificate-card-footer">
                <a 
                  href="http://coursera.org/verify/9RGZZ56GK7LG" target="_blank" rel="noopener noreferrer"
                  className = "custom-link">
                  <BiLink />
                </a>
                <div className = "orginsation-icon">
                  <img className = "image-fill" src={courseraLogo} alt="not found"></img>
                </div>
              </div>
            </div>
            <div className = "certificate-card" >
              <h2>HTML, CSS, and Javascript for Web Developers</h2>
              <h3>
                July-2020 <span><div className = "arrow-left"></div>No expiration</span>
              </h3>
              <p>Web delvlopment basics</p>
              <div className = "certificate-card-footer">
                <a 
                  href="http://coursera.org/verify/RAXLMWBLJ2WM" target="_blank" rel="noopener noreferrer"
                  className = "custom-link">
                  <BiLink />
                </a>
                <div className = "orginsation-icon">
                  <img className = "image-fill" src={courseraLogo} alt="not found"></img>
                </div>
              </div>
            </div>
            <div className = "certificate-card" >
              <h2>Machine Learning</h2>
              <h3>
                Jun-2020 <span><div className = "arrow-left"></div>No expiration</span>
              </h3>
              <p>Machine Learning basics</p>
              <div className = "certificate-card-footer">
                <a 
                  href="http://coursera.org/verify/WYGEPNQHCAVF" target="_blank" rel="noopener noreferrer"
                  className = "custom-link">
                  <BiLink />
                </a>
                <div className = "orginsation-icon">
                  <img className = "image-fill" src={courseraLogo} alt="not found"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Resume;
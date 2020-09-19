import React, { Component } from "react";

import { FaGithub } from "react-icons/fa";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

class Projects extends Component {
  render() {
    return(
      <>
        <div className = "row">
          <div className = "main-heading">
            <h1>Projects</h1>
          </div>
        </div>
        <div className = "row">
          <div className = "start-rectangle"></div>
          <div className = "project-card-container">
            <div className = "project-card">
              <h2>People Counter</h2>
              {/* <h3>
                <span>Aug-2019<div className = "arrow-right"></div></span> 
                <span><div className = "arrow-left"></div>May-2019</span>
              </h3> */}
              <h3>Aug-2019 May-2020</h3>
              <p>detecting and counting people in surveillance video footage with manually trained model based on YOLOv3 framework.</p>
              <div className = "project-card-footer">
                <a 
                  href="https://github.com/pavan-kumar-geddapu/PeopleCounter" target="_blank" rel="noopener noreferrer"
                  className = "custom-link">
                  <FaGithub />
                </a>
                <div className = "tech-icon">
                <img className = "image-fill" src={require('../assets/python.png')} alt="not found"></img>
                </div>
              </div>
            </div>
            <div className = "project-card">
              <h2>Path Finding Visualiser</h2>
              <h3>Aug-2020 Aug-2020</h3>
              <p>A tool to visualise and understand different path finding algorithms ( Breadth First Search , Dijkstra's ) etc..</p>
              <div className = "project-card-footer">
                <a 
                  href="https://github.com/pavan-kumar-geddapu/visualising-tool-pathfinder" target="_blank" rel="noopener noreferrer"
                  className = "custom-link">
                  <FaGithub />
                </a>
                <a 
                  href="https://pavan-kumar-geddapu.github.io/visualising-tool-pathfinder/" target="_blank" rel="noopener noreferrer"
                  className = "custom-link">
                  <FaExternalLinkSquareAlt />
                </a>
                <div className = "tech-icon">
                <img className = "image-fill" src={require('../assets/react.png')} alt="not found"></img>
                </div>
              </div>
            </div>
            <div className = "project-card">
              <h2>Portfolio Website</h2>
              <h3>
                Sep-2020 <span><div className = "arrow-left"></div>Present</span>
              </h3>
              <p>My portfolio website with custom made CSS styles using react framework.</p>
              <div className = "project-card-footer">
                <a 
                  href="https://github.com/pavan-kumar-geddapu/portfolio-website" target="_blank" rel="noopener noreferrer"
                  className = "custom-link">
                  <FaGithub />
                </a>
                <a 
                  href="#" target="_blank" rel="noopener noreferrer"
                  className = "custom-link">
                  <FaExternalLinkSquareAlt />
                </a>
                <div className = "tech-icon">
                <img className = "image-fill" src={require('../assets/react.png')} alt="not found"></img>
                </div>
              </div>
            </div>
            <div className = "project-card">
              <h2>Mini Music Player</h2>
              <h3>June-2020 June-2020</h3>
              <p>a custom made music player containing selected songs similar to a mobile music player. created using angular framework.</p>
              <div className = "project-card-footer">
                <a 
                  href="https://github.com/pavan-kumar-geddapu/mini-music-player" target="_blank" rel="noopener noreferrer"
                  className = "custom-link">
                  <FaGithub />
                </a>
                <a 
                  href="https://pavan-kumar-geddapu.github.io/mini-music-player/" target="_blank" rel="noopener noreferrer"
                  className = "custom-link">
                  <FaExternalLinkSquareAlt />
                </a>
                <div className = "tech-icon">
                <img className = "image-fill" src={require('../assets/angular.png')} alt="not found"></img>
                </div>
              </div>
            </div>
            <div className = "project-card">
              <h2>Clustering techniques in Data Mining</h2>
              <h3>April-2020 April-2020   </h3>
              <p>implementing few clustering techniques in data mining using python libraries</p>
              <div className = "project-card-footer">
                <a 
                  href="https://github.com/pavan-kumar-geddapu/clustering-techniques-in-Data-Mining" target="_blank" rel="noopener noreferrer"
                  className = "custom-link">
                  <FaGithub />
                </a>
                <div className = "tech-icon">
                <img className = "image-fill" src={require('../assets/python.png')} alt="not found"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Projects;
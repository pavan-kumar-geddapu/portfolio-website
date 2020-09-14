import React, { Component } from "react";

import "../css/Description.css";
import "./AboutMe";
import "./Resume";
import "./Projects";
import "./Contact";
import AboutMe from "./AboutMe";
import Resume from "./Resume";
import Projects from "./Projects";
import Contact from "./Contact";

class Description extends Component {
  render() {

    const { descriptionItem } = this.props;

    let descriptionComponent;
    if(descriptionItem === "aboutme"){
      descriptionComponent = <AboutMe />;
    }
    else if(descriptionItem === "resume"){
      descriptionComponent = <Resume />;
    }
    else if(descriptionItem === "projects"){
      descriptionComponent = <Projects />;
    }
    else if(descriptionItem === "contact"){
      descriptionComponent = <Contact />;
    }

    return(
      <div className = "custom-description">
        {descriptionComponent}
        <div className = "custom-footer"></div>
      </div>
    );
  }
}

export default Description;

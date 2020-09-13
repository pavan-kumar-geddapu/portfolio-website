import React, { Component } from "react";

import "../css/ContactHeader.css";

class ContactHeader extends Component {
  render() {
    return(
      <div className = "custom-contactheader">
        <div className = "custom-contact-item"></div>
        <div className = "custom-contact-item"></div>
        <div className = "custom-contact-item"></div>
      </div>
    );
  }
}

export default ContactHeader;

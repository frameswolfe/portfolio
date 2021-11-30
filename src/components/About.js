import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";

function About(props) {
  return (
    <div className="content-container">
      <h1 className="title">About</h1>
      <div className="about-container">
        <h6 className="resume">Click here for my resume: <a href="https://www.google.co.uk" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFileAlt} />
        </a></h6>
      </div>
    </div>
  )
}

export default About;

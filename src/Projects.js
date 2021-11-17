import React from "react"
import Thumbnail from "./Thumbnail";
import './App.css';

function Projects(props) {
  return(
    <div>
      <h1>Projects</h1>
      <Thumbnail
        link="/thegreenroom"
        image="http://www.enterthegreenroom.co.uk/assets/logo/greenlogo-913804c0351e1a02b906943423851880810582fa873f0e9d93c7f56544e9e03a.png"
        title="theGreenRoom"
        category="Web App"
      />
    </div>
  )
}

export default Projects;

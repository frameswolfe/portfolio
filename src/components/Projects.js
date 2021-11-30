import React from "react"
import Thumbnail from "./Thumbnail";
import '../App.css';

function Projects(props) {
  return(
    <div>
      <h1>Projects</h1>
      <Thumbnail
        url="http://www.enterthegreenroom.co.uk"
        image="http://www.enterthegreenroom.co.uk/assets/logo/greenlogo-913804c0351e1a02b906943423851880810582fa873f0e9d93c7f56544e9e03a.png"
        title="theGreenRoom"
        category="Web App"
      />
      <Thumbnail
        url="http://wolfes-watch-list.herokuapp.com"
        image="http://www.enterthegreenroom.co.uk/assets/logo/greenlogo-913804c0351e1a02b906943423851880810582fa873f0e9d93c7f56544e9e03a.png"
        title="Movie Watch List"
        category="Web App"
      />
    </div>
  )
}

export default Projects;

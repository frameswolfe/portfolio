import React from "react"
import Thumbnail from "./Thumbnail";
import YoutubeEmbed from "./YoutubeEmbed";
import homepage from "../images/homepage.png"
import placeholder from "../images/placeholder.png"
import '../App.css';

console.log(homepage);

function Projects(props) {
  return(
    <div className="content-container">
      <h1 className="title">Projects</h1>
      <div className="thumbnail-container">
        <YoutubeEmbed embedId="me5B9C6wmac" />
      </div>
      <div className="thumbnail-container">
        <div className="project-image">
          <img src={homepage} alt="theGreenRoom Thumbnail" />
        </div>
        <Thumbnail
          url="http://www.enterthegreenroom.co.uk"
          title="theGreenRoom"
          description="A platform that aims to reconnect live music venues directly with emerging artists - streamlining the booking process and removing third parties from the equation."
        />
      </div>
      <div className="thumbnail-container">
        <div className="project-image">
          <img src={placeholder} alt="Wolfe's Watch List Thumbnail" />
        </div>
        <Thumbnail
          url="http://wolfes-watch-list.herokuapp.com"
          title="Wolfe's Watch List"
          description="A simple project which allows you to create lists of all your favourite movies. All the movies were seeded from The Movie Database API."
        />
      </div>
    </div>
  )
}

export default Projects;

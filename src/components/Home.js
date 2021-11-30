import React from "react"
import TypeWriter from 'react-typewriter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
// import { Document, Page } from "react-pdf/dist/entry.webpack";
// import resume from "../data/resume"

function Home(props) {
  return (
    <div className="home">
    <div className="home-container">
      <div className="home-title">
        <h1>James Wolfe</h1>
        <TypeWriter typing={1} fixed={true}>Full Stack Developer</TypeWriter>
      </div>
      <div className="home-resume">
          <a href = "https://www.google.co.uk" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFileAlt} />
          </a>
      </div>
    </div>
      <div className="home-text">
        <div className="home-text-left">
          <h2>Welcome</h2>
          <p>
            Hi 👋 I'm James, and I'm a developer. I spent the last 5 years working for a London-based MSP and recently took the plunge in the wonderful world of code.
          </p>
          <p>
            Three random facts about me: I play bass in a band called ISLAND, I just signed up to run the Hackney Half, and the curls are gone for the first time in 15 years!
          </p>
        </div>
        <div className="home-text-right">
          <h2>Skills</h2>
            <li>Ruby | Ruby on Rails</li>
            <li>Javascript | ReactJS</li>
            <li>HTML | CSS/SASS</li>
            <li>SQL | Postgres</li>
            <li>Heroku</li>
            <li>Figma</li>
            <li>APIs</li>
            <li>Git</li>
        </div>
      </div>
    </div>
  )
}

export default Home;

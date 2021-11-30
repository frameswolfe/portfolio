import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons"
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Contact(props) {
  return(
    <div className="content-container">
      <h1 className="title">Contact</h1>
      <div className="contact-container">
        <div className="contact-text">
          <p>Contact me by email at <a href="mailto:jr.wolfe@outlook.com" target="_blank" rel="noopener noreferrer">jr.wolfe@outlook.com</a></p>
          <p>or via the links below:</p>
        </div>
        <div className="icons">
          <a href="mailto:jr.wolfe@outlook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelopeSquare} /></a>
          <a href="https://www.linkedin.com/in/jr-wolfe/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="https://github.com/frameswolfe" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithubSquare} /></a>
        </div>
      </div>
    </div>
  )
}

export default Contact;

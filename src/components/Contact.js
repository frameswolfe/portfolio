import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons"
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Contact(props) {
  return(
    <div>
      <h1>Contact</h1>
      <p>Please feel free to contact me by email at jr.wolfe@outlook.com</p>
      <div className="icons">
        <FontAwesomeIcon icon={faEnvelopeSquare} />
        <FontAwesomeIcon icon={faLinkedin} />
        <FontAwesomeIcon icon={faGithubSquare} />
      </div>
    </div>
  )
}

export default Contact;

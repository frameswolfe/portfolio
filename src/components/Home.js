import React, { useState } from "react"
import TypeWriter from 'react-typewriter';
import { Document, Page, pdfjs } from "react-pdf";
import Modal from 'react-bootstrap/Modal';
import resume from '../data/resume.pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Home(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="home">
    <div className="home-container">
      <div className="home-title">
        <h1 className="home-title-name">James Wolfe | </h1>
        <h1 className="home-title-cv" onClick={handleShow}>CV</h1>
        <div className="home-subtitle">
          <TypeWriter typing={1} fixed={true}>Full Stack Developer</TypeWriter>
        </div>
      </div>
      {/* <div className="home-resume"></div> */}
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
      <Modal show={show} onHide={handleClose} animation={false} size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Body>
          <Document
            file={resume}
          >
            <Page pageNumber={1} />
          </Document>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Home;

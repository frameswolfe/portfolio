import React from 'react';
import '../App.css';

function Thumbnail(props) {
  return (
    <div className="project">
      <a href={props.url} target="_blank" rel="noopener noreferrer">
        <div className="project-image">
          <img src={props.image} alt="Project Thumbnail"/>
        </div>
        <div className="project-title">{props.title}</div>
        <div className="project-category">{props.category}</div>
      </a>
    </div>
  );
}

export default Thumbnail;

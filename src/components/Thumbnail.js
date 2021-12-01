import React from 'react';

function Thumbnail(props) {
  return (
    <div className="project">
      <a href={props.url} target="_blank" rel="noopener noreferrer">
        <h3 className="project-title">{props.title}</h3>
        <div className="project-description">{props.description}</div>
      </a>
    </div>
  );
}

export default Thumbnail;

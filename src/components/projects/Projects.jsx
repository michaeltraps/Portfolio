import React from 'react';
import './projects.css';

function Projects({ imgUrl, title, github, url, description }) {
  return (
    <div className='trapani__experience-container_projects'>
      <div className='trapani__experience-container_projects-image'>
        <img src={imgUrl} alt='project logo' />
      </div>
      <div className='trapani__experience-container_projects-content'>
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className='trapani__experience-container_projects-button'>
          <a href={github} target='_blank' rel='noreferrer'>
            Github
          </a>
          {url ? (
            <a href={url} target='_blank' rel='noreferrer'>
              Website
            </a>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
}

export default Projects;

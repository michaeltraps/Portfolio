import React from 'react';
import './projects.css';

function Projects({ imgUrl, title, github, url, description }) {
  return (
    <div className='trapani__experience-container_projects'>
      <div className='trapani__experience-container_projects-image'>
        <img src={imgUrl} alt='project logo' />
      </div>
      <div className='trapani__experience-container_content'>
        <div>
          <h3>{title}</h3>
        </div>
        <div>
          <p>{description}</p>
        </div>
        <a
          className='trapani__experience-container_projects-button'
          href={github}
          target='_blank'
          rel='noreferrer'>
          Github
        </a>
        {url ? (
          <a
            className='trapani__experience-container_projects-button'
            href={url}
            target='_blank'
            rel='noreferrer'>
            Website
          </a>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default Projects;

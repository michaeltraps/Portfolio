import React, { FC } from 'react';
import './skills.css';

interface Props {
  imgUrl: string,
  title: string,
}

export const Skills: FC<Props> = ({ imgUrl, title }) => {
  return (
    <div className='trapani__techstack-container_skills'>
      <div className='trapani__techstack-container_skills-image'>
        <img src={imgUrl} alt='techstack logo' />
      </div>
      <div className='trapani__techstack-container_skills-header'>
        <h3>{title}</h3>
      </div>
    </div>
  );
}
import React from 'react';
import Skills from '../../components/skills/Skills';
import { nodejs, react, git, sql, typescript } from './imports';
import './techstack.css';

function Techstack() {
  return (
    <div className='trapani__techstack section__padding' id='techstack'>
      <div className='trapani__techstack-heading'>
        <h2 className='gradient__text'>Techstack</h2>
      </div>
      <div className='trapani__techstack-container_group'>
        <Skills imgUrl={react} title='React' />
        <Skills imgUrl={typescript} title='TypeScript' />
        <Skills imgUrl={nodejs} title='NodeJS' />
        <Skills imgUrl={sql} title='PostgreSQL' />
        <Skills imgUrl={git} title='Git' />
      </div>
    </div>
  );
}

export default Techstack;

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
      <div className='trapani__techstack-container'></div>
      <Skills />
      <Skills />
      <Skills />
      <Skills />
      <Skills />
    </div>
  );
}

export default Techstack;

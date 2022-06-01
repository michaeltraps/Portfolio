import React from 'react';
import header from '../../assets/header.gif';
import './header.css';

function Header() {
  return (
    <div className='trapani__header section__padding'>
      <div className='trapani__header-content'>
        <h1 className='gradient__text'>
          Hey, good to see you. <br /> I'm Michael.
        </h1>
        <p className='gradient__text'>
          I'm a software engineer based out of NYC.
        </p>
      </div>
      <div className='trapani__header-image'>
        <img src={header} alt='a cozy desktop setup for coding' />
      </div>
    </div>
  );
}

export default Header;

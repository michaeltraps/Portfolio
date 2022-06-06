import React, { useState } from 'react';
import {
  RiMenu3Line,
  RiCloseLine,
  RiGithubFill,
  RiLinkedinBoxFill,
} from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo_75.png';
import resume from '../../assets/Michael_Trapani_Resume.pdf';

const Menu = () => (
  <>
    <p>
      <a href='#welcome'>Welcome</a>
    </p>
    <p>
      <a href='#techstack'>Skills</a>
    </p>
    <p>
      <a href='#experience'>Experience</a>
    </p>
    <p>
      <a href={resume} download>
        Resume
      </a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='trapani__navbar'>
      <div className='trapani__navbar-links'>
        <div className='trapani__navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='trapani__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='trapani__navbar-links_icons'>
        <a
          href='https://github.com/michaeltraps'
          target='_blank'
          rel='noreferrer'>
          {' '}
          <RiGithubFill size='40' />
        </a>
        <a
          href='https://www.linkedin.com/in/michael-a-trapani/'
          target='_blank'
          rel='noreferrer'>
          <RiLinkedinBoxFill size='40' />
        </a>
      </div>
      <div className='trapani__navbar-menu'>
        {toggleMenu ? (
          <RiCloseLine
            color='#fff'
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color='#fff'
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className='trapani__navbar-menu_container swing-in-top-fwd'>
            <div className='trapani__navbar-menu_container-links'>
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

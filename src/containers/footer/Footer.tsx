import React from 'react';
import logo from '../../assets/logo_75.png';
import './footer.css';

function Footer() {
  return (
    <div className='trapani__footer section__padding'>
      <div className='trapani__footer-links'>
        <div className='trapani__footer-links_logo'>
          <img src={logo} alt='trapani logo' />
        </div>
        <div className='trapani__footer-copyright'>
          <p>© 2022 Michael Trapani. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

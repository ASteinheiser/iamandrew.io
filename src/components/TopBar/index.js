import React, { useState } from 'react';
import Headroom            from 'react-headroom';

import Logo from './logo.svg';

import './top-bar.scss';

const TopBar = (props) => {

  const [active, setActive] = useState(null);

  return(
    <Headroom>
      <div className='top-bar-container'>

        <img className='top-bar-logo' src={Logo} alt='logo' />

        <div className='top-bar-item-container'>
          <div className={'top-bar-item' + (active === 'work' ? ' active' : '')}>
            {'WORK_'}
          </div>

          <div className={'top-bar-item' + (active === 'about' ? ' active' : '')}>
            {'ABOUT_'}
          </div>

          <div className={'top-bar-item' + (active === 'contact' ? ' active' : '')}>
            {'CONTACT_'}
          </div>
        </div>
      </div>
    </Headroom>
  )
}

export default TopBar;

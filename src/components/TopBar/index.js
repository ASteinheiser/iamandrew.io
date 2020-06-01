import React    from 'react';
import Headroom from 'react-headroom';
import { isMobile } from 'react-device-detect';

import Logo from './logo.svg';

import './top-bar.scss';

const TopBar = (props) => {

  return(
    <Headroom>
      <div className={`top-bar-container ${!isMobile ? 'top-bar-container--desktop' : ''}`}>
        <div className='max-width spacing'>
          <img className='top-bar-logo'
            src={Logo} alt='logo'
            onClick={() => props.navigate('home')} />

          <div className='top-bar-item-container'>

            <div className={'top-bar-item' + (props.active === 'work' ? ' active' : '')}
              onClick={() => props.navigate('work')}>
              {'WORK_'}
            </div>

            <div className={'top-bar-item' + (props.active === 'journey' ? ' active' : '')}
              onClick={() => props.navigate('journey')}>
              {'JOURNEY_'}
            </div>

            <div className={'top-bar-item' + (props.active === 'contact' ? ' active' : '')}
              onClick={() => props.navigate('contact')}>
              {'CONTACT_'}
            </div>
          </div>
        </div>
      </div>
    </Headroom>
  )
}

export default TopBar;

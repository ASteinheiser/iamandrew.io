import React    from 'react';
import Headroom from 'react-headroom';

import Logo from './logo.svg';

import './top-bar.scss';

const TopBar = (props) => {

  return(
    <Headroom>
      <div className='top-bar-container'>
        <div className='max-width spacing'>
          <img className='top-bar-logo'
            src={Logo} alt='logo'
            onClick={() => props.navigate('home')} />

          <div className='top-bar-item-container'>

            <div className={'top-bar-item' + (props.active === 'work' ? ' active' : '')}
              onClick={() => props.navigate('work')}>
              {'WORK_'}
            </div>

            <div className={'top-bar-item' + (props.active === 'about' ? ' active' : '')}
              onClick={() => props.navigate('about')}>
              {'ABOUT_'}
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

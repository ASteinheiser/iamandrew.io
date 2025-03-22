import Headroom from 'react-headroom';
import { isMobile } from 'react-device-detect';

import Logo from './logo.svg';

import './top-bar.scss';

interface TopBarProps {
  active: string;
  navigate: (section: string) => void;
}

const TopBar = ({ active, navigate }: TopBarProps) => {
  return (
    <Headroom>
      <div className={`top-bar-container ${!isMobile ? 'top-bar-container--desktop' : ''}`}>
        <div className="max-width spacing">
          <img className="top-bar-logo" src={Logo} alt="logo" onClick={() => navigate('home')} />

          <div className="top-bar-item-container">
            <div
              className={'top-bar-item' + (active === 'work' ? ' active' : '')}
              onClick={() => navigate('work')}
            >
              {'WORK_'}
            </div>

            <div
              className={'top-bar-item' + (active === 'journey' ? ' active' : '')}
              onClick={() => navigate('journey')}
            >
              {'JOURNEY_'}
            </div>

            <div
              className={'top-bar-item' + (active === 'contact' ? ' active' : '')}
              onClick={() => navigate('contact')}
            >
              {'CONTACT_'}
            </div>
          </div>
        </div>
      </div>
    </Headroom>
  );
};

export default TopBar;

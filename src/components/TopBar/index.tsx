import Headroom from 'react-headroom';

import Logo from '../../assets/logo.svg';
import './top-bar.scss';

export enum APP_SECTION {
  STARS = 'stars',
  WORK = 'work',
  CONTACT = 'contact',
}

interface TopBarProps {
  active: APP_SECTION;
  navigate: (section: APP_SECTION) => void;
}

export const TopBar = ({ active, navigate }: TopBarProps) => {
  return (
    <Headroom>
      <div className="top-bar-container">
        <div className="max-width spacing">
          <img
            className="top-bar-logo"
            src={Logo}
            alt="logo"
            onClick={() => navigate(APP_SECTION.STARS)}
          />

          <div className="top-bar-item-container">
            <div
              className={`top-bar-item ${active === APP_SECTION.WORK ? 'active' : ''}`}
              onClick={() => navigate(APP_SECTION.WORK)}
            >
              {'WORK_'}
            </div>

            <div
              className={`top-bar-item ${active === APP_SECTION.CONTACT ? 'active' : ''}`}
              onClick={() => navigate(APP_SECTION.CONTACT)}
            >
              {'CONTACT_'}
            </div>
          </div>
        </div>
      </div>
    </Headroom>
  );
};

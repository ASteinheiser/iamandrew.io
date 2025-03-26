import Headroom from 'react-headroom';
import { isDesktop } from 'react-device-detect';
import Logo from '../../assets/icons/logo.svg';
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
    <Headroom style={{ zIndex: 2 }}>
      <div className="top-bar-wrap">
        <div className="max-width top-bar-inner-wrap">
          <img
            className="top-bar-logo"
            src={Logo}
            alt="logo"
            onClick={() => navigate(APP_SECTION.STARS)}
          />

          <div className="top-bar-item-wrap">
            <div
              className={`
                top-bar-item
                ${active === APP_SECTION.WORK ? ' active' : ''}
                ${isDesktop ? ' top-bar-item-hover' : ''}
              `}
              onClick={() => navigate(APP_SECTION.WORK)}
            >
              {'WORK_'}
            </div>

            <div
              className={`
                top-bar-item
                ${active === APP_SECTION.CONTACT ? ' active' : ''}
                ${isDesktop ? ' top-bar-item-hover' : ''}
              `}
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

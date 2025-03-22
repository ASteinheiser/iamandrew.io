import { useState } from 'react';
import { scroller } from 'react-scroll';
import { InView } from 'react-intersection-observer';

import Journey from './components/Journey';
import Contact from './components/Contact';
import Footer from './components/Footer';
import InteractiveStars from './components/InteractiveStars';
import Work from './components/Work';
import TopBar from './components/TopBar';
import useScrollUp from './hooks/use-scroll-up.js';

export const App = () => {
  const [active, setActive] = useState('home');
  const scrollUp = useScrollUp();

  const navigate = (section: string) => {
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -70,
    });
  };

  const changeVisible = (isVisible: boolean, section: string) => {
    if (isVisible) {
      setActive(section);
    }
    // handle case for switch sections when scrolling up
    // because the sensor component either detects elements
    // completely in view, or based off offset from top of elements.
    // this handles switching 'active' sections when scrolling up into
    // sections that stretch past the screen height (especially on Mobile)
    else if (!isVisible && scrollUp) {
      switch (section) {
        case 'work':
          if (active === 'work') setActive('home');
          break;
        case 'journey':
          if (active === 'journey') setActive('work');
          break;
        case 'contact':
          if (active === 'contact') setActive('journey');
          break;
        default:
      }
    }
  };

  return (
    <>
      <TopBar active={active} navigate={navigate} />

      {/* <InView onChange={(isVisible) => changeVisible(isVisible, 'home')}>
        <InteractiveStars name="home" />
      </InView> */}

      <div className="max-width">
        <InView onChange={(isVisible) => changeVisible(isVisible, 'work')}>
          <Work name="work" />
        </InView>

        <InView onChange={(isVisible) => changeVisible(isVisible, 'journey')}>
          <Journey name="journey" />
        </InView>

        <InView onChange={(isVisible) => changeVisible(isVisible, 'contact')}>
          <>
            <Contact name="contact" />
            <Footer />
          </>
        </InView>
      </div>
    </>
  );
};

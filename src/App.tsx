import { useState } from 'react';
import { scroller } from 'react-scroll';
import { InView } from 'react-intersection-observer';

import { TopBar, APP_SECTION } from './components/TopBar';
import { InteractiveStars } from './components/InteractiveStars';
import { TypingText } from './components/TypingText';
import { Footer } from './components/Footer';
import { useScrollUp } from './hooks/use-scroll-up.js';

export const App = () => {
  const [active, setActive] = useState(APP_SECTION.STARS);
  const { isScrollUp } = useScrollUp();

  const navigate = (section: APP_SECTION) => {
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -70,
    });
  };

  const changeVisible = (isVisible: boolean, section: APP_SECTION) => {
    if (isVisible) {
      setActive(section);
    }
    // handle case for switch sections when scrolling up
    // because the sensor component either detects elements
    // completely in view, or based off offset from top of elements.
    // this handles switching 'active' sections when scrolling up into
    // sections that stretch past the screen height (especially on Mobile)
    else if (!isVisible && isScrollUp) {
      switch (section) {
        case APP_SECTION.WORK:
          if (active === APP_SECTION.WORK) setActive(APP_SECTION.STARS);
          break;
        case APP_SECTION.CONTACT:
          if (active === APP_SECTION.CONTACT) setActive(APP_SECTION.WORK);
          break;
        default:
      }
    }
  };

  return (
    <>
      <TopBar active={active} navigate={navigate} />

      <InView
        id={APP_SECTION.STARS}
        onChange={(isVisible) => changeVisible(isVisible, APP_SECTION.STARS)}
      >
        <InteractiveStars />
        <TypingText />
      </InView>

      <div className="max-width">
        <InView
          id={APP_SECTION.WORK}
          onChange={(isVisible) => changeVisible(isVisible, APP_SECTION.WORK)}
        >
          <div>work</div>
        </InView>

        <InView
          id={APP_SECTION.CONTACT}
          onChange={(isVisible) => changeVisible(isVisible, APP_SECTION.CONTACT)}
        >
          <Footer />
        </InView>
      </div>
    </>
  );
};

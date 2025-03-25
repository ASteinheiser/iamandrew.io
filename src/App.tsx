import { useState } from 'react';
import { scroller } from 'react-scroll';
import { InView } from 'react-intersection-observer';

import { TopBar, APP_SECTION } from './components/TopBar';
import { InteractiveStars } from './components/InteractiveStars';
import { TypingText } from './components/TypingText';
import { Work } from './components/Work';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { useWindowSize } from './hooks/use-window-size';

export const App = () => {
  const [active, setActive] = useState(APP_SECTION.STARS);
  const { width } = useWindowSize();

  const isDesktop = width > 800;

  const navigate = (section: APP_SECTION) => {
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: isDesktop ? -70 : -60,
    });
  };

  const changeVisible = (isVisible: boolean, section: APP_SECTION) => {
    if (isVisible) {
      setActive(section);
    }
  };

  return (
    <>
      <TopBar active={active} navigate={navigate} />

      <InView
        as="div"
        id={APP_SECTION.STARS}
        threshold={0.8}
        onChange={(isVisible) => changeVisible(isVisible, APP_SECTION.STARS)}
      >
        <InteractiveStars />
        <TypingText />
      </InView>

      <div className="max-width">
        <InView
          as="div"
          id={APP_SECTION.WORK}
          threshold={isDesktop ? 0.3 : 0.2}
          onChange={(isVisible) => changeVisible(isVisible, APP_SECTION.WORK)}
        >
          <Work />
        </InView>

        <InView
          as="div"
          id={APP_SECTION.CONTACT}
          threshold={0.6}
          onChange={(isVisible) => changeVisible(isVisible, APP_SECTION.CONTACT)}
        >
          <Contact />
          <Footer />
        </InView>
      </div>
    </>
  );
};

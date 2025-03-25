import { useState } from 'react';
import { scroller } from 'react-scroll';
import { InView } from 'react-intersection-observer';

import { TopBar, APP_SECTION } from './components/TopBar';
import { InteractiveStars } from './components/InteractiveStars';
import { TypingText } from './components/TypingText';
import { Work } from './components/Work';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App = () => {
  const [active, setActive] = useState(APP_SECTION.STARS);

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
  };

  return (
    <>
      <TopBar active={active} navigate={navigate} />

      <InView
        as="div"
        id={APP_SECTION.STARS}
        threshold={[0.5]}
        onChange={(isVisible) => changeVisible(isVisible, APP_SECTION.STARS)}
      >
        <InteractiveStars />
        <TypingText />
      </InView>

      <div className="max-width">
        <InView
          as="div"
          id={APP_SECTION.WORK}
          threshold={[0.3, 0.7]}
          onChange={(isVisible) => changeVisible(isVisible, APP_SECTION.WORK)}
        >
          <Work />
        </InView>

        <InView
          as="div"
          id={APP_SECTION.CONTACT}
          threshold={[0]}
          onChange={(isVisible) => changeVisible(isVisible, APP_SECTION.CONTACT)}
        >
          <Contact />
          <Footer />
        </InView>
      </div>
    </>
  );
};

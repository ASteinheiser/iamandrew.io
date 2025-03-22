import { useState } from 'react';
import { scroller } from 'react-scroll';

import Journey from './components/Journey';
import Contact from './components/Contact';
import Footer from './components/Footer';
import InteractiveStars from './components/InteractiveStars';
import Work from './components/Work';
import Sensor from './components/Sensor';
import TopBar from './components/TopBar';
import useScrollUp from './hooks/use-scroll-up.js';

const App = () => {
  const [active, setActive] = useState('home');
  const scrollUp = useScrollUp();

  function navigate(section: string) {
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -70,
    });
  }

  function changeVisible(isVisible: boolean, section: string) {
    if (isVisible) {
      setActive(section);
    }
    // handle case for switch sections when scrolling up
    // because the sensor component either detects elements
    // completely in view, or based off offset from top of elements.
    // this handles switching 'active' sections when scrolling up into
    // sections that stretch past the screen height (specifically on Mobile)
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
  }

  return (
    <>
      <TopBar active={active} navigate={navigate} />

      <Sensor onChange={(isVisible) => changeVisible(isVisible, 'home')}>
        <InteractiveStars name="home" />
      </Sensor>

      <div className="max-width">
        <Sensor onChange={(isVisible) => changeVisible(isVisible, 'work')}>
          <Work name="work" />
        </Sensor>

        <Sensor onChange={(isVisible) => changeVisible(isVisible, 'journey')}>
          <Journey name="journey" />
        </Sensor>

        <Sensor onChange={(isVisible) => changeVisible(isVisible, 'contact')}>
          <>
            <Contact name="contact" />
            <Footer />
          </>
        </Sensor>
      </div>
    </>
  );
};

export default App;

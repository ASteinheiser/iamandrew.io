import React, { useState } from 'react';
import { scroller }        from 'react-scroll';

import AboutMe          from './components/AboutMe';
import InteractiveStars from './components/InteractiveStars';
import MyWork           from './components/MyWork';
import Sensor           from './components/Sensor';
import TopBar           from './components/TopBar';
import useScrollUp      from './modules/use-scroll-up.js';

const App = (props) => {

  const [active, setActive] = useState('home');
  const scrollUp = useScrollUp();

  function navigate(section) {
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -70
    });
  }

  function changeVisible(isVisible, section) {
    if(isVisible) {
      setActive(section);
    }
    // handle case for switch sections when scrolling up
    // because the sensor component either detects elements
    // completely in view, or based off offset from top of elements.
    // this handles switching 'active' sections when scrolling up into
    // sections that stretch past the screen height (specifically on Mobile)
    else if(!isVisible && scrollUp) {
      switch(section) {
        case 'work':
          setActive('home');
          break;
        case 'about':
          setActive('work');
          break;
        case 'contact':
          setActive('about');
          break;
        default:
      }
    }
  }

  return(
    <React.Fragment>

      <TopBar active={active} navigate={navigate} />

      <Sensor onChange={(isVisible) => changeVisible(isVisible, 'home')}>
        <InteractiveStars name={'home'} />
      </Sensor>

      <div className='max-width'>
        <Sensor onChange={(isVisible) => changeVisible(isVisible, 'work')}>
          <MyWork name={'work'} />
        </Sensor>

        <Sensor onChange={(isVisible) => changeVisible(isVisible, 'about')}>
          <AboutMe name={'about'} />
        </Sensor>

        <Sensor onChange={(isVisible) => changeVisible(isVisible, 'contact')}>
          <div style={{height: 500}} name={'contact'}>
            {"CONTACT"}
          </div>
        </Sensor>
      </div>
    </React.Fragment>
  )
}

export default App;

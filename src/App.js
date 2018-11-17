import React, { useState } from 'react';
import { scroller }        from 'react-scroll';
import VisibilitySensor    from 'react-visibility-sensor';

import AboutMe          from './components/AboutMe';
import InteractiveStars from './components/InteractiveStars';
import MyWork           from './components/MyWork';
import TopBar           from './components/TopBar';

const Sensor = (props) => {

  const { children } = props;

  return(
    <VisibilitySensor
      minTopValue={300}
      partialVisible={true}
      partialVisibility={'top'}
      {...props}>

      { children }

    </VisibilitySensor>
  );
}

const App = (props) => {

  const [active, setActive] = useState('home');

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

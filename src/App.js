import React, { useState, useEffect } from 'react';
import { Events, scroller }           from 'react-scroll';
import VisibilitySensor               from 'react-visibility-sensor';

import TopBar from './components/TopBar';

const App = (props) => {

  const [active, setActive] = useState('home');

  useEffect(() => {
    Events.scrollEvent.register('begin', () => {/*console.log("begin", arguments)*/});
    Events.scrollEvent.register('end', () => {/*console.log("end", arguments)*/});
    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    }
  }, []); // call this effect only on mount

  function navigate(section) {
    setActive(section);

    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  }

  function changeVisible(isVisible, section) {
    console.log(section + ' is ' + isVisible);
  }

  return(
    <React.Fragment>

      <TopBar active={active} navigate={navigate} />

      <VisibilitySensor onChange={(isVisible) => changeVisible(isVisible, 'home')}>
        <div style={{height: 500}} name={'home'}>
          {'home!!!!'}
        </div>
      </VisibilitySensor>

      <VisibilitySensor onChange={(isVisible) => changeVisible(isVisible, 'work')}>
        <div style={{height: 500}} name={'work'}>
          {'WORK!!!!'}
        </div>
      </VisibilitySensor>

      <VisibilitySensor onChange={(isVisible) => changeVisible(isVisible, 'about')}>
        <div style={{height: 500}} name={'about'}>
          {'ABOUT!!!!'}
        </div>
      </VisibilitySensor>

      <VisibilitySensor onChange={(isVisible) => changeVisible(isVisible, 'contact')}>
        <div style={{height: 500}} name={'contact'}>
          {'CONTACT!!!!'}
        </div>
      </VisibilitySensor>
    </React.Fragment>
  )
}

export default App;

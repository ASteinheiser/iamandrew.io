import React, { useState } from 'react';
import { scroller }        from 'react-scroll';
import VisibilitySensor    from 'react-visibility-sensor';

import InteractiveStars from './components/InteractiveStars';
import TopBar           from './components/TopBar';

const App = (props) => {

  const [active, setActive] = useState('home');

  function navigate(section) {
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
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

      <VisibilitySensor onChange={(isVisible) => changeVisible(isVisible, 'home')}>
        <InteractiveStars name={'home'} />
      </VisibilitySensor>

      <div className='max-width'>
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
      </div>
    </React.Fragment>
  )
}

export default App;

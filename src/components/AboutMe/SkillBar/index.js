import React, { useState } from 'react';
import VisibilitySensor    from 'react-visibility-sensor';

import './skill-bar.scss';

const SkillBar = (props) => {

  const { title, width } = props;

  const [sensorActive, setSensorActive] = useState(true);
  const [currWidth, setCurrWidth] = useState(0);

  function changeVisible(isVisible) {
    if(isVisible) {
      setSensorActive(false);
      setCurrWidth(width);
    }
  }

  return(
    <VisibilitySensor
      active={sensorActive}
      onChange={(isVisible) => changeVisible(isVisible)}>

      <div className='skill-bar'>

        <div className='label'>
          { title }
        </div>

        <div className='fill-bar'
          style={{ width: currWidth }}>
        </div>

      </div>
    </VisibilitySensor>
  );
}

export default SkillBar;

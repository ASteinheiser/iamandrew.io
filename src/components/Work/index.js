import React, { useState } from 'react';

import Projects from './projects.json';
import WorkBubble from './WorkBubble';
import Sensor from '../Sensor';

import './my-work.scss';

const MyWork = ({ name }) => {

  const [activePost, setActivePost] = useState(null);

  return(
    <div name={name} className='my-work-container'>

      <div className='title'>
        {'MY WORK'}
      </div>

      <div className='bubble-container'>
        {
          Projects.map((item, index) => {
            const { title } = item;

            return (
              <Sensor
                key={index}
                minTopValue={400}
                onChange={(isVisible) => {
                  if (isVisible) {
                    setActivePost(title);
                  } else if (!isVisible && activePost === title) {
                    setActivePost(null);
                  }
                }}>
                <WorkBubble data={item} active={activePost === title} />
              </Sensor>
            );
          })
        }
      </div>

    </div>
  );
}

export default MyWork;

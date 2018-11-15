import React from 'react';

import Projects   from './projects.json';
import WorkBubble from './WorkBubble';

import './my-work.scss';

const MyWork = (props) => {
  return(
    <div className='my-work-container' name={props.name}>

      <div className='title'>
        {'MY WORK'}
      </div>

      {
        Object.keys(Projects).reverse().map(key => {
          return (
            <WorkBubble
              key={key}
              data={Projects[key]} />
          );
        })
      }

    </div>
  );
}

export default MyWork;

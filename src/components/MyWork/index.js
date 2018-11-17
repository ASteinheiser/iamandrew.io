import React from 'react';

import Projects   from './projects.json';
import WorkBubble from './WorkBubble';

import './my-work.scss';

const MyWork = (props) => {

  const { name } = props;

  return(
    <div name={name} className='my-work-container'>

      <div className='title'>
        {'MY WORK'}
      </div>

      <div className='bubble-container'>
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

    </div>
  );
}

export default MyWork;

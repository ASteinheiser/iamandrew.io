import React from 'react';

import './work-bubble.scss';

const WorkBubble = (props) => {

  const { image, link, title } = props.data;

  return(
    <a href={link}
      target='_blank'
      rel='noopener noreferrer'
      style={{backgroundImage: `url(${image})`}}
      className='work-bubble-container'>

      <div className='hover-title'>
        { title }
      </div>

    </a>
  );
}

export default WorkBubble;

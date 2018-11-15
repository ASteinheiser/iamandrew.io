import React from 'react';

import './work-bubble.scss';

const WorkBubble = (props) => {

  const { image, link, title } = props.data;

  return(
    <a href={link} target='_blank' className='work-bubble-container'>

      <img src={image} alt={title} className='project-image' />

      <div className='hover-title'>
        { title }
      </div>
    </a>
  );
}

export default WorkBubble;

import React from 'react';

import SkillBadge from '../SkillBadge';

import './work-bubble.scss';

const WorkBubble = (props) => {

  const { image, link, title, tags } = props.data;

  return(
    <a href={link}
      target='_blank'
      rel='noopener noreferrer'
      style={{backgroundImage: `url(${image})`}}
      className='work-bubble-container'>

      <div className='hover-title'>
        { title }

        <div className='tags-container'>
          {tags.map(tag => <SkillBadge title={tag} />)}
        </div>
      </div>

    </a>
  );
}

export default WorkBubble;

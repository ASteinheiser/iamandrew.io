import React from 'react';
import { isMobile } from 'react-device-detect';

import SkillBadge from '../SkillBadge';

import './work-bubble.scss';

const WorkBubble = ({ data, active }) => {

  const { image, link, title, tags } = data;

  const style = { backgroundImage: `url(${image})` };
  if (isMobile && active) {
    style.transform = 'scale(1.1)';
  }

  return(
    <a href={link}
      target='_blank'
      rel='noopener noreferrer'
      style={style}
      className={`
        work-bubble-container
        ${!isMobile ? 'work-bubble-container--desktop' : ''}
      `}>

      <div className='hover-title'>
        { title }

        <div className='tags-container'>
          {tags.map(tag => <SkillBadge key={tag} title={tag} />)}
        </div>
      </div>

    </a>
  );
}

export default WorkBubble;

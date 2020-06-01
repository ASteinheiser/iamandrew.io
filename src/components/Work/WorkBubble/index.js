import React from 'react';
import { isMobile } from 'react-device-detect';

import SkillBadge from '../SkillBadge';

import './work-bubble.scss';

const WorkBubble = ({ data, active }) => {

  const { image, link, title, tags } = data;

  const shouldAnimate = isMobile && active;

  const style = { backgroundImage: `url(${image})` };
  if (shouldAnimate) {
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

      <div
        style={shouldAnimate ? { opacity: 1 } : {}}
        className={`
          hover-title
          ${shouldAnimate ? 'hover-title--mobile__active' : ''}
        `}
      >
        <div>{ title }</div>

        <div className='tags-container' style={shouldAnimate ? { opacity: 1 } : {}}>
          {tags.map(tag => <SkillBadge key={tag} title={tag} />)}
        </div>
      </div>

    </a>
  );
}

export default WorkBubble;

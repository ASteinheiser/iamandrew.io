import { isMobile } from 'react-device-detect';

import SkillBadge from '../SkillBadge';

import './work-bubble.scss';

interface WorkBubbleProps {
  data: {
    title: string;
    image: string;
    link: string;
    tags: string[];
  };
  active: boolean;
}

const WorkBubble = ({ data, active }: WorkBubbleProps) => {
  const { image, link, title, tags } = data;

  const shouldAnimate = isMobile && active;

  const style: Record<string, string> = { backgroundImage: `url(${image})` };
  if (shouldAnimate) {
    style.transform = 'scale(1.1)';
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={style}
      className={`
        work-bubble-container
        ${!isMobile ? 'work-bubble-container--desktop' : ''}
      `}
    >
      <div
        style={shouldAnimate ? { opacity: 1 } : {}}
        className={`
          hover-title
          ${shouldAnimate ? 'hover-title--mobile__active' : ''}
        `}
      >
        <div>{title}</div>

        <div className="tags-container" style={shouldAnimate ? { opacity: 1 } : {}}>
          {tags.map((tag) => (
            <SkillBadge key={tag} title={tag} />
          ))}
        </div>
      </div>
    </a>
  );
};

export default WorkBubble;

import { useState } from 'react';
import { InView } from 'react-intersection-observer';
import { workList } from './work-list';
import { isMobile } from 'react-device-detect';
import './work.scss';

export const Work = () => {
  const [visibleId, setVisibleId] = useState<number | null>(null);

  const handleChangeVisible = (index: number) => (isVisible: boolean) => {
    if (isVisible) {
      setVisibleId(index);
    } else if (visibleId === index) {
      setVisibleId(null);
    }
  };

  return (
    <div className="work-list-wrap">
      {workList.map(({ title, description, link, image }, index) => (
        <InView as="div" key={index} threshold={1} onChange={handleChangeVisible(index)}>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              work-item
              ${index % 2 === 0 ? 'work-item-reverse' : ''}
              ${isMobile && visibleId === index ? 'work-item-focused' : ''}
            `}
          >
            <div className="work-item-content">
              <div className="work-item-title">{title}</div>
              <div className="work-item-description">{description}</div>
            </div>
            <div className="work-item-image">
              <img src={image} alt={title} />
            </div>
          </a>
        </InView>
      ))}
    </div>
  );
};

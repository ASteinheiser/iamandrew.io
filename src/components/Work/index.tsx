import { workList } from './work-list';
import './work.scss';

export const Work = () => {
  return (
    <div className="work-list-wrap">
      {workList.map(({ title, description, link, image }, index) => (
        <a
          key={index}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`work-item ${index % 2 === 0 ? 'work-item-reverse' : ''}`}
        >
          <div className="work-item-content">
            <div className="work-item-title">{title}</div>
            <div className="work-item-description">{description}</div>
          </div>
          <div className="work-item-image">
            <img src={image} alt={title} />
          </div>
        </a>
      ))}
    </div>
  );
};

import { workList } from './work-list';
import './work.scss';

export const Work = () => {
  return (
    <div className="work-list-wrap">
      {workList.map(({ title, description, link, image }, index) => (
        <a key={index} className="work-item" href={link} target="_blank" rel="noopener noreferrer">
          <div className="work-item-image">
            <img src={image} alt={title} />
          </div>
          <div className="work-item-content">
            <div className="work-item-title">{title}</div>
            <div className="work-item-description">{description}</div>
          </div>
        </a>
      ))}
    </div>
  );
};

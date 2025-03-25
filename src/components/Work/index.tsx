import { workList } from './work-list';
import './work.scss';

export const Work = () => {
  return (
    <div className="work-list-wrap">
      {workList.map(({ title }) => (
        <div key={title}>{title}</div>
      ))}
    </div>
  );
};

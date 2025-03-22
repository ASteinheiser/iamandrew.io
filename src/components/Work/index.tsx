import { useState } from 'react';
import { InView } from 'react-intersection-observer';

import Projects from './projects.json';
import WorkBubble from './WorkBubble';

import './my-work.scss';

interface MyWorkProps {
  name: string;
}

const MyWork = ({ name }: MyWorkProps) => {
  const [activePost, setActivePost] = useState<string | null>(null);

  return (
    <div id={name} className="my-work-container">
      <div className="title">{'MY WORK'}</div>

      <div className="bubble-container">
        {Projects.map((item, index) => {
          const { title } = item;

          return (
            <InView
              key={index}
              onChange={(isVisible) => {
                if (isVisible) {
                  setActivePost(title);
                } else if (!isVisible && activePost === title) {
                  setActivePost(null);
                }
              }}
            >
              <WorkBubble data={item} active={activePost === title} />
            </InView>
          );
        })}
      </div>
    </div>
  );
};

export default MyWork;

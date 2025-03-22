import MaterialIcon from 'material-icons-react';

import journeyData from './journey.json';

import './my-journey.scss';

interface TimelineItemProps {
  description: string;
  icon: string;
  title: string;
  year: string;
}

const TimelineItem = ({ description, icon, title, year }: TimelineItemProps) => {
  return (
    <div className="event">
      <div className="icon">
        <MaterialIcon name={icon} icon={icon} size={35} />
      </div>

      <div className="title-container">
        <div>{title}</div>
        <div className="year">{' ' + year}</div>
      </div>

      <div className="details">{description}</div>
    </div>
  );
};

interface MyJourneyProps {
  name: string;
}

const MyJourney = ({ name }: MyJourneyProps) => {
  return (
    <div id={name} className="journey-container">
      <div className="title">{'MY JOURNEY'}</div>

      <div className="timeline">
        <div className="line" />

        {journeyData.map((item, index) => {
          return (
            <TimelineItem
              key={index}
              title={item.title}
              year={item.year}
              icon={item.icon}
              description={item.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MyJourney;

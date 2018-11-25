import React        from 'react';
import MaterialIcon from 'material-icons-react';

import journeyData from './journey.json';

import './my-journey.scss';

const TimelineItem = (props) => {

  const { description, icon, title, year } = props;

  return(
    <div className='event'>

      <div className='icon'>
        <MaterialIcon icon={icon} size={35} color={'white'} />
      </div>

      <div className='title-container'>
        <div>
          { title }
        </div>
        <div className='year'>
          { ' ' + year }
        </div>
      </div>

      <div className='details'>
        { description }
      </div>

    </div>
  );
}

const MyJourney = (props) => {
  return(
    <div className='timeline'>

      <div className='line' />

      {
        Object.keys(journeyData).map(key => {
          return (
            <TimelineItem
              key={journeyData[key].id}
              title={journeyData[key].title}
              year={journeyData[key].year}
              icon={journeyData[key].icon}
              description={journeyData[key].description} />
            );
          })
      }
    </div>
  );
}

export default MyJourney;

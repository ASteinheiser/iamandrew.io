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

const MyJourney = ({ name }) => {
  return(
    <div name={name} className='journey-container'>
      <div className='title'>
        {'MY JOURNEY'}
      </div>

      <div className='timeline'>

        <div className='line' />

        {
          journeyData.map((item, index) => {
            return (
              <TimelineItem
                key={index}
                title={item.title}
                year={item.year}
                icon={item.icon}
                description={item.description} />
              );
            })
        }
      </div>
    </div>
  );
}

export default MyJourney;

import React from 'react';

import './skill-bar.scss';

const SkillBar = (props) => {

  const { title, width } = props;

  return(
    <div className='skill-bar'>

      <div className='label'>
        { title }
      </div>

      <div className='fill-bar'
        style={{ width }}>
      </div>

    </div>
  );
}

export default SkillBar;

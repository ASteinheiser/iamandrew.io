import React from 'react';

import MyJourney from './MyJourney';
import SkillBar  from './SkillBar';

import './about-me.scss';

const AboutMe = (props) => {

  const { name } = props;

  return (
    <div name={name} className='about-me-container'>
      <div className='title'>
        {'MY SKILLS'}
      </div>

      <SkillBar title='React & React Native' width='95%' />

      <SkillBar title='Node.js & Express' width='95%' />

      <SkillBar title='Databases (MySQL, Dynamo)' width='85%' />

      <SkillBar title='Amazon Web Services' width='80%' />

      <SkillBar title='UI Design (Sketch, Ps)' width='75%' />

      <div className='title' style={{paddingTop: 50}}>
        {'MY JOURNEY'}
      </div>

      <MyJourney />

    </div>
  );
}

export default AboutMe;

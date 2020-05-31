import React from 'react';

import './skill-badge.scss';

import GoSVG from './badges/golang.png';

const SkillBadge = ({ title }) => {

  const getImage = () => {
    switch (title) {
      case 'Golang':
        return GoSVG;
      default:
        return null;
    }
  };

  if (getImage() !== null) {
    return (
      <img
        alt="title"
        src={getImage()}
        className="skill-badge-container"
      />
    )
  }

  return null;
}

export default SkillBadge;

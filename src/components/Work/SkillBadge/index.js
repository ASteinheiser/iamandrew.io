import React from 'react';

import './skill-badge.scss';

import GoImg from './badges/golang.png';
import ReactImg from './badges/react.png';
import ReactNativeImg from './badges/react-native.png';
import ControllerImg from './badges/game-controller.png';

const SkillBadge = ({ title }) => {

  const getImage = () => {
    switch (title) {
      case 'Golang':
        return GoImg;
      case 'React':
        return ReactImg;
      case 'Game Development':
        return ControllerImg;
      case 'React Native':
        return ReactNativeImg;
      case 'Business Development':
        return null;
      case 'Lightroom':
        return null;
      case 'Photoshop':
        return null;
      case 'Electron':
        return null;
      case 'Rust':
        return null;
      case 'Machine Learning':
        return null;
      case 'Internet of Things':
        return null;
      case 'Blog Post':
        return null;
      default:
        return null;
    }
  };

  if (getImage() !== null) {
    return (
      <img
        alt="title"
        src={getImage()}
        className="skill-badge"
      />
    )
  }

  return null;
}

export default SkillBadge;

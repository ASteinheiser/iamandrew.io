import GoImg from './badges/golang.png';
import ReactImg from './badges/react.png';
import ReactNativeImg from './badges/react-native.png';
import ControllerImg from './badges/game-controller.png';
import BusinessImg from './badges/business.png';
import LightroomImg from './badges/lightroom.png';
import PhotoshopImg from './badges/photoshop.png';
import ElectronImg from './badges/electron.png';
import RustImg from './badges/rust.png';
import MachineLearningImg from './badges/machine-learning.png';
import IoTImg from './badges/iot.png';
import BlogImg from './badges/blog.png';
import LongboardImg from './badges/longboard.png';

import './skill-badge.scss';

interface SkillBadgeProps {
  title: string;
}

const SkillBadge = ({ title }: SkillBadgeProps) => {
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
        return BusinessImg;
      case 'Lightroom':
        return LightroomImg;
      case 'Photoshop':
        return PhotoshopImg;
      case 'Electron':
        return ElectronImg;
      case 'Rust':
        return RustImg;
      case 'Machine Learning':
        return MachineLearningImg;
      case 'Internet of Things':
        return IoTImg;
      case 'Blog Post':
        return BlogImg;
      case 'Longboard':
        return LongboardImg;
      default:
        return undefined;
    }
  };

  if (getImage() !== null) {
    return <img alt="title" src={getImage()} className="skill-badge" />;
  }

  return null;
};

export default SkillBadge;

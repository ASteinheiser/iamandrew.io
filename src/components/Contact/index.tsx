import { LinkWithIcon } from '../LinkWithIcon';
import { useWindowSize } from '../../hooks/use-window-size';
import ProfilePic from '../../assets/images/me.png';
import Mail from '../../assets/icons/mail.svg';
import LinkedIn from '../../assets/icons/linkedin.svg';
import GitHub from '../../assets/icons/github.svg';
import Briefcase from '../../assets/icons/briefcase.svg';
import './contact.scss';

export const Contact = () => {
  const { width } = useWindowSize();

  const isTabletOrAbove = width > 800;

  return (
    <div className="contact-wrap">
      <img src={ProfilePic} alt="Andrew Steinheiser" className="contact-image" />

      {isTabletOrAbove && <div className="contact-content-divider" />}

      <div className="contact-content">
        <LinkWithIcon
          text="me@iamandrew.io"
          alt="email"
          icon={Mail}
          href="mailto:me@iamandrew.io"
        />
        <LinkWithIcon
          text="github/ASteinheiser"
          alt="github"
          icon={GitHub}
          href="https://github.com/asteinheiser"
        />
        <LinkWithIcon
          text="linkedin/ASteinheiser"
          alt="linkedin"
          icon={LinkedIn}
          href="https://www.linkedin.com/in/asteinheiser/"
        />
        <LinkWithIcon
          text="View latest resume"
          alt="briefcase"
          icon={Briefcase}
          href="/resume.pdf"
        />
      </div>
    </div>
  );
};

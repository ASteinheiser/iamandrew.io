import { LinkWithIcon } from '../LinkWithIcon';
import { useWindowSize } from '../../hooks/use-window-size';
import ProfilePic from '../../assets/me.png';
import Mail from '../../assets/mail.svg';
import LinkedIn from '../../assets/linkedin.svg';
import GitHub from '../../assets/github.svg';
import Briefcase from '../../assets/briefcase.svg';
import './contact.scss';

export const Contact = () => {
  const { width } = useWindowSize();

  const isDesktop = width > 800;

  return (
    <div className="contact-wrap">
      <img src={ProfilePic} alt="Andrew Steinheiser" className="contact-image" />

      {isDesktop && <div className="contact-content-divider" />}

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

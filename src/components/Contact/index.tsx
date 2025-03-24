import ProfilePic from './assets/me.png';
import Mail from './assets/mail.svg';
import LinkedIn from './assets/linkedin.svg';
import GitHub from './assets/github.svg';
import Briefcase from './assets/briefcase.svg';

import './contact.scss';

export const Contact = () => {
  return (
    <div className="contact-container">
      <img src={ProfilePic} alt="Andrew Steinheiser" className="contact-image" />

      <div className="contact-content-divider" />

      <div className="contact-content">
        <div className="contact-item-wrap">
          <img src={Mail} alt="email" />
          <a href="mailto:me@iamandrew.io">me@iamandrew.io</a>
        </div>

        <div className="contact-item-wrap">
          <img src={GitHub} alt="github" />
          <a href="https://github.com/asteinheiser" target="_blank" rel="noopener noreferrer">
            github/ASteinheiser
          </a>
        </div>

        <div className="contact-item-wrap">
          <img src={LinkedIn} alt="LinkedIn" />
          <a
            href="https://www.linkedin.com/in/asteinheiser/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin/ASteinheiser
          </a>
        </div>

        <div className="contact-item-wrap">
          <img src={Briefcase} alt="briefcase" />
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            View resume
          </a>
        </div>
      </div>
    </div>
  );
};

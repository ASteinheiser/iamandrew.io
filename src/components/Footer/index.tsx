import Code from '../../assets/code.svg';
import './footer.scss';

export const Footer = () => {
  return (
    <div className="footer-wrap">
      {'Made with ♥ by Andrew Steinheiser'}

      <div className="footer-link">
        <img src={Code} alt="code" className="icon" />
        <a
          href="https://github.com/ASteinheiser/iamandrew.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          {'View source code'}
        </a>
      </div>
    </div>
  );
};

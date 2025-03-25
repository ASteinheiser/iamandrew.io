import { LinkWithIcon } from '../LinkWithIcon';
import Code from '../../assets/code.svg';
import './footer.scss';

export const Footer = () => {
  return (
    <div className="footer-wrap">
      {'Made with ♥ by Andrew Steinheiser'}

      <div className="footer-link">
        <LinkWithIcon
          text={'View source code'}
          alt={'code'}
          icon={Code}
          href="https://github.com/ASteinheiser/iamandrew.io"
        />
      </div>
    </div>
  );
};

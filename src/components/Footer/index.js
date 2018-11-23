import React from 'react';

import './footer.scss';

const Footer = (props) => {
  return(
    <div className='footer-container'>

      {'Made with ♥ by Andrew Steinheiser'}

      <a href='https://github.com/ASteinheiser/iamandrew.io'
        target='_blank'
        rel='noopener noreferrer'>
        {'View Source Code'}
      </a>

    </div>
  );
}

export default Footer;

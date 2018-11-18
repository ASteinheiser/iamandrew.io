import React from 'react';

import './contact.scss';

const Contact = (props) => {

  const { name } = props;

  return(
    <div name={name} className='contact-container'>
      <div className='paper-container'>
        <div className='title'>
          {'Contact'}
        </div>
      </div>
    </div>
  );
}

export default Contact;

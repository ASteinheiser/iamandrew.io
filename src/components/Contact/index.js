import React, { useState } from 'react';

import Input from '../Input';

import './contact.scss';

const Contact = (props) => {

  const { name } = props;

  const [email, setEmail] = useState('');

  function handleChange(e, field, updateFunc) {
    console.log('e:', e);
    console.log('field:', field);
    console.log('updateFunc:', updateFunc);
  }

  return(
    <div name={name} className='contact-container'>
      <div className='paper-container'>

        <div className='title'>
          {'CONTACT ME'}
        </div>

        <Input
          type='email'
          label='email'
          value={email}
          onChange={(e) => handleChange(e, 'email', setEmail)} />

      </div>
    </div>
  );
}

export default Contact;

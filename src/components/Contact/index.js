import React, { useState } from 'react';

import Button from '../Button';
import Input  from '../Input';

import './contact.scss';

const Contact = (props) => {

  const { name } = props;

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleChange(e, field, updateFunc) {
    console.log('e:', e);
    console.log('field:', field);
    console.log('updateFunc:', updateFunc);
  }

  function onSubmit() {
    console.log('submitting!!!');
  }

  return(
    <div name={name} className='contact-container'>
      <div className='paper-container'>

        <div className='title'>
          {'CONTACT ME'}
        </div>

        <Input
          label='Name'
          value={fullName}
          onChange={(e) => handleChange(e, 'fullName', setFullName)} />

        <Input
          type='email'
          label='Email Address'
          value={email}
          onChange={(e) => handleChange(e, 'email', setEmail)} />

        <Input
          multiline={true}
          rows={3}
          label='Message'
          value={message}
          onChange={(e) => handleChange(e, 'message', setMessage)} />

        <Button
          text='Send Message'
          onClick={onSubmit} />

      </div>
    </div>
  );
}

export default Contact;

import React, { useState } from 'react';
import validator           from 'validator';

import Button from '../Button';
import Input  from '../Input';

import './contact.scss';

const Contact = (props) => {

  const { name } = props;

  const [fullName, setFullName] = useState({value: '', valid: true});
  const [email, setEmail] = useState({value: '', valid: true});
  const [subject, setSubject] = useState({value: '', valid: true});
  const [message, setMessage] = useState({value: '', valid: true});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e, field, updateFunc) {
    const { value } = e.target;
    let valid = false;

    if(validateField(field, value)) {
      valid = true;
    }

    updateFunc({ value, valid });
  }

  function validateField(field, value) {
    switch(field) {
      case 'fullName':
      case 'subject':
      case 'message':
        return value.length > 0;
      case 'email':
        return validator.isEmail(value);
      default:
        return false;
    }
  }

  function onSubmit() {
    if(validateForm()) {
      setSubmitted(true);
    }
  }

  function validateForm() {
    let formValid = true;

    if(fullName.value === '' || !fullName.valid) {
      formValid = false;
      setFullName({ value: fullName.value, valid: false });
    }

    if(email.value === '' || !email.valid) {
      formValid = false;
      setEmail({ value: email.value, valid: false });
    }

    if(subject.value === '' || !subject.valid) {
      formValid = false;
      setSubject({ value: subject.value, valid: false });
    }

    if(message.value === '' || !message.valid) {
      formValid = false;
      setMessage({ value: message.value, valid: false });
    }

    return formValid;
  }

  return(
    <div name={name} className='contact-container'>
      <div className='paper-container'>

        <div className='title'>
          {'CONTACT ME'}
        </div>

        <Input
          label='Name'
          value={fullName.value}
          valid={fullName.valid}
          onChange={(e) => handleChange(e, 'fullName', setFullName)} />

        <Input
          type='email'
          label='Email Address'
          value={email.value}
          valid={email.valid}
          onChange={(e) => handleChange(e, 'email', setEmail)} />

        <Input
          label='Subject'
          value={subject.value}
          valid={subject.valid}
          onChange={(e) => handleChange(e, 'subject', setSubject)} />

        <Input
          multiline={true}
          rows={3}
          label='Message'
          value={message.value}
          valid={message.valid}
          onChange={(e) => handleChange(e, 'message', setMessage)} />

        <Button
          text='Send Message'
          onClick={onSubmit} />

        {
          submitted ?
            <div className='submit-screen'>
              Thank you! I will be in contact with you shortly.
            </div>
            :
            null
        }

      </div>
    </div>
  );
}

export default Contact;

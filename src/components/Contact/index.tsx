import { useState } from 'react';
import validator from 'validator';

import Button from '../Button';
import Input from '../Input';

import './contact.scss';

const API_URL = 'https://3tqvxy266m.execute-api.us-west-2.amazonaws.com/default/ContactMeEmail';

interface ContactProps {
  name: string;
}

const Contact = ({ name }: ContactProps) => {
  const [fullName, setFullName] = useState({ value: '', valid: true });
  const [email, setEmail] = useState({ value: '', valid: true });
  const [subject, setSubject] = useState({ value: '', valid: true });
  const [message, setMessage] = useState({ value: '', valid: true });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
    field: string,
    updateFunc: (value: { value: string; valid: boolean }) => void
  ) {
    const { value } = e.target;

    const valid = validateField(field, value);

    updateFunc({ value, valid });
  }

  function validateField(field: string, value: string) {
    switch (field) {
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

  function onSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    if (e && typeof e.preventDefault === 'function') e.preventDefault();

    if (validateForm() && !submitted && !loading) {
      setLoading(true);

      const options = {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        //make sure to serialize your JSON body
        body: JSON.stringify({
          name: fullName.value,
          email: email.value,
          subject: subject.value,
          message: message.value,
        }),
      };

      fetch(API_URL, options)
        .then(() => {
          setSubmitted(true);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
  }

  function validateForm() {
    let formValid = true;

    if (fullName.value === '' || !fullName.valid) {
      formValid = false;
      setFullName({ value: fullName.value, valid: false });
    }

    if (email.value === '' || !email.valid) {
      formValid = false;
      setEmail({ value: email.value, valid: false });
    }

    if (subject.value === '' || !subject.valid) {
      formValid = false;
      setSubject({ value: subject.value, valid: false });
    }

    if (message.value === '' || !message.valid) {
      formValid = false;
      setMessage({ value: message.value, valid: false });
    }

    return formValid;
  }

  return (
    <div id={name} className="contact-container">
      <div className="paper-container">
        <div className="title">{'CONTACT ME'}</div>

        <Input
          label="Name"
          value={fullName.value}
          valid={fullName.valid}
          onChange={(e) => handleChange(e, 'fullName', setFullName)}
        />

        <Input
          type="email"
          label="Email Address"
          value={email.value}
          valid={email.valid}
          onChange={(e) => handleChange(e, 'email', setEmail)}
        />

        <Input
          label="Subject"
          value={subject.value}
          valid={subject.valid}
          onChange={(e) => handleChange(e, 'subject', setSubject)}
        />

        <Input
          multiline={true}
          rows={3}
          label="Message"
          value={message.value}
          valid={message.valid}
          onChange={(e) => handleChange(e, 'message', setMessage)}
        />

        <Button loading={loading} text="Send Message" onClick={onSubmit} />

        {submitted ? (
          <div className="submit-screen">Thank you! I will be in contact with you shortly.</div>
        ) : null}
      </div>
    </div>
  );
};

export default Contact;

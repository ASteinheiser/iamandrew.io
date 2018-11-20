import React from 'react';

import './input.scss';

const Input = (props) => {

  const { label, type, value, onChange, multiline, rows } = props;

  return(
    <div className='input-container'>

      {
        multiline ?
          <textarea
            rows={rows || 1}
            required={true}
            type={type || 'text'}
            value={value}
            onChange={onChange} />
          :
          <input
            required={true}
            type={type || 'text'}
            value={value}
            onChange={onChange} />
      }

      <span className='color-bar' />

      <label>
        {label}
      </label>

    </div>
  );
}

export default Input;

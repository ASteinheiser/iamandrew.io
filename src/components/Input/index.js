import React from 'react';

import './input.scss';

const Input = (props) => {

  const { label, type, value, onChange } = props;

  return(
    <div className='input-container'>

      <input
        required={true}
        type={type || 'text'}
        value={value}
        onChange={onChange} />

      <span className='color-bar' />

      <label>
        {label}
      </label>

    </div>
  );
}

export default Input;

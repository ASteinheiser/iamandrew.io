import React from 'react';

import './button.scss';

const Button = (props) => {

  const { onClick, text } = props;

  return(
    <div className='button-container'
      onClick={onClick}>

      { text }

    </div>
  );
}

export default Button;

import React from 'react';

import './typing-text.scss';

const TypingText = (props) => {
  return(
    <div className='typing-text-container'>
      <span className='typing-text-main'>
        {'I AM '}
      </span>
      <span className='typing-text-accent'>
        {'ANDREW_'}
      </span>
    </div>
  );
}

export default TypingText;

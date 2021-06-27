import React        from 'react';
import ReactLoading from 'react-loading';

import './button.scss';

const Button = (props) => {

  const { onClick, text, loading } = props;

  function handleClick() {
    if(!loading) {
      onClick();
    }
  }

  return(
    <button
      className='button-container'
      onClick={handleClick}>

      {
        loading ?
          <ReactLoading
            color={'var(--white)'}
            type={'spin'}
            height={25}
            width={25} />
          :
          text
      }

    </button>
  );
}

export default Button;

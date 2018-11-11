import React from 'react';

import Logo from './logo.svg';

const App = (props) => {
  return(
    <React.Fragment>
      <div style={{fontSize: 36, padding: 50}}>
        {'This should be roboto font!!!'}
      </div>
      <div style={{fontSize: 36, padding: 50, fontFamily: 'Montserrat', color: 'var(--purple)'}}>
        {'This should be montserrat font!!!'}
      </div>
      <img src={Logo} alt='logo' />
    </React.Fragment>
  )
}

export default App;

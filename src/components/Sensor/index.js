import React            from 'react';
import VisibilitySensor from 'react-visibility-sensor';

const Sensor = (props) => {

  const { children } = props;

  return(
    <VisibilitySensor
      minTopValue={300}
      partialVisible={true}
      partialVisibility={'top'}
      {...props}>

      { children }

    </VisibilitySensor>
  );
}

export default Sensor;

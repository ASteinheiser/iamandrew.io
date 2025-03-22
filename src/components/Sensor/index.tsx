import VisibilitySensor from 'react-visibility-sensor';

interface SensorProps {
  children: React.ReactNode;
  onChange: (isVisible: boolean) => void;
}

const Sensor = (props: SensorProps) => {
  const { children, onChange } = props;

  return (
    <VisibilitySensor
      minTopValue={300}
      partialVisible={true}
      partialVisibility={'top'}
      onChange={onChange}
    >
      {children}
    </VisibilitySensor>
  );
};

export default Sensor;

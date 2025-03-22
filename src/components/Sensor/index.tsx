import VisibilitySensor from 'react-visibility-sensor';

interface SensorProps {
  children: React.ReactNode;
  onChange: (isVisible: boolean) => void;
  minTopValue?: number;
  partialVisible?: boolean;
  partialVisibility?: 'top' | 'bottom' | 'both';
}

const Sensor = (props: SensorProps) => {
  const { children, onChange } = props;

  return (
    <VisibilitySensor
      minTopValue={300}
      partialVisible={true}
      partialVisibility={'top'}
      {...props}
      onChange={onChange}
    >
      {children}
    </VisibilitySensor>
  );
};

export default Sensor;

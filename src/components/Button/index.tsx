import BounceLoader from 'react-spinners/BounceLoader';

import './button.scss';

interface ButtonProps {
  text: string;
  loading: boolean;
  onClick: () => void;
}

const Button = (props: ButtonProps) => {
  const { onClick, text, loading } = props;

  function handleClick() {
    if (!loading) {
      onClick();
    }
  }

  return (
    <button className="button-container" onClick={handleClick}>
      {loading ? <BounceLoader color={'var(--white)'} size={25} /> : text}
    </button>
  );
};

export default Button;

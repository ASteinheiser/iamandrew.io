import BounceLoader from 'react-spinners/BounceLoader';

import './button.scss';

interface ButtonProps {
  text: string;
  loading: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = (props: ButtonProps) => {
  const { onClick, text, loading } = props;

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    if (!loading) {
      onClick(e);
    }
  }

  return (
    <button className="button-container" onClick={handleClick}>
      {loading ? <BounceLoader color={'var(--white)'} size={25} /> : text}
    </button>
  );
};

export default Button;

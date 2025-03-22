import TextType from './text-type';

import './typing-text.scss';

const TYPING_TEXT = ['ANDREW', 'A FULLSTACK DEV', 'A SKATER', 'A CREATOR', '....'];

const TypingText = () => {
  window.onload = function () {
    const elements = document.getElementsByClassName('wrap');

    for (let i = 0; i < elements.length; i++) {
      new TextType(elements[i], TYPING_TEXT);
    }
  };

  return (
    <div className="typing-text-container">
      <div className="typewrite">
        <span className="typing-text-static">I AM </span>
        <span className="wrap"></span>
        <span className="blink-cursor">_</span>
      </div>
    </div>
  );
};

export default TypingText;

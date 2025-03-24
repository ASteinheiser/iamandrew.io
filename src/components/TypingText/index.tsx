import { TextType } from './text-type';
import './typing-text.scss';

const TYPING_TEXT_WORDS = ['ANDREW', 'A DEVELOPER', 'A SKATER', 'A CREATOR'];

export const TypingText = () => {
  window.onload = function () {
    const elements = document.getElementsByClassName('wrap');

    for (let i = 0; i < elements.length; i++) {
      new TextType({ element: elements[i] as HTMLElement, wordRotation: TYPING_TEXT_WORDS });
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

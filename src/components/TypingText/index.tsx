import { useEffect, useRef } from 'react';

import { TextType } from './text-type';
import './typing-text.scss';

const TYPING_TEXT_WORDS = ['ANDREW', 'A FULLSTACK DEV', 'A SKATER', 'A CREATOR'];

let textType: TextType;
const initTextType = (element: HTMLElement) => {
  if (textType) return;
  textType = new TextType({ element, wordRotation: TYPING_TEXT_WORDS });
};

export const TypingText = () => {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (textRef.current) {
      initTextType(textRef.current);
    }
  }, []);

  return (
    <div className="typing-text-wrap">
      <div className="typewrite">
        <span className="typing-text-static">I AM </span>
        <span ref={textRef} className="typing-text"></span>
        <span className="blink-cursor">_</span>
      </div>
    </div>
  );
};

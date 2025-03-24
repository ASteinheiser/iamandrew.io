import { useEffect, useRef } from 'react';

import { TextType } from './text-type';
import './typing-text.scss';

const TYPING_TEXT_WORDS = ['ANDREW', 'A DEVELOPER', 'A SKATER', 'A CREATOR'];

export const TypingText = () => {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (textRef.current) {
      new TextType({ element: textRef.current, wordRotation: TYPING_TEXT_WORDS });
    }
  }, []);

  return (
    <div className="typing-text-container">
      <div className="typewrite">
        <span className="typing-text-static">I AM </span>
        <span ref={textRef} className="typing-text"></span>
        <span className="blink-cursor">_</span>
      </div>
    </div>
  );
};

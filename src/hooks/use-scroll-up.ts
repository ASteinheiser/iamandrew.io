import { useState, useEffect } from 'react';

export const useScrollUp = () => {
  const [_, setLastScroll] = useState(0);
  const [isScrollUp, setIsScrollUp] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setLastScroll((lastScroll) => {
        if (lastScroll > window.scrollY) {
          setIsScrollUp(true);
        } else {
          setIsScrollUp(false);
        }
        return window.scrollY;
      });
    };

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return { isScrollUp };
};

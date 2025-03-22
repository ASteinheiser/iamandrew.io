import { useState, useEffect } from 'react';

const useScrollUp = () => {
  const [_, setLastScroll] = useState(0);
  const [scrollUp, setScrollUp] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setLastScroll((currentScroll) => {
        if (currentScroll > window.scrollY) {
          setScrollUp(true);
        } else {
          setScrollUp(false);
        }
        return window.scrollY;
      });
    };

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return scrollUp;
};

export default useScrollUp;

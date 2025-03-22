import { useState, useEffect } from 'react';

const useScrollUp = () => {
  const [_, setLastScroll] = useState(0);
  const [isScrollUp, setIsScrollUp] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setLastScroll((currentScroll) => {
        if (currentScroll > window.scrollY) {
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

export default useScrollUp;

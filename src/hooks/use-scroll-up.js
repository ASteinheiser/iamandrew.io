import { useState, useEffect } from 'react';

const useScrollUp = () => {
  const [lastScroll, setLastScroll] = useState(0);
  const [scrollUp, setScrollUp] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  });

  function onScroll() {
    if(lastScroll > window.scrollY) {
      setScrollUp(true);
    } else {
      setScrollUp(false);
    }
    setLastScroll(window.scrollY);
  }

  return scrollUp;
}

export default useScrollUp;

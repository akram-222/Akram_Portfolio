import React, { useRef, useEffect, useState, useCallback } from 'react';

const Swipeable = ({ children, onSwipeLeft, onSwipeRight, onSwipeUp, onSwipeDown }) => {
  const ref = useRef(null);
  const [initialX, setInitialX] = useState(null);
  const [initialY, setInitialY] = useState(null);

  const moveTouch = useCallback((e) => {
    if (initialX === null || initialY === null) {
      return;
    }

    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;

    const diffX = initialX - currentX;
    const diffY = initialY - currentY;

    if (Math.abs(diffX) > Math.abs(diffY)) {
      // sliding horizontally
      if (diffX > 0) {
        // swiped left
        onSwipeLeft && onSwipeLeft();
      } else {
        // swiped right
        onSwipeRight && onSwipeRight();
      }
    } else {
      // sliding vertically
      if (diffY > 0) {
        // swiped up
        onSwipeUp && onSwipeUp();
      } else {
        // swiped down
        onSwipeDown && onSwipeDown();
      }
    }

    setInitialX(null);
    setInitialY(null);

    e.preventDefault();
  }, [initialX, initialY, onSwipeLeft, onSwipeRight, onSwipeUp, onSwipeDown]);

  useEffect(() => {
    const container = ref.current! as HTMLElement;

    container.addEventListener('touchstart', startTouch, false);
    container.addEventListener('touchmove', moveTouch, false);

    return () => {
      container.removeEventListener('touchstart', startTouch);
      container.removeEventListener('touchmove', moveTouch);
    };
  }, [ref, moveTouch]);

  function startTouch(e) {
    setInitialX(e.touches[0].clientX);
    setInitialY(e.touches[0].clientY);
  }

  return <div ref={ref}>{children}</div>;
};

export default Swipeable;
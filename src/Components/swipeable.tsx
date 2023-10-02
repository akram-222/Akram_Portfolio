import React, { useRef, useEffect, useState } from 'react';
const Swipeable = ({ children, onSwipeLeft, onSwipeRight, onSwipeUp, onSwipeDown }) => {
  const ref = useRef(null);
  const [initialX, setInitialX] = useState(null);
  const [initialY, setInitialY] = useState(null);

  useEffect(() => {
    const container = ref.current! as HTMLElement;

    container.addEventListener('touchstart', startTouch, { passive: true });
    container.addEventListener('touchmove', moveTouch, { passive: true });

    return () => {
      container.removeEventListener('touchstart', startTouch);
      container.removeEventListener('touchmove', moveTouch);
    };
  }, [ref]);

  function startTouch(e) {
    setInitialX(e.touches[0].clientX);
    setInitialY(e.touches[0].clientY);
  }

  function moveTouch(e) {
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
  }

  return <div ref={ref}>{children}</div>;
};

export default Swipeable;
import React, { useRef, useEffect } from 'react';

const Swipeable = ({ children, onSwipeLeft, onSwipeRight, onSwipeDown, onSwipeTop }) => {
  const ref = useRef(null);
  let startX = 0;
  let startY = 0;

  useEffect(() => {
    const container = ref.current! as unknown as HTMLElement;

    const handleTouchStart = (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      const endX = e.changedTouches[0].clientX;
      const endY = e.changedTouches[0].clientY;
      const diffX = startX - endX;
      const diffY = startY - endY;

      if (diffX > 150) {
        onSwipeLeft && onSwipeLeft(e);
      } else if (diffX < -150) {
        onSwipeRight && onSwipeRight(e);
      } else if (diffY > 150) {
        onSwipeTop && onSwipeTop(e);
      } else if (diffY < -150) { 
        onSwipeDown && onSwipeDown(e);
      }
    };

    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchend', handleTouchEnd);

    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, [onSwipeLeft, onSwipeRight, onSwipeDown, onSwipeTop]); // added onSwipeTop

  return <div ref={ref}>{children}</div>;
};

export default Swipeable;
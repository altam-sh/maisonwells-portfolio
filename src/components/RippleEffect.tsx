import React, { useState, useCallback } from 'react';

const RippleEffect: React.FC = () => {
  const [ripples, setRipples] = useState<{ top: number; left: number }[]>([]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    // TypeScript type casting to ensure `getBoundingClientRect` is recognized
    const target = e.target as HTMLElement;

    const circle = {
      top: e.clientY - target.getBoundingClientRect().top,
      left: e.clientX - target.getBoundingClientRect().left,
    };

    setRipples([circle]); // Only keep the latest ripple position
  }, []);

  const handleMouseEnter = (e: React.MouseEvent) => {
    // Start the ripple on hover
    handleMouseMove(e);
  };

  const handleAnimationEnd = () => {
    setRipples([]); // Clear ripple after animation ends
  };

  return (
    <div
      className="relative inline-block"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onAnimationEnd={handleAnimationEnd}
    >
      <div className="w-64 h-64 border-3 border-white rounded-full relative overflow-hidden">
        {ripples.map((ripple, index) => (
          <div
            key={index}
            className="absolute border-2 border-white opacity-40 rounded-full pointer-events-none"
            style={{
              top: ripple.top - 25, // Positioning ripple centered on mouse
              left: ripple.left - 25,
              width: 50, // Default ripple size
              height: 50, // Default ripple size
              animation: 'ripple-animation 0.6s ease-out forwards',
              backgroundColor: 'transparent', // Transparent fill for ripple
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default RippleEffect;

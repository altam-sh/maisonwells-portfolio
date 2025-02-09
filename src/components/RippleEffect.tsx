import React, { useState } from 'react';

const RippleEffect: React.FC = () => {
  const [ripples, setRipples] = useState<{ top: number; left: number }[]>([]);

  const handleMouseEnter = (e: React.MouseEvent) => {
    // TypeScript type casting to ensure `getBoundingClientRect` is recognized
    const target = e.target as HTMLElement;

    const circle = {
      top: e.clientY - target.getBoundingClientRect().top,
      left: e.clientX - target.getBoundingClientRect().left,
    };

    setRipples((prevRipples) => [...prevRipples, circle]);
  };

  const handleAnimationEnd = () => {
    setRipples([]);
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onAnimationEnd={handleAnimationEnd}
    >
      <div className="w-64 h-64 bg-blue-500 rounded-full relative overflow-hidden">
        {ripples.map((ripple, index) => (
          <div
            key={index}
            className="absolute bg-white rounded-full opacity-50 pointer-events-none"
            style={{
              top: ripple.top - 25,
              left: ripple.left - 25,
              width: 50,
              height: 50,
              animation: 'ripple-animation 0.6s ease-out forwards',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default RippleEffect;

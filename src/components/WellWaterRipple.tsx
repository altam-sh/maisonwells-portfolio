import React, { useState, useCallback, useRef } from 'react';

const RippleEffect: React.FC = () => {
  const [ripples, setRipples] = useState<{ top: number; left: number }[]>([]);
  const lastRippleTime = useRef(0); // Ref to store the last time a ripple was created
  const rippleDelay = 100; // Time in milliseconds between ripples (adjust this to control speed)

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const now = Date.now();
    
    // If the time since the last ripple creation is greater than the delay, create a new ripple
    if (now - lastRippleTime.current > rippleDelay) {
      const target = e.target as HTMLElement;
      const circle = {
        top: e.clientY - target.getBoundingClientRect().top,
        left: e.clientX - target.getBoundingClientRect().left,
      };

      setRipples((prevRipples) => [...prevRipples, circle]);
      lastRippleTime.current = now; // Update the last ripple time
    }
  }, []);

  const handleMouseEnter = (e: React.MouseEvent) => {
    // Trigger first ripple on hover
    handleMouseMove(e);
  };

  const handleAnimationEnd = (index: number) => {
    setRipples((prevRipples) => prevRipples.filter((_, i) => i !== index));
  };

  return (
    <div
      className="relative inline-block"
      onMouseMove={handleMouseMove} // Track the mouse movement for creating ripples
      onMouseEnter={handleMouseEnter} // Trigger a ripple when hovering over the area
    >
      <div className="w-64 h-64 border-3 border-white rounded-full relative overflow-hidden">
        {ripples.map((ripple, index) => (
          <div
            key={index}
            className="absolute border-2 border-white opacity-40 rounded-full pointer-events-none"
            style={{
              top: ripple.top - 25, // Position ripple centered on mouse
              left: ripple.left - 25,
              width: 50, // Default ripple size
              height: 50, // Default ripple size
              animation: 'ripple-animation 0.6s ease-out forwards',
              backgroundColor: 'transparent', // Transparent fill for ripple
            }}
            onAnimationEnd={() => handleAnimationEnd(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RippleEffect;

import { useEffect, useRef } from 'react';

const RippleEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Make canvas fullscreen
    const resizeCanvas = (): void => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Ripple effect logic
    interface Ripple {
      x: number;
      y: number;
      radius: number;
      opacity: number;
    }
    
    const ripples: Ripple[] = [];
    
    function createRipple(): void {
      if (!canvas) return;
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      ripples.push({ x, y, radius: 0, opacity: 0.5 });
    }
    
    function animateRipples(): void {
      if (!canvas) return;
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = ripples.length - 1; i >= 0; i--) {
        const ripple = ripples[i];
        
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 255, 255, ${ripple.opacity})`;
        ctx.lineWidth = 1;
        ctx.stroke();
        
        ripple.radius += 0.5;
        ripple.opacity -= 0.005;
        
        if (ripple.opacity <= 0) {
          ripples.splice(i, 1);
        }
      }
      
      animationRef.current = requestAnimationFrame(animateRipples);
    }
    
    // Start ripple creation and animation
    const rippleInterval = setInterval(createRipple, 1000);
    const animationRef = { current: 0 };
    animationRef.current = requestAnimationFrame(animateRipples);
    
    // Cleanup
    return () => {
      clearInterval(rippleInterval);
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-[-1] pointer-events-none"
    />
  );
};

export default RippleEffect;
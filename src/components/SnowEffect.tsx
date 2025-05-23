import { useEffect, useRef } from 'react';

const SnowEffect: React.FC = () => {
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
    
    // Snowflake effect logic
    interface Snowflakedrop {
      x: number;
      y: number;
      speed: number;
      length: number;
    }
    
    const Snowflakedrops: Snowflakedrop[] = [];
    
    function createSnowflakedrop(): Snowflakedrop {
      if (!canvas) return { x: 0, y: 0, speed: 0, length: 0 };
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * -1, // Start above screen
        speed: Math.random() * 5 + 5, // 5-10 speed
        length: Math.random() * 5 + 5 // 5-10 length
      };
    }
    
    function updateSnowflake(): void {
      if (!canvas) return;
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.lineWidth = 5;
      
      for (let drop of Snowflakedrops) {
        drop.y += drop.speed;
        
        // Draw Snowflake as a line
        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x, drop.y + drop.length);
        ctx.stroke();
        
        // Reset Snowflake when it reaches bottom
        if (drop.y > canvas.height) {
          drop.y = -10;
          drop.x = Math.random() * canvas.width;
        }
      }
      
      animationRef.current = requestAnimationFrame(updateSnowflake);
    }
    
    // Create initial Snowflakedrops
    for (let i = 0; i < 100; i++) {
      Snowflakedrops.push(createSnowflakedrop());
    }
    
    // Start animation
    const animationRef = { current: 0 };
    animationRef.current = requestAnimationFrame(updateSnowflake);
    
    // Cleanup
    return () => {
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

export default SnowEffect;
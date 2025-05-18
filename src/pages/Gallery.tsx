import { useState, useEffect } from 'react';
import RainEffect from '../components/RainEffect';
import type { PageProps } from '../App';

const Gallery: React.FC<PageProps> = ({ navigate }) => {
  const [fadeIn, setFadeIn] = useState<boolean>(false);
  
  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, 100);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-black text-white">
      <RainEffect />
      
      <div 
        className="text-4xl mb-8 transition-opacity duration-1000 font-serif"
        style={{ opacity: fadeIn ? 1 : 0 }}
      >
        [Gallery]
      </div>
      
      <div 
        className="flex flex-col gap-4 transition-opacity duration-1000 delay-300"
        style={{ opacity: fadeIn ? 1 : 0 }}
      >
        <button 
          className="px-6 py-3 border-2 border-white bg-transparent hover:text-gray-400 hover:-translate-y-1 transition-all duration-300 font-serif"
          onClick={() => navigate('mainmenu')}
        >
          Return Home
        </button>
        
        {/* Add more menu buttons as needed */}
      </div>
    </div>
  );
};

export default Gallery;
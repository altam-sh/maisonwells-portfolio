import { useState, useEffect } from 'react';
import type { PageProps } from '../App';

const MainMenu: React.FC<PageProps> = ({ navigate }) => {
  const [fadeIn, setFadeIn] = useState<boolean>(false);
  const [pictureScale, setPictureScale] = useState<number>(1.4);
  
  useEffect(() => {
    // Trigger fade-in animation when component mounts
    setTimeout(() => {
      setFadeIn(true);
    }, 100);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-transparent text-white" style={{ perspective: '1500px' }}>
      
      {/* <div 
        className="text-4xl mb-8 transition-opacity duration-1000 font-serif"
        style={{ opacity: fadeIn ? 1 : 0 }}
      >
        Main Menu
      </div> */}

        <div className="text-center">
          <div className="text-[3vw] mb-2 text-transparent font-serif">welcome home</div>
          <div className="text-[2vw] mb-4 text-transparent font-serif">welcome home</div>
        </div>

      <div className="flex items-center justify-center py-2 z-10">
        <img
          className="mb-1 w-[14vw] h-auto transition-all duration-1000"
          src="../public/images/wishingwell.png"
          alt="Wishing Well"
          style={{
            transform: `scale(${pictureScale})`,
            //opacity: textOpacity.picture,
            transition: 'transform 1s ease, opacity 0.2s ease-in-out'
          }}
        />
      </div>

        <div className="text-center">
          <div className="text-[2vw] mt-2 mb-4 text-transparent font-serif">welcome home</div>
          <div className="text-[1.5vw] mb-4 text-transparent font-serif">welcome home</div>
          <button className="text-[1.2vw] mt-6 px-4 py-2 font-serif text-transparent bg-transparent">welcome home</button>
        </div>
      
      <div 
        className="absolute center translate-y-[25vh] z-20 transition-opacity duration-1000 delay-100"
        style={{ opacity: fadeIn ? 1 : 0 }}
      >
        <button 
          className="text-[1.2vw] px-6 py-3 bg-transparent hover:text-purple-300 hover:-translate-y-1 transition-all duration-300 font-serif"
          onClick={() => {
            setPictureScale(1);
            setFadeIn(false);
            setTimeout(() => {
              navigate('home');
            }, 1000);
            
          }}
        >
          [welcome home]
        </button>
      </div>
      
    </div>
  );
};

export default MainMenu;
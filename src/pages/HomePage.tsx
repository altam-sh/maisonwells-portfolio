import { useState, useEffect } from 'react';
import RainEffect from '../components/RainEffect';
import RippleEffect from '../components/RippleEffect';
import type { PageProps } from '../App';

// Interface for text opacity states
interface TextOpacity {
  textAbove1: number;
  textAbove2: number;
  textBelow1: number;
  textBelow2: number;
  button: number;
  picture: number;
}

// Interface for coin animation states
interface CoinState {
  opacity: number;
  bottom: string;
  left: string;
  transform: string;
}

const HomePage: React.FC<PageProps> = ({ navigate }) => {
  const [textOpacity, setTextOpacity] = useState<TextOpacity>({
    textAbove1: 0,
    textAbove2: 0,
    textBelow1: 0,
    textBelow2: 0,
    button: 0,
    picture: 1,
  });
  
  const [coinState, setCoinState] = useState<CoinState>({
    opacity: 0,
    bottom: '-65px',
    left: '50%',
    transform: 'translateX(-50%) rotateX(0deg) scale(1)',
  });
  
  const [pictureScale, setPictureScale] = useState<number>(1);
  
  useEffect(() => {
    setTimeout(() => setTextOpacity(prev => ({ ...prev, textAbove1: 1 })), 200);
    setTimeout(() => setTextOpacity(prev => ({ ...prev, textAbove2: 1 })), 600);
    setTimeout(() => setTextOpacity(prev => ({ ...prev, textBelow1: 1 })), 1000);
    setTimeout(() => setTextOpacity(prev => ({ ...prev, textBelow2: 1 })), 1200);
    setTimeout(() => setTextOpacity(prev => ({ ...prev, button: 1 })), 1700);
  }, []);
  
  const handleTossClick = (): void => {
    // Fade out elements
    setTextOpacity(prev => ({
      ...prev,
      button: 0,
      textAbove1: 0,
      textAbove2: 0,
      textBelow1: 0,
      textBelow2: 0,
    }));
    
    // Reset and show coin
    setCoinState({
      opacity: 1,
      bottom: '-100px',
      left: '50%',
      transform: 'translateX(-50%) rotateX(0deg) scale(1)',
    });
    
    // Enlarge picture
    setPictureScale(1.4);
    
    // Animate coin rising
    setTimeout(() => {
      setCoinState(prev => ({
        ...prev,
        bottom: 'calc(50% + 50px)',
        transform: 'translateX(-50%) rotateX(1080deg) scale(0.4)',
      }));
    }, 0);
    
    // Coin falls and disappears
    setTimeout(() => {
      setCoinState(prev => ({
        ...prev,
        bottom: 'calc(50% - 95px)',
        transform: 'translateX(-50%) rotateX(1440deg) scale(0.2)',
        opacity: 0,
      }));
    }, 900);
    
    // Fade out picture
    // setTimeout(() => {
    //   setTextOpacity(prev => ({ ...prev, picture: 0 }));
    // }, 1500);
    
    // Navigate to main menu
    setTimeout(() => {
      navigate('mainmenu');
    }, 1700);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen py-8 px-4 bg-black overflow-hidden relative" style={{ perspective: '1500px' }}>
      <RippleEffect/>
      <RainEffect/>
      
      <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto space-y-4">
        <div className="text-center">
          <div 
            className="text-[3vw] mb-2 text-white transition-opacity duration-1000 font-serif"
            style={{ 
              opacity: textOpacity.textAbove1
            }}
          >
            Maison Wells
          </div>
          
          <div 
            className="text-[2vw] mb-4 text-white transition-opacity duration-1000 font-serif"
            style={{ 
              opacity: textOpacity.textAbove2
            }}
          >
            "A home for every version of me"
          </div>
        </div>
        
        <div className="flex items-center justify-center py-2">
          <img
            className="w-[14vw] h-auto transition-all duration-1000"
            src="../public/images/wishingwell.png"
            alt="Wishing Well"
            style={{
              transform: `scale(${pictureScale})`,
              opacity: textOpacity.picture,
              transition: 'transform 1s ease, opacity 0.2s ease-in-out'
            }}
          />
        </div>
        
        <div className="text-center">
          <div 
            className="text-[2vw] mt-2 mb-4 text-white transition-opacity duration-1000 font-serif" 
            style={{ 
              opacity: textOpacity.textBelow1
            }}
          >
            Presented by Altamash Sheikh
          </div>
          
          <div 
            className="text-[1.5vw] mb-4 text-white transition-opacity duration-1000 font-serif"
            style={{ 
              opacity: textOpacity.textBelow2
            }}
          >
            [Thank you for your interest]
          </div>
          
          <button 
            className="text-[1.2vw] mt-6 px-4 py-2 font-serif text-white bg-transparent hover:text-purple-300 hover:-translate-y-1 transition-all duration-300"
            style={{ 
              opacity: textOpacity.button,
              border: '2px solid white'
            }}
            onClick={handleTossClick}
          >
            Make a Wish
          </button>
        </div>
      </div>
      
      {/* Coin element */}
      <div 
        className="w-[3vw] h-[3vw] absolute rounded-full bg-white"
        style={{
          bottom: coinState.bottom,
          left: coinState.left,
          transform: coinState.transform,
          opacity: coinState.opacity,
          transition: 'bottom 1s ease, transform 1s ease, opacity 1s ease'
        }}
      />
    </div>
  );
};

export default HomePage;
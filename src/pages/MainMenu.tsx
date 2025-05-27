import { useState, useEffect, FC } from 'react';
import type { PageProps } from '../App';
import ArrowButton from "../components/ArrowButton";
import clsx from "clsx";
import '../styles/MainMenu.css';

type ArrowDirection = 'top' | 'bottom' | 'left' | 'right';

const MainMenu: FC<PageProps> = ({ navigate }) => {
  const [fadeIn, setFadeIn] = useState<boolean>(false);
  const [fadeOutArrows, setFadeOutArrows] = useState<boolean>(false);
  const [pictureScale, setPictureScale] = useState<number>(1.4);
  const [hoveredDirection, setHoveredDirection] = useState<ArrowDirection | null>(null);

  const directionLabels: Record<ArrowDirection, string> = {
    top: "[Hear Me Out]",
    bottom: "[Cœurs Endormis]",
    left: "[Enchanté]",
    right: '[The "Right" Path]',
  };

  const text = hoveredDirection ? directionLabels[hoveredDirection] : "";

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, 100);
  }, []);

  // Get the appropriate animation class based on the hovered direction
  const getTextAnimationClass = (): string => {
    if (!hoveredDirection) return "";
    
    const animationClasses: Record<ArrowDirection, string> = {
      top: "slide-from-top",
      bottom: "slide-from-bottom",
      left: "slide-from-left",
      right: "slide-from-right",
    };
    
    return animationClasses[hoveredDirection];
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-transparent text-white" style={{ perspective: '1500px' }}>
      <div className="text-center">
        <div className="text-[3vw] mb-2 text-transparent font-serif">welcome home</div>
        <div className="text-[2vw] mb-4 text-transparent font-serif">welcome home</div>
      </div>
      <div className="flex items-center justify-center py-2 z-10">
        <img
          className="mb-1 w-[14vw] h-auto transition-all duration-1000"
          src="../images/wishingwell.png"
          alt="Wishing Well"
          style={{
            transform: `scale(${pictureScale})`,
            transition: 'transform 1s ease, opacity 0.2s ease-in-out',
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
          className="text-base sm:text-lg md:text-[1.2vw] px-6 py-3 bg-transparent hover:text-purple-400 hover:-translate-y-1 transition-all duration-300 font-serif"
          onClick={() => {
            setPictureScale(1);
            setFadeIn(false);
            setFadeOutArrows(true);
            setTimeout(() => {
              navigate('home', 'none');
            }, 700);
          }}
        >
          [welcome home]
        </button>
      </div>
      <div className="absolute w-screen h-screen bg-transparent">
        <ArrowButton 
          direction="top" 
          svgPath="/images/arrow.svg" 
          fadeOut={fadeOutArrows} 
          onHoverChange={setHoveredDirection} 
          navigate={navigate} 
          pageName="interests" 
          onClickStart={() => setFadeOutArrows(true)} 
        />
        <ArrowButton 
          direction="bottom" 
          svgPath="/images/arrow.svg" 
          fadeOut={fadeOutArrows} 
          onHoverChange={setHoveredDirection} 
          navigate={navigate} 
          pageName="gallery" 
          onClickStart={() => setFadeOutArrows(true)} 
        />
        <ArrowButton 
          direction="left" 
          svgPath="/images/arrow.svg" 
          fadeOut={fadeOutArrows} 
          onHoverChange={setHoveredDirection} 
          navigate={navigate} 
          pageName="about" 
          onClickStart={() => setFadeOutArrows(true)}
        />
        <ArrowButton 
          direction="right" 
          svgPath="/images/arrow.svg" 
          fadeOut={fadeOutArrows} 
          onHoverChange={setHoveredDirection} 
          navigate={navigate} 
          pageName="projects" 
          onClickStart={() => setFadeOutArrows(true)}
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className={clsx(
            "text-purple-400 text-[5vw] font-semibold font-serif bg-black/50 z-10",
            hoveredDirection ? "opacity-100" : "opacity-0",
            getTextAnimationClass()
          )}
        >
          {text}
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
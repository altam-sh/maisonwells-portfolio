import { useState, useEffect, useRef } from 'react';

type PageProps = {
  navigate: (page: string, direction: string) => void;
};

const AboutMe: React.FC<PageProps> = ({ navigate }) => {
  const [fadeIn, setFadeIn] = useState<boolean>(false);
  const [textVisible, setTextVisible] = useState<boolean>(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, 100);
    
    setTimeout(() => {
      setTextVisible(true);
    }, 800);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-black text-white relative overflow-hidden"
    >
      {/* Animated geometric background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating geometric shapes */}
        <div 
          className="absolute w-2 h-2 bg-white opacity-20"
          style={{
            left: `${20 + mousePosition.x * 0.01}%`,
            top: `${15 + mousePosition.y * 0.008}%`,
            transform: `rotate(${mousePosition.x * 0.1}deg)`,
            transition: 'all 0.3s ease-out'
          }}
        />
        <div 
          className="absolute w-1 h-8 bg-white opacity-15"
          style={{
            right: `${25 + mousePosition.x * 0.005}%`,
            top: `${30 + mousePosition.y * 0.012}%`,
            transform: `rotate(${45 + mousePosition.y * 0.1}deg)`,
            transition: 'all 0.4s ease-out'
          }}
        />
        <div 
          className="absolute w-6 h-1 bg-white opacity-25"
          style={{
            left: `${70 + mousePosition.x * 0.008}%`,
            bottom: `${20 + mousePosition.y * 0.006}%`,
            transform: `rotate(${mousePosition.x * 0.05}deg)`,
            transition: 'all 0.35s ease-out'
          }}
        />
      </div>

      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Section - Photo */}
        <div className="lg:w-1/2 flex items-center justify-center p-8 relative">
          <div
            className="relative transition-all duration-1000 ease-out"
            style={{ 
              opacity: fadeIn ? 1 : 0,
              transform: `translateX(${fadeIn ? '0' : '-50px'})`
            }}
          >
            {/* Photo container with brutalist border treatment */}
            <div className="relative">
              <div className="absolute -inset-2 border-3 border-white transform rotate-1 opacity-50" />
              <div className="absolute -inset-1 border-2 border-purple-400 transform -rotate-1 opacity-80" />
              <img 
                src="/public/images/placeholder3.jpg" 
                alt="Profile"
                className="relative z-10 w-[15vw] h-[20vw] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              {/* Accent line that follows mouse */}
              <div 
                className="absolute w-full h-0.5 bg-white transition-all duration-300 ease-out"
                style={{
                  bottom: `${10 + mousePosition.y * 0.1}%`,
                  opacity: 0.6,
                  transform: `scaleX(${0.3 + mousePosition.x * 0.0015})`
                }}
              />
            </div>
          </div>
        </div>

        {/* Right Section - Content */}
        <div className="lg:w-1/2 flex flex-col justify-center p-8 lg:p-16 relative">
          {/* Main heading */}
          <div
            className="mb-12 transition-all duration-1000 ease-out delay-300"
            style={{ 
              opacity: fadeIn ? 1 : 0,
              transform: `translateY(${fadeIn ? '0' : '30px'})`
            }}
          >
            <h1 className="text-5xl lg:text-6xl font-serif mb-4 leading-tight">
              <span className="inline-block hover:italic transition-all duration-300 cursor-default">
                About
              </span>
              <br />
              <span className="inline-block hover:italic transition-all duration-300 cursor-default delay-100">
                Me
              </span>
            </h1>
            <div className="w-16 h-0.5 bg-white mt-4" />
          </div>

          {/* Content blocks */}
          <div className="space-y-8 mb-12">
            <div
              className="transition-all duration-1000 ease-out delay-500"
              style={{ 
                opacity: textVisible ? 1 : 0,
                transform: `translateY(${textVisible ? '0' : '20px'})`
              }}
            >
              <p className="text-lg font-serif leading-relaxed text-gray-200 max-w-3xl">
                Hi! my name is Altamash, or simply Alta for short, but I usually go by Wells. 
                I'm a software engineer with a passion for the arts and creating digital experiences 
                that blur the line between functionality and art. My work exists at the 
                intersection of clean code and creative expression.
              </p>
            </div>

            <div
              className="transition-all duration-1000 ease-out delay-700"
              style={{ 
                opacity: textVisible ? 1 : 0,
                transform: `translateY(${textVisible ? '0' : '20px'})`
              }}
            >
              <p className="text-lg font-serif leading-relaxed text-gray-200 max-w-3xl">
                When I'm not immersed in code, you'll find me exploring new technologies, 
                experimenting with design systems, or working on another one of my hobbies.
                So welcome to "Maison Wells", a home for all my projects, interests, and a glimpse into my heart.
                I hope you enjoy your stay and find something that resonates with you.
              </p>
            </div>

            <div
              className="transition-all duration-1000 ease-out delay-900"
              style={{ 
                opacity: textVisible ? 1 : 0,
                transform: `translateY(${textVisible ? '0' : '20px'})`
              }}
            >
              <div className="flex flex-wrap gap-4 mt-8">
                {['React', 'TypeScript', 'Node.js', 'Python', 'Design'].map((skill, index) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 border border-white border-opacity-40 text-sm font-serif hover:bg-white hover:text-black transition-all duration-300 cursor-default"
                    style={{
                      transitionDelay: `${1100 + index * 100}ms`
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div
            className="transition-all duration-1000 ease-out delay-1000"
            style={{ 
              opacity: textVisible ? 1 : 0,
              transform: `translateY(${textVisible ? '0' : '20px'})`
            }}
          >
            <button
              className="group relative px-8 py-4 border-2 border-white bg-transparent hover:bg-white hover:text-black transition-all duration-300 font-serif overflow-hidden"
              onClick={() => navigate('mainmenu', 'left')}
            >
              <span className="relative z-10">Return Home</span>
              <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </button>
          </div>

          {/* Subtle accent elements */}
          <div className="absolute top-8 right-8 w-px h-16 bg-white opacity-30" />
          <div className="absolute bottom-8 right-8 w-16 h-px bg-white opacity-30" />
        </div>
      </div>

      {/* Bottom accent line that responds to scroll/interaction */}
      <div 
        className="absolute bottom-0 left-0 h-px bg-white transition-all duration-500 ease-out"
        style={{
          width: `${30 + (mousePosition.x / window.innerWidth) * 40}%`,
          opacity: 0.4
        }}
      />
    </div>
  );
};

export default AboutMe;
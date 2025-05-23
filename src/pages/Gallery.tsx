import { useState, useEffect } from 'react';
import type { PageProps} from '../App';

const Gallery: React.FC<PageProps> = ({ navigate }) => {
  const [fadeIn, setFadeIn] = useState<boolean>(false);
  const [slideUp, setSlideUp] = useState<boolean>(false);

  // Sample gallery images
  const galleryImages = [
    {
      src: "/public/images/placeholder3.jpg",
      alt: "Abstract composition",
      description: "Exploring the intersection of chaos and order"
    },
    {
      src: "https://picsum.photos/500/400?random=2", 
      alt: "Minimalist design",
      description: "Less is more, silence speaks volumes"
    },
    {
      src: "https://picsum.photos/350/500?random=3",
      alt: "Urban landscape",
      description: "Concrete poetry in motion"
    },
    {
      src: "https://picsum.photos/450/650?random=4",
      alt: "Digital art piece",
      description: "Pixels dancing in perfect harmony"
    },
    {
      src: "https://picsum.photos/400/400?random=5",
      alt: "Experimental photography",
      description: "Capturing the unseen moments"
    },
    {
      src: "https://picsum.photos/500/700?random=6",
      alt: "Creative concept",
      description: "Where imagination meets reality"
    },
    {
      src: "https://picsum.photos/350/450?random=7",
      alt: "Visual narrative",
      description: "Stories told through light and shadow"
    },
    {
      src: "https://picsum.photos/400/550?random=8",
      alt: "Artistic expression",
      description: "Raw emotion crystallized in form"
    }
  ];

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, 200);
    setTimeout(() => {
      setSlideUp(true);
    }, 600);
  }, []);

  const CardioGraph = () => {
    return (
      <div className="absolute inset-0 overflow-hidden opacity-40 pointer-events-none">
        <svg 
          className="w-full h-32 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          viewBox="0 0 800 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,50 L150,50 L160,10 L170,90 L180,50 L200,50 L210,20 L220,80 L230,50 L400,50 L410,5 L420,95 L430,50 L600,50 L610,25 L620,75 L630,50 L800,50"
            stroke="#8b5cf6"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
          >
            <animate
              attributeName="stroke-dasharray"
              values="0,1000;1000,0;0,1000"
              dur="3s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>
    );
  };

  const ZzzSeparator = () => {
    return (
      <div className="flex justify-center items-center my-16  relative">
        <div className="text-6xl font-serif text-gray-400 tracking-wider">
          <span className="inline-block animate-bounce" style={{ animationDelay: '0s' }}>𝓏</span>
          <span className="inline-block animate-bounce text-5xl" style={{ animationDelay: '0.3s' }}>𝓏</span>
          <span className="inline-block animate-bounce text-4xl" style={{ animationDelay: '0.6s' }}>𝓏</span>
        </div>
        <div className="absolute w-49 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
      </div>
    );
  };

  const PhotoGallery = () => {
    return (
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4 px-4 max-w-7xl mx-auto">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="break-inside-avoid relative group cursor-pointer overflow-hidden"
            style={{
              opacity: slideUp ? 1 : 0,
              transform: slideUp ? 'translateY(0)' : 'translateY(50px)',
              transition: `all 0.6s ease ${index * 0.1}s`
            }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-center px-4 font-serif italic text-sm leading-relaxed">
                {image.description}
              </p>
            </div>
            
            {/* Purple border on hover */}
            <div className="absolute inset-0 border-4 border-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="h-screen bg-black text-white overflow-x-hidden">
      {/* text and cardiograph */}
      <div className="relative min-h-160 flex flex-col justify-center items-center px-8">
        <CardioGraph />
        
        <div
          className="relative z-10 text-center max-w-4xl mx-auto"
          style={{
            opacity: fadeIn ? 1 : 0,
            transform: fadeIn ? 'translateY(0)' : 'translateY(50px)',
            transition: 'all 1s ease-out'
          }}
        >
          <h1 className="text-5xl md:text-5xl font-serif mb-8 tracking-tight leading-tight">
            a lot more to come...
          </h1>
          <p className="text-xl md:text-2xl font-serif italic text-gray-300 leading-relaxed">
            Every moment holds infinite possibilities, every corner turned reveals new wonders. 
            We are perpetual students of serendipity, collectors of the unexpected, 
            architects of dreams we haven't yet dared to imagine.
          </p>
        </div>

        {/* Floating elements */}
        {/* <div className="absolute top-20 left-10 w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-white rounded-full animate-ping"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 border border-gray-500 rotate-45 animate-bounce"></div> */}
      </div>

      {/* ZZZ Separator */}
      <ZzzSeparator />

      {/* Gallery Section */}
      <div className="pb-20">
        <div
          className="text-center mb-12 mt-25"
          style={{
            opacity: slideUp ? 1 : 0,
            transform: slideUp ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease-out'
          }}
        >
          <h2 className="text-4xl font-serif mb-4">[Gallery]</h2>
          <div className="w-24 h-px bg-purple-500 mx-auto"></div>
        </div>
        
        <PhotoGallery />
      </div>

      {/* Navigation */}
      <div className="fixed bottom-8 left-8">
        <button
          className="group relative px-8 py-4 border-2 border-white bg-transparent hover:bg-white hover:text-black transition-all duration-300 font-serif overflow-hidden"
          onClick={() => navigate('mainmenu', 'down')}
        >
          <span className="relative z-10">Return Home</span>
          <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </button>
      </div>

      {/* Subtle grid overlay */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      ></div>
    </div>
  );
};

export default Gallery;
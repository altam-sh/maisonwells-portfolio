import { useState, useEffect, useRef } from 'react';
import type { PageProps} from '../App';
import { X } from 'lucide-react';

const Gallery: React.FC<PageProps> = ({ navigate }) => {
  const [fadeIn, setFadeIn] = useState<boolean>(false);
  const [slideUp, setSlideUp] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedDescription, setSelectedDescription] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

    const openModal = (image: string, description: string) => {
    setSelectedImage(image);
    setSelectedDescription(description);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => {
      setSelectedImage(null);
    }, 300);
  };

  const galleryImages = [
    {
      src: "/images/gallery/mockup.png",
      alt: "",
      description: "mockup of a hoodie sample I designed"
    },
    {
      src: "/images/gallery/amazongames.JPG",
      alt: "",
      description: "Amazon Games representative playtesting our game at McGameJam 2025"
    },
    {
      src: "/images/gallery/debugging.jpg",
      alt: "",
      description: "Debugging Competition at CSGames 2024"
    },
    {
      src: "/images/gallery/pencilsketch.PNG",
      alt: "",
      description: "guided prompt pencil sketch"
    },
    {
      src: "/images/gallery/gala.JPG",
      alt: "",
      description: "CS Games Gala 2025"
    },
    {
      src: "/images/gallery/yourheart.png",
      alt: "",
      description: 'Skit I directed called "Your Heart"'
    },
    {
      src: "/images/gallery/diwalisetup.png",
      alt: "",
      description: "Diwali decorations and backdrop design"
    },
    {
      src: "/images/gallery/mbam.jpg",
      alt: "",
      description: "Original music performance a Musée des Beaux-Arts de Montréal"
    },
    {
      src: "/images/gallery/moodboard.png",
      alt: "",
      description: 'Moodboard for a game I designed called "Liminal Echo"'
    },
        {
      src: "/images/gallery/calmbeforethestorm.png",
      alt: "",
      description: 'Skit I directed called "The Calm Before the Storm"'
    },
    {
      src: "/images/gallery/diwali.jpg",
      alt: "",
      description: "Turnout of Diwali event hosted and sponsored by my brother and I"
    },
    {
      src: "/images/gallery/pencilsketch2.PNG",
      alt: "",
      description: "Guided prompt pencil sketch"
    },
    {
      src: "/images/gallery/csgames24.png",
      alt: "",
      description: "CSGames 2024 team photo"
    },    
    {
      src: "/images/gallery/storm.png",
      alt: "",
      description: 'Mini-movie I directed called "Storm"'
    },
    {
      src: "/images/gallery/puzzlehero.png",
      alt: "",
      description: "Our Puzzle Hero winning team photo at CSGames 2025"
    },
    {
      src: "/images/gallery/csgames25.png",
      alt: "",
      description: "CSGames 2025 team photo"
    },
    {
      src: "/images/gallery/clothing.png",
      alt: "",
      description: "Coat I designed and made for an event"
    },
    {
      src: "/images/gallery/fallingstars.jpg",
      alt: "",
      description: '"Falling stars" single promotional poster"'
    },
    {
      src: "/images/gallery/musicman.jpg",
      alt: "",
      description: 'Musical Theatre performance of "The Music Man"'
    },
    {
      src: "/images/gallery/mcgamejamgame.JPG",
      alt: "",
      description: "McGameJam 2025 game we made in 48 hours"
    },
    {
      src: "/images/gallery/jazzband.jpg",
      alt: "",
      description: "Our Jazz Band performance at Rio Tinto theatre in the Montreal International Jazz Festival"
    },
    {
      src: "/images/gallery/diwalisleep.png",
      alt: "",
      description: "Diwali event setup at the venue"
    },
    {
      src: "/images/gallery/conuhacks9.jpg",
      alt: "",
      description: "ConUHacks IX team photo"
    },
    {
      src: "/images/gallery/mcgamejam.jpg",
      alt: "",
      description: "McGameJam 2025 Team Photo"
    },
    {
      src: "/images/gallery/posterpresentation.jpg",
      alt: "",
      description: "Capstone project poster presentation at Concordia University"
    },
    {
      src: "/images/gallery/",
      alt: "",
      description: ""
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

  // const CardioGraph = () => {
  //   return (
  //     <div className="absolute inset-0 overflow-hidden opacity-40 pointer-events-none">
  //       <svg 
  //         className="w-full h-32 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
  //         viewBox="0 0 800 100"
  //         preserveAspectRatio="none"
  //       >
  //         <path
  //           d="M0,50 L150,50 L160,10 L170,90 L180,50 L200,50 L210,20 L220,80 L230,50 L400,50 L410,5 L420,95 L430,50 L600,50 L610,25 L620,75 L630,50 L800,50"
  //           stroke="#8b5cf6"
  //           strokeWidth="2"
  //           fill="none"
  //           className="animate-pulse"
  //         >
  //           <animate
  //             attributeName="stroke-dasharray"
  //             values="0,1000;1000,0;0,1000"
  //             dur="3s"
  //             repeatCount="indefinite"
  //           />
  //         </path>
  //       </svg>
  //     </div>
  //   );
  // };


  const CardioGraph = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="w-full h-32 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
        >
          <path
            d="
              M0,50 
              L50,50 
              L60,40 
              L70,50 
              L80,10 
              L90,100 
              L100,50 
              L140,50 
              L150,30 
              L160,50 
              L200,50 

              L250,50 
              L260,40 
              L270,50 
              L280,10 
              L290,100 
              L300,50 
              L340,50 
              L350,30 
              L360,50 
              L400,50 

              L450,50 
              L460,40 
              L470,50 
              L480,10 
              L490,100 
              L500,50 
              L540,50 
              L550,30 
              L560,50 
              L600,50 

              L650,50 
              L660,40 
              L670,50 
              L680,10 
              L690,100 
              L700,50 
              L740,50 
              L750,30 
              L760,50 
              L800,50 

              L850,50 
              L860,40 
              L870,50 
              L880,10 
              L890,100 
              L900,50 
              L940,50 
              L950,30 
              L960,50 
              L1000,50 

              L1050,50 
              L1060,40 
              L1070,50 
              L1080,10 
              L1090,100 
              L1100,50 
              L1140,50 
              L1150,30 
              L1160,50 
              L1200,50
            "
            stroke="#8b5cf6"
            strokeWidth="2"
            fill="none"
            style={{
              strokeDasharray: 2400,
              strokeDashoffset: 2400,
              animation: "draw 4s linear infinite, pulseOpacity 2s ease-in-out infinite",
            }}
          />
        </svg>
        <style>
          {`
            @keyframes draw {
              to {
                stroke-dashoffset: 0;
              }
            }

            @keyframes pulseOpacity {
              0%, 100% {
                opacity: 0.3;
              }
              50% {
                opacity: 0.5;
              }
            }
          `}
        </style>
      </div>
    );
  };

  const ZzzSeparator = () => {
    return (
      <div className="flex justify-center items-center my-2 pb-29 relative">
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
            onClick={() => openModal(image.src, image.description)}
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
            <div className="absolute inset-0 border border-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
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
            A lot more to come...
          </h1>
          <p className="text-xl md:text-2xl font-serif italic text-gray-300 leading-relaxed">
            Thank you for your interest. 
          </p>
        </div>

        
        <div className='absolute text-center mt-90'>
            <button 
              className="text-base md:text-lg font-serif mt-12 text-gray-300 leading-relaxed hover:text-[#8b5cf6]/60 hover:-translate-y-1 transition-all duration-300"
              onClick={() => {
              containerRef.current?.scrollIntoView({ behavior: 'smooth' });
            }}>
            [Scroll to view gallery]
          </button>
        </div>

        {/* Floating elements */}
        {/* <div className="absolute top-20 left-10 w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-white rounded-full animate-ping"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 border border-gray-500 rotate-45 animate-bounce"></div> */}
      </div>

      {/* ZZZ Separator */}
      <ZzzSeparator />

      {/* Navigation */}
      <div className="w-full flex justify-center py-8">
        <button
          className="group relative px-8 py-4 border-2 border-white bg-transparent hover:bg-white hover:text-black transition-all duration-300 font-serif overflow-hidden"
          onClick={() => navigate('mainmenu', 'down')}
        >
          <span className="relative z-10">Return Home</span>
          <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </button>
      </div>

      {/* Gallery Section */}
      <div className="pb-20" ref={containerRef}>
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

      {/* Picture Modal */}
      {selectedImage !== null && (
        <div 
          className={`fixed inset-0 bg-black/60 bg-opacity-70 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${modalOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={closeModal}
        >
          <div 
            className="overflow-y-auto bg-black bg-opacity-90 border border-white p-8 relative"
            style={{ width: 'calc(100% * 2/3 + 2rem)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="sticky top-2 float-right text-white hover:text-purple-400 z-10"
              onClick={closeModal}
            >
              <X size={24} />
            </button>

              <div className="modal-content space-y-8 ">
                <div>
                  <h2 className="text-2xl md:text-3xl mb-2 font-serif italic text-center">{selectedDescription}</h2>
                </div>

                <div className="relative mx-auto w-full aspect-video overflow-hidden">
                  <img 
                    src={selectedImage} 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
          </div>
        </div>
      )}

      {/* Subtle grid overlay */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-5 z-0"
        style={{
          backgroundImage: `linear-gradient(rgb(255,255,255) 1px, transparent 1px),
                           linear-gradient(90deg, rgb(255,255,255) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      ></div>
      
    </div>
  );
};

export default Gallery;
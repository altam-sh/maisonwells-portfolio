import { useState, useEffect, useRef } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Home } from 'lucide-react';
import type { PageProps} from '../App';
import SnowEffect from '../components/SnowEffect';

interface Track {
  id: number;
  title: string;
  artist: string;
  hobby: string;
  description: string;
  duration: string;
  durationSeconds: number;
  image: string;
  audioUrl?: string;
  color: string;
  details: string[];
}

const PersonalInterests: React.FC<PageProps> = ({ navigate }) => {
  const [fadeIn, setFadeIn] = useState<boolean>(false);
  const [currentTrack, setCurrentTrack] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.7);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const tracks: Track[] = [
    {
      id: 1,
      title: "Synthesis & Soul",
      artist: "Creative Process",
      hobby: "Music Production & Composition",
      description: "Crafting sonic landscapes through digital orchestration",
      duration: "2:49",
      durationSeconds: 169,
      image: "/public/images/placeholder3.jpg",
      color: "#b794f4",
      details: [
        "Digital Audio Workstation mastery",
        "Sound design & synthesis",
        "Mixing & mastering techniques",
        "Genre-fluid composition"
      ]
    },
    {
      id: 2,
      title: "Strings & Keys",
      artist: "Physical Expression",
      hobby: "Instrument Playing",
      description: "Translating emotion through tactile musicality",
      duration: "5:00",
      durationSeconds: 300,
      image: "/api/placeholder/400/400",
      color: "#f9e5c1",
      details: [
        "Multi-instrumental proficiency",
        "Classical & contemporary techniques",
        "Live performance experience",
        "Improvisation & interpretation"
      ]
    },
    {
      id: 3,
      title: "Fabric Futures",
      artist: "Wearable Art",
      hobby: "Clothing Design",
      description: "Engineering identity through textile innovation",
      duration: "3:42",
      durationSeconds: 222, 
      image: "/api/placeholder/400/400",
      color: "#4B006E",
      details: [
        "Pattern making & construction",
        "Sustainable design principles",
        "Fashion-forward aesthetics",
        "Custom tailoring techniques"
      ]
    },
    {
      id: 4,
      title: "Pixel Perfect",
      artist: "Visual Narratives",
      hobby: "Drawing & Digital Art",
      description: "Bridging analog intuition with digital precision",
      duration: "3:04",
      durationSeconds: 184, 
      image: "/api/placeholder/400/400",
      color: "#D58A94 ",
      details: [
        "Traditional drawing fundamentals",
        "Digital illustration mastery",
        "Character & concept design",
        "Mixed media experimentation"
      ]
    },
    {
      id: 5,
      title: "Moving Pictures",
      artist: "Cinematic Vision",
      hobby: "Filmmaking",
      description: "Capturing stories through the language of light",
      duration: "5:33",
      durationSeconds: 333,
      image: "/api/placeholder/400/400",
      color: "#6a4c93",
      details: [
        "Cinematography & composition",
        "Post-production workflows",
        "Narrative storytelling",
        "Experimental techniques"
      ]
    }
  ];

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, 100);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying && !isMuted) {
        setCurrentTime((prevTime) => {
          const newTime = prevTime + 1;
          if (newTime >= tracks[currentTrack].durationSeconds) {
            return 0;
          }
          return newTime;
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying, isMuted, currentTrack]);

  useEffect(() => {
    setCurrentTime(0);
  }, [currentTrack]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handlePrevious = () => {
    setCurrentTrack((prev) => (prev - 1 + tracks.length) % tracks.length);
    setCurrentTime(0);
  };

  const handleNext = () => {
    setCurrentTrack((prev) => (prev + 1) % tracks.length);
    setCurrentTime(0);
  };

  const handleMute = () => {
    setIsMuted(!isMuted);
  };

  const currentTrackData = tracks[currentTrack];

  const progressPercentage = (currentTime / currentTrackData.durationSeconds) * 100;

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-y-auto">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <SnowEffect />
      </div>
      
      {/* Container with proper padding and max width */}
      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        
        {/* Header - Responsive text sizes */}
        <div
          className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl mb-2 sm:mb-3 lg:mb-4 transition-opacity duration-1000 font-serif text-center"
          style={{ opacity: fadeIn ? 1 : 0 }}
        >
          [Personal Interests]
        </div>
        <div
          className="text-sm sm:text-base lg:text-lg xl:text-xl mb-6 sm:mb-8 lg:mb-12 transition-opacity duration-1000 font-serif italic text-center"
          style={{ opacity: fadeIn ? 1 : 0 }}
        >
          discover my passions through this playlist
        </div>

        {/* Main Player Interface */}
        <div
          className="w-full transition-all duration-1000 delay-300"
          style={{ 
            opacity: fadeIn ? 1 : 0,
            transform: `translateY(${fadeIn ? 0 : 20}px)`
          }}
        >
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 xl:gap-12">
            
            {/* Left Column - Player Controls - Responsive sizing */}
            <div className="w-full lg:w-80 xl:w-96 lg:flex-shrink-0">
              
              {/* Album Art & Info */}
              <div className="relative mb-4 sm:mb-6">
                <div 
                  className="w-full max-w-sm mx-auto lg:max-w-none aspect-square overflow-hidden shadow-2xl border-2 sm:border-4 transition-all duration-500"
                  style={{ borderColor: currentTrackData.color }}
                >
                  <img
                    src={currentTrackData.image}
                    alt={currentTrackData.hobby}
                    className="w-full h-full object-cover"
                    style={{
                      filter: isPlaying ? 'brightness(1.1) saturate(1.2)' : 'brightness(0.8)',
                      transition: 'filter 0.3s ease'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                </div>
              </div>
                                        
              {/* Track Info Overlay - Responsive text */}
              <div className="flex flex-col items-center mt-3 sm:mt-4 mb-3 sm:mb-4 text-center text-white drop-shadow">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-serif font-bold mb-1 text-white drop-shadow-lg">
                  {currentTrackData.title}
                </h2>
                <p className="text-xs sm:text-sm opacity-90 mb-1 drop-shadow">
                  {currentTrackData.artist}
                </p>
                <p className="text-xs opacity-75 drop-shadow">
                  {currentTrackData.hobby}
                </p>
              </div>

              {/* Progress Bar */}
              <div className="mb-4 sm:mb-6">
                <div className="flex justify-between text-xs mb-2 font-mono">
                  <span>{formatTime(currentTime)}</span>
                  <span>{currentTrackData.duration}</span>
                </div>
                <div className="w-full h-1 bg-white/15 rounded-full overflow-hidden">
                  <div
                    className="h-full transition-all duration-100 rounded-full"
                    style={{
                      width: `${progressPercentage}%`,
                      backgroundColor: currentTrackData.color,
                      boxShadow: `0 0 10px ${currentTrackData.color}40`
                    }}
                  ></div>
                </div>
              </div>

              {/* Controls - Responsive button sizes */}
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <button
                  onClick={handlePrevious}
                  className="p-2 sm:p-3 hover:bg-white/20 rounded-full transition-colors duration-200"
                >
                  <SkipBack size={20} className="sm:w-6 sm:h-6" />
                </button>
                
                <button
                  onClick={handlePlayPause}
                  className="p-3 sm:p-4 rounded-full transition-all duration-200 border-2"
                  style={{
                    backgroundColor: isPlaying ? currentTrackData.color : 'transparent',
                    borderColor: currentTrackData.color,
                    boxShadow: isPlaying ? `0 0 20px ${currentTrackData.color}40` : 'none'
                  }}
                >
                  {isPlaying ? <Pause size={24} className="sm:w-7 sm:h-7" /> : <Play size={24} className="sm:w-7 sm:h-7" />}
                </button>
                
                <button
                  onClick={handleNext}
                  className="p-2 sm:p-3 hover:bg-white/20 rounded-full transition-colors duration-200"
                >
                  <SkipForward size={20} className="sm:w-6 sm:h-6" />
                </button>
              </div>

              {/* Volume Control */}
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <button
                  onClick={handleMute}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors duration-200"
                >
                  {isMuted ? <VolumeX size={18} className="sm:w-5 sm:h-5" /> : <Volume2 size={18} className="sm:w-5 sm:h-5" />}
                </button>
                <div className="flex-1 h-1 bg-white/15 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-200"
                    style={{
                      width: isMuted ? '0%' : `${volume * 100}%`,
                      backgroundColor: currentTrackData.color
                    }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Right Column - Info & Track List - Responsive spacing */}
            <div className="flex-1 min-h-0">
              
              {/* Track Description - Responsive padding and text */}
              <div className="mb-4 sm:mb-6 p-4 sm:p-6 rounded-md bg-white/10 border-l-4" style={{ borderColor: currentTrackData.color }}>
                <h3 className="text-lg sm:text-xl font-serif font-bold mb-2 sm:mb-3" style={{ color: currentTrackData.color }}>
                  {currentTrackData.hobby}
                </h3>
                <p className="text-sm sm:text-base mb-3 sm:mb-4 italic font-serif leading-relaxed">{currentTrackData.description}</p>
                <div className="space-y-1.5 sm:space-y-2">
                  {currentTrackData.details.map((detail, index) => (
                    <div key={index} className="text-xs sm:text-sm opacity-85 flex items-center gap-2 sm:gap-3">
                      <div 
                        className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: currentTrackData.color }}
                      ></div>
                      {detail}
                    </div>
                  ))}
                </div>
              </div>

              {/* Track List Preview - Responsive sizing */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-base sm:text-lg font-serif mb-3 sm:mb-4 opacity-75">Creative Portfolio:</h3>
                <div className="space-y-1.5 sm:space-y-2">
                  {tracks.map((track, index) => (
                    <button
                      key={track.id}
                      onClick={() => {setCurrentTrack(index); setCurrentTime(0);}}
                      className={`w-full p-2.5 sm:p-3 rounded text-left transition-all duration-200 flex items-center gap-3 sm:gap-4 ${
                        index === currentTrack 
                          ? 'bg-white/20 border-l-4' 
                          : 'hover:bg-white/10 opacity-60 hover:opacity-100'
                      }`}
                      style={{
                        borderColor: index === currentTrack ? currentTrackData.color : 'transparent'
                      }}
                    >
                      <div className="text-xs sm:text-sm font-mono w-6 sm:w-8">{String(index + 1).padStart(2, '0')}</div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm sm:text-base font-serif truncate">{track.title}</div>
                        <div className="text-xs sm:text-sm opacity-75 truncate">{track.hobby}</div>
                      </div>
                      <div className="text-xs sm:text-sm font-mono opacity-50 flex-shrink-0">{track.duration}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Navigation - Responsive button */}
              <button
                className="group relative px-6 sm:px-8 py-3 sm:py-4 border-2 border-white bg-transparent hover:bg-white hover:text-black transition-all duration-300 font-serif overflow-hidden text-sm sm:text-base"
                onClick={() => navigate('mainmenu', 'up')}
              >
                <span className="relative z-10">Return Home</span>
                <div className="absolute inset-0 bg-white transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInterests;
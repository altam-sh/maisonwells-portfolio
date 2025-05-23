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
    <div className="min-h-screen bg-black text-white p-4 py-8">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <SnowEffect />
      </div>
      {/* Header */}
      <div
        className="text-3xl mb-12 transition-opacity duration-1000 font-serif text-center"
        style={{ opacity: fadeIn ? 1 : 0 }}
      >
        [Personal Interests]
      </div>

      {/* Main Player Interface */}
      <div
        className="w-full max-w-6xl mx-auto transition-all duration-1000 delay-300"
        style={{ 
          opacity: fadeIn ? 1 : 0,
          transform: `translateY(${fadeIn ? 0 : 20}px)`
        }}
      >
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Column - Player Controls */}
          <div className="w-full lg:w-96 lg:flex-shrink-0">
            {/* Album Art & Info */}
            <div className="relative mb-6">
              <div 
                className="w-full aspect-square overflow-hidden shadow-2xl border-4 transition-all duration-500"
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
                                  
            {/* Track Info Overlay */}
            <div className="flex flex-col items-center mt-4 mb-4 text-center text-white drop-shadow">
              <h2 className="text-2xl font-serif font-bold mb-1 text-white drop-shadow-lg">
                {currentTrackData.title}
              </h2>
              <p className="text-sm opacity-90 mb-1 drop-shadow">
                {currentTrackData.artist}
              </p>
              <p className="text-xs opacity-75 drop-shadow">
                {currentTrackData.hobby}
              </p>
            </div>

            {/* Progress Bar */}
            <div className="mb-6">
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

            {/* Controls */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={handlePrevious}
                className="p-3 hover:bg-white/20 rounded-full transition-colors duration-200"
              >
                <SkipBack size={24} />
              </button>
              
              <button
                onClick={handlePlayPause}
                className="p-4 rounded-full transition-all duration-200 border-2"
                style={{
                  backgroundColor: isPlaying ? currentTrackData.color : 'transparent',
                  borderColor: currentTrackData.color,
                  boxShadow: isPlaying ? `0 0 20px ${currentTrackData.color}40` : 'none'
                }}
              >
                {isPlaying ? <Pause size={28} /> : <Play size={28} />}
              </button>
              
              <button
                onClick={handleNext}
                className="p-3 hover:bg-white/20 rounded-full transition-colors duration-200"
              >
                <SkipForward size={24} />
              </button>
            </div>

            {/* Volume Control */}
            <div className="flex items-center gap-3 mb-6">
              <button
                onClick={handleMute}
                className="p-2 hover:bg-white/20 rounded-full transition-colors duration-200"
              >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
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

          {/* Right Column - Info & Track List */}
          <div className="flex-1 lg:min-h-96">
            {/* Track Description */}
            <div className="mb-6 p-6 rounded-md bg-white/10 border-l-4" style={{ borderColor: currentTrackData.color }}>
              <h3 className="text-xl font-serif font-bold mb-3" style={{ color: currentTrackData.color }}>
                {currentTrackData.hobby}
              </h3>
              <p className="text-base mb-4 italic font-serif leading-relaxed">{currentTrackData.description}</p>
              <div className="space-y-2">
                {currentTrackData.details.map((detail, index) => (
                  <div key={index} className="text-sm opacity-85 flex items-center gap-3">
                    <div 
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: currentTrackData.color }}
                    ></div>
                    {detail}
                  </div>
                ))}
              </div>
            </div>

            {/* Track List Preview */}
            <div className="mb-8">
              <h3 className="text-lg font-serif mb-4 opacity-75">Creative Portfolio:</h3>
              <div className="space-y-2">
                {tracks.map((track, index) => (
                  <button
                    key={track.id}
                    onClick={() => {setCurrentTrack(index); setCurrentTime(0);}}
                    className={`w-full p-3 rounded text-left transition-all duration-200 flex items-center gap-4 ${
                      index === currentTrack 
                        ? 'bg-white/20 border-l-4' 
                        : 'hover:bg-white/10 opacity-60 hover:opacity-100'
                    }`}
                    style={{
                      borderColor: index === currentTrack ? currentTrackData.color : 'transparent'
                    }}
                  >
                    <div className="text-sm font-mono w-8">{String(index + 1).padStart(2, '0')}</div>
                    <div className="flex-1">
                      <div className="text-base font-serif">{track.title}</div>
                      <div className="text-sm opacity-75">{track.hobby}</div>
                    </div>
                    <div className="text-sm font-mono opacity-50">{track.duration}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <button
              className="group relative px-8 py-4 border-2 border-white bg-transparent hover:bg-white hover:text-black transition-all duration-300 font-serif overflow-hidden"
              onClick={() => navigate('mainmenu', 'up')}
            >
              <span className="relative z-10">Return Home</span>
              <div className="absolute inset-0 bg-white transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInterests;
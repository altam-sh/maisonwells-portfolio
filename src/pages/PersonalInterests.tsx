import { useState, useEffect, useRef } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Home } from 'lucide-react';

type PageProps = {
  navigate: (page: string, direction: string) => void;
};

interface Track {
  id: number;
  title: string;
  artist: string;
  hobby: string;
  description: string;
  duration: string;
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
  const [progress, setProgress] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const tracks: Track[] = [
    {
      id: 1,
      title: "Synthesis & Soul",
      artist: "Creative Process",
      hobby: "Music Production & Composition",
      description: "Crafting sonic landscapes through digital orchestration",
      duration: "∞",
      image: "/api/placeholder/400/400",
      color: "#ff6b6b",
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
      duration: "∞",
      image: "/api/placeholder/400/400",
      color: "#4ecdc4",
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
      duration: "∞",
      image: "/api/placeholder/400/400",
      color: "#45b7d1",
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
      duration: "∞",
      image: "/api/placeholder/400/400",
      color: "#f7b801",
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
      duration: "∞",
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
        setProgress((prev) => (prev + 1) % 100);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [isPlaying, isMuted]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handlePrevious = () => {
    setCurrentTrack((prev) => (prev - 1 + tracks.length) % tracks.length);
    setProgress(0);
  };

  const handleNext = () => {
    setCurrentTrack((prev) => (prev + 1) % tracks.length);
    setProgress(0);
  };

  const handleMute = () => {
    setIsMuted(!isMuted);
  };

  const currentTrackData = tracks[currentTrack];

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-black text-white p-4">
      {/* Header */}
      <div
        className="text-3xl mb-8 transition-opacity duration-1000 font-serif text-center"
        style={{ opacity: fadeIn ? 1 : 0 }}
      >
        [Personal Interests Player]
      </div>

      {/* Main Player Interface */}
      <div
        className="w-full max-w-md transition-all duration-1000 delay-300"
        style={{ 
          opacity: fadeIn ? 1 : 0,
          transform: `translateY(${fadeIn ? 0 : 20}px)`
        }}
      >
        {/* Album Art & Info */}
        <div className="relative mb-6">
          <div 
            className="w-full aspect-square rounded-lg overflow-hidden shadow-2xl border-4 transition-all duration-500"
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
          
          {/* Track Info Overlay */}
          <div className="absolute bottom-4 left-4 right-4">
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
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between text-xs mb-2 font-mono">
            <span>{Math.floor(progress / 4)}:{'0'.repeat(2 - Math.floor((progress % 4) * 15).toString().length)}{Math.floor((progress % 4) * 15)}</span>
            <span>{currentTrackData.duration}</span>
          </div>
          <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full transition-all duration-100 rounded-full"
              style={{
                width: `${progress}%`,
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
            className="p-3 hover:bg-gray-800 rounded-full transition-colors duration-200"
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
            className="p-3 hover:bg-gray-800 rounded-full transition-colors duration-200"
          >
            <SkipForward size={24} />
          </button>
        </div>

        {/* Volume Control */}
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={handleMute}
            className="p-2 hover:bg-gray-800 rounded-full transition-colors duration-200"
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
          <div className="flex-1 h-1 bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-200"
              style={{
                width: isMuted ? '0%' : `${volume * 100}%`,
                backgroundColor: currentTrackData.color
              }}
            ></div>
          </div>
        </div>

        {/* Track Description */}
        <div className="mb-6 p-4 rounded-lg bg-gray-900 border-l-4" style={{ borderColor: currentTrackData.color }}>
          <p className="text-sm mb-3 italic font-serif">{currentTrackData.description}</p>
          <div className="space-y-1">
            {currentTrackData.details.map((detail, index) => (
              <div key={index} className="text-xs opacity-75 flex items-center gap-2">
                <div 
                  className="w-1 h-1 rounded-full"
                  style={{ backgroundColor: currentTrackData.color }}
                ></div>
                {detail}
              </div>
            ))}
          </div>
        </div>

        {/* Track List Preview */}
        <div className="mb-8">
          <h3 className="text-sm font-serif mb-3 opacity-75">Up Next:</h3>
          <div className="space-y-2">
            {tracks.map((track, index) => (
              <button
                key={track.id}
                onClick={() => {setCurrentTrack(index); setProgress(0);}}
                className={`w-full p-2 rounded text-left transition-all duration-200 flex items-center gap-3 ${
                  index === currentTrack 
                    ? 'bg-gray-800 border-l-2' 
                    : 'hover:bg-gray-900 opacity-60 hover:opacity-100'
                }`}
                style={{
                  borderColor: index === currentTrack ? currentTrackData.color : 'transparent'
                }}
              >
                <div className="text-xs font-mono w-6">{String(index + 1).padStart(2, '0')}</div>
                <div className="flex-1">
                  <div className="text-sm font-serif">{track.title}</div>
                  <div className="text-xs opacity-75">{track.hobby}</div>
                </div>
                <div className="text-xs font-mono opacity-50">{track.duration}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <button
          className="w-full px-6 py-3 border-2 border-white bg-transparent hover:text-gray-400 hover:-translate-y-1 transition-all duration-300 font-serif flex items-center justify-center gap-2"
          onClick={() => navigate('mainmenu', 'up')}
        >
          <Home size={20} />
          Return Home
        </button>
      </div>
    </div>
  );
};

export default PersonalInterests;
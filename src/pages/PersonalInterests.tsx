import { useState, useEffect, useRef } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from 'lucide-react';
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
      title: "Regarding Love",
      artist: "Creative Process",
      hobby: "Music Production & Composition",
      description: "**All tracks playing are excerpts of original compositions written and produced by me",
      duration: "0:37",
      durationSeconds: 37,
      image: "/public/images/production.jpg",
      audioUrl: "/audio/regarding_love.MP3",
      color: "#b794f4",
      details: [
        "Digital Audio Workstation (DAW) mastery",
        "Mixing & mastering techniques",
        "Multi-Genre composition",
        "Sound design & performance"
      ]
    },
    {
      id: 2,
      title: "I Know (prod. dercept)",
      artist: "Physical Expression",
      hobby: "Instrument Playing",
      description: "Classical & Jazz Trombonist, Vocalist, Guitar, Ukulele and Piano enthusiast",
      duration: "0:38",
      durationSeconds: 38,
      image: "/public/images/performance.jpg",
      audioUrl: "/audio/dercept.mp3",
      color: "#D58A94",
      details: [
        "Multi-instrumental proficiency",
        "Classical & Jazz Trombonist, won gold at several competitions",
        "Live performance and experience playing gigs",
        "Improvisation & interpretation"
      ]
    },
    {
      id: 3,
      title: "Falling Stars",
      artist: "Wearable Art",
      hobby: "Clothing Design",
      description: "Experimenting with clothing design and construction",
      duration: "1:25",
      durationSeconds: 85, 
      image: "/public/images/clothing.png",
      audioUrl: "/audio/falling_stars.wav",
      color: "#4B006E",
      details: [
        "Screen printing & textile experience alongside manufacturers",
        "Printing custom sample pieces",
        "Digital mockup and garment design",
        "Basic sewing knowledge"
      ]
    },
    {
      id: 4,
      title: "Periwinkle",
      artist: "Visual Narratives",
      hobby: "Drawing & Digital Art",
      description: "Art exploration across mediums and styles",
      duration: "0:54",
      durationSeconds: 54, 
      image: "/public/images/jaggo.png",
      audioUrl: "/audio/periwinkle_demo.mp3",
      color: "#CCCCFF",
      details: [
        "Traditional and Digital illustration experience",
        "2D, 3D and vector knowledge",
        "Animation and sprite creation skills",
        "Mixed media experimentation"
      ]
    },
    {
      id: 5,
      title: "How Things Add Up",
      artist: "Cinematic Vision",
      hobby: "Video Production",
      description: "Capturing stories through the language of light",
      duration: "0:55",
      durationSeconds: 55,
      image: "/public/images/filmmaking.png",
      audioUrl: "/audio/how_things_add_up.wav",
      color: "#6a4c93",
      details: [
        "Post-production workflows",
        "Video editing and color grading experience",
        "Camera operation",
        "Skit and cinematography compositions",
      ]
    }
  ];

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, 100);
  }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (isPlaying && !isMuted) {
  //       setCurrentTime((prevTime) => {
  //         const newTime = prevTime + 1;
  //         if (newTime >= tracks[currentTrack].durationSeconds) {
  //           return 0;
  //         }
  //         return newTime;
  //       });
  //     }
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, [isPlaying, isMuted, currentTrack]);

  // useEffect(() => {
  //   setCurrentTime(0);
  // }, [currentTrack]);

  useEffect(() => {
  if (audioRef.current) {
    audioRef.current.volume = isMuted ? 0 : volume;
  }
}, [volume, isMuted]);

  useEffect(() => {
  if (audioRef.current) {
    const audio = audioRef.current;
    
    audio.src = tracks[currentTrack].audioUrl || '';
    audio.volume = isMuted ? 0 : volume;
  
    const updateTime = () => {
      setCurrentTime(Math.floor(audio.currentTime));
    };
    
    const handleEnded = () => {
      handleNext();
    };
 
    const handleCanPlay = () => {
      if (isPlaying) {
        audio.play().catch(console.error);
      }
    };
    
    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('canplay', handleCanPlay);
    
    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('canplay', handleCanPlay);
    };
  }
}, [currentTrack]);

  const handlePlayPause = () => {
      if (audioRef.current) {
        if (isPlaying) {
          audioRef.current.pause();
        } else {
          audioRef.current.play().catch(console.error);
        }
      }
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

  const handleVolumeBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const barWidth = rect.width;
    const newVolume = Math.max(0, Math.min(1, clickX / barWidth));
    
    setVolume(newVolume);
    
    if (isMuted) {
      setIsMuted(false);
    }
  };

  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const barWidth = rect.width;
      const clickTime = (clickX / barWidth) * tracks[currentTrack].durationSeconds;
      
      audioRef.current.currentTime = clickTime;
      setCurrentTime(Math.floor(clickTime));
    }
  };

  const currentTrackData = tracks[currentTrack];

  const progressPercentage = (currentTime / currentTrackData.durationSeconds) * 100;

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="w-full h-screen bg-black text-white overflow-y-auto overflow-x-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <SnowEffect />
      </div>
      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 min-h-full">
        
        {/* Header */}
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
            
            {/* Left Column - Player Controls */}
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
                                        
              {/* Track Info Overlay */}
              <div className="flex flex-col items-center mt-3 sm:mt-4 mb-3 sm:mb-4 text-center text-white drop-shadow">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-serif font-bold mb-1 text-white drop-shadow-lg">
                  {currentTrackData.title}
                </h2>
                <p className="text-xs sm:text-sm opacity-90 mb-1 drop-shadow">
                  {currentTrackData.hobby}
                </p>
                {/* <p className="text-xs opacity-75 drop-shadow">
                  {currentTrackData.artist}
                </p> */}
              </div>

              {/* Progress Bar */}
              <div className="mb-4 sm:mb-6">
                <div className="flex justify-between text-xs mb-2 font-mono">
                  <span>{formatTime(currentTime)}</span>
                  <span>{currentTrackData.duration}</span>
                </div>
                  <div className="w-full h-1 bg-white/15 rounded-full overflow-hidden cursor-pointer" onClick={handleProgressBarClick}>
                    <div
                      className="h-full transition-all duration-100 rounded-full pointer-events-none"
                      style={{
                        width: `${progressPercentage}%`,
                        backgroundColor: currentTrackData.color,
                        boxShadow: `0 0 10px ${currentTrackData.color}40`
                      }}
                    ></div>
                  </div>

                  <audio
                    ref={audioRef}
                    preload="metadata"
                    className="hidden"
                  />
              </div>

              {/* Controls */}
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
                <div 
                  className="flex-1 h-1 bg-white/15 rounded-full overflow-hidden cursor-pointer"
                  onClick={handleVolumeBarClick}
                >
                  <div
                    className="h-full rounded-full transition-all duration-200 pointer-events-none"
                    style={{
                      width: isMuted ? '0%' : `${volume * 100}%`,
                      backgroundColor: currentTrackData.color
                    }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Right Column - Info & Track List */}
            <div className="flex-1 min-h-0">
              
              {/* Track Description*/}
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

              {/* Track List Preview */}
              <div className="mb-2 sm:mb-8">
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

            </div>
          </div>
        </div>
        <div className="flex justify-center mt-6 sm:mt-8 lg:mt-6">
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
  );
};

export default PersonalInterests;
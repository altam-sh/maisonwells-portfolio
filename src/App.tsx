import { useState } from 'react';
import HomePage from './pages/HomePage';
import MainMenu from './pages/MainMenu';
import AboutMe from './pages/AboutMe';
import Projects from './pages/ProfessionalProfile';
import Interests from './pages/PersonalInterests';
import Gallery from './pages/Gallery';
import RippleEffect from './components/RippleEffect';
import RainEffect from './components/RainEffect';
import './styles/PageTransitions.css';

type Page = 'home' | 'mainmenu' | 'about' | 'projects' | 'interests' | 'gallery';
type TransitionDirection = 'left' | 'right' | 'up' | 'down' | 'none';

interface PageProps {
  navigate: (page: Page, direction: TransitionDirection) => void;
}

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [previousPage, setPreviousPage] = useState<Page | null>(null);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [transitionDirection, setTransitionDirection] = useState<TransitionDirection>('none');
  const [transitionStage, setTransitionStage] = useState<'exit' | 'enter' | 'none'>('none');

  const navigate = (page: Page, direction: TransitionDirection = 'none') => {
    if (isTransitioning || page === currentPage) return;
    
    setIsTransitioning(true);
    setTransitionDirection(direction);
    setTransitionStage('exit');

    setTimeout(() => {
      setPreviousPage(currentPage);
      setCurrentPage(page);
      setTransitionStage('enter');

      setTimeout(() => {
        setIsTransitioning(false);
        setTransitionStage('none');
        setPreviousPage(null);
      }, 1000);
    }, 500); 
  };

  const getTransitionClass = () => {
    if (transitionStage === 'none') return '';
    
    // For exit animations
    if (transitionStage === 'exit') {
      switch (transitionDirection) {
        case 'left': return 'slide-exit-left';
        case 'right': return 'slide-exit-right';
        case 'up': return 'slide-exit-up';
        case 'down': return 'slide-exit-down';
        case 'none': return 'none';
        default: return 'fade-exit';
      }
    }
    
    if (transitionStage === 'enter') {
      switch (transitionDirection) {
        case 'left': return 'slide-enter-right';
        case 'right': return 'slide-enter-left';
        case 'up': return 'slide-enter-down';
        case 'down': return 'slide-enter-up';
        case 'none': return 'none';
        default: return 'fade-enter';
      }
    }
    
    return '';
  };

  const shouldShowBgEffects = (page: Page) => {
    return page === 'home' || page === 'mainmenu';
  };

  return (
    <div className="App relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background effects */}
      {(shouldShowBgEffects(currentPage) || (previousPage && shouldShowBgEffects(previousPage))) && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <RippleEffect />
          <RainEffect />
        </div>
      )}
      
      {/* Current page */}
      <div className={`relative z-10 w-full h-screen ${getTransitionClass()}`}>
        {currentPage === 'home' && <HomePage navigate={navigate} />}
        {currentPage === 'mainmenu' && <MainMenu navigate={navigate} />}
        {currentPage === 'about' && <AboutMe navigate={navigate} />}
        {currentPage === 'projects' && <Projects navigate={navigate} />}
        {currentPage === 'interests' && <Interests navigate={navigate} />}
        {currentPage === 'gallery' && <Gallery navigate={navigate} />}
      </div>
    </div>
  );
}

export default App;
export type { Page, PageProps, TransitionDirection };
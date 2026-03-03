import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
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

const PAGE_ROUTES: Record<Page, string> = {
  home: '/',
  mainmenu: '/menu',
  about: '/about',
  projects: '/projects',
  interests: '/interests',
  gallery: '/gallery',
};

const ROUTE_PAGES: Record<string, Page> = Object.fromEntries(
  Object.entries(PAGE_ROUTES).map(([page, route]) => [route, page as Page])
);

const shouldShowBgEffects = (page: Page) => page === 'home' || page === 'mainmenu';

function AppInner() {
  const reactNavigate = useNavigate();
  const location = useLocation();

  const currentPage: Page = ROUTE_PAGES[location.pathname] ?? 'home';

  const [previousPage, setPreviousPage] = useState<Page | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionDirection, setTransitionDirection] = useState<TransitionDirection>('none');
  const [transitionStage, setTransitionStage] = useState<'exit' | 'enter' | 'none'>('none');

  const navigate = (page: Page, direction: TransitionDirection = 'none') => {
    if (isTransitioning || page === currentPage) return;

    setIsTransitioning(true);
    setTransitionDirection(direction);
    setTransitionStage('exit');

    setTimeout(() => {
      setPreviousPage(currentPage);
      reactNavigate(PAGE_ROUTES[page]);
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

  return (
    <div className="App relative min-h-screen bg-black text-white overflow-hidden">
      {(shouldShowBgEffects(currentPage) || (previousPage && shouldShowBgEffects(previousPage))) && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <RippleEffect />
          <RainEffect />
        </div>
      )}

      <div className={`relative z-10 w-full h-screen ${getTransitionClass()}`}>
        <Routes>
          <Route path="/" element={<HomePage navigate={navigate} />} />
          <Route path="/menu" element={<MainMenu navigate={navigate} />} />
          <Route path="/about" element={<AboutMe navigate={navigate} />} />
          <Route path="/projects" element={<Projects navigate={navigate} />} />
          <Route path="/interests" element={<Interests navigate={navigate} />} />
          <Route path="/gallery" element={<Gallery navigate={navigate} />} />
          <Route path="*" element={<HomePage navigate={navigate} />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppInner />
    </BrowserRouter>
  );
}

export default App;
export type { Page, PageProps, TransitionDirection };
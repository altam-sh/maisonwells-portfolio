import { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import MainMenu from './pages/MainMenu';
import AboutMe from './pages/AboutMe';
import Projects from './pages/ProfessionalProfile';
import Interests from './pages/PersonalInterests';
import Gallery from './pages/Gallery';
import RippleEffect from './components/RippleEffect';
import RainEffect from './components/RainEffect';

type Page = 'home' | 'mainmenu' | 'about' | 'projects'|  'interests' | 'gallery';

interface PageProps {
  navigate: (page: Page) => void;
}

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigate = (page: Page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App relative min-h-screen bg-black text-white overflow-hidden">
      {(currentPage === 'home' || currentPage === 'mainmenu') && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <RippleEffect />
          <RainEffect />
        </div>
      )}

      <div className="relative z-10">
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
export type { Page, PageProps };
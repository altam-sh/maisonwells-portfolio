// import React from "react";
// import WishingWell from "./components/WishingWell";
// import RippleEffect from "./components/WellWaterRipple";
// import './index.css'

// const App: React.FC = () => {
//     return (
//         <div className="flex items-center justify-center min-h-screen bg-black">
//             <WishingWell />
//             <RippleEffect />
//         </div>
//     );
// };

// export default App;

import { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import MainMenu from './pages/MainMenu';
import AboutMe from './pages/AboutMe';
import RippleEffect from './components/RippleEffect';
import RainEffect from './components/RainEffect';

type Page = 'home' | 'mainmenu' | 'about';

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
      </div>
    </div>
  );
}

export default App;
export type { Page, PageProps };
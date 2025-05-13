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

type Page = 'home' | 'mainmenu';

interface PageProps {
  navigate: (page: Page) => void;
}

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigate = (page: Page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      {currentPage === 'home' && <HomePage navigate={navigate} />}
      {currentPage === 'mainmenu' && <MainMenu navigate={navigate} />}
    </div>
  );
}

export default App;
export type { Page, PageProps };
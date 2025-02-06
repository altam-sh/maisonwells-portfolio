import React from "react";
import WishingWell from "./components/WishingWell";
import './index.css'

const App: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-black">
            <WishingWell />
        </div>
    );
};

export default App;

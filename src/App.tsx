import React from "react";
import WishingWell from "./components/WishingWell";
import WaterRipple from "./components/WaterRipple";
import RippleEffect from "./components/RippleEffect";
import './index.css'

const App: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-black">
            <WishingWell />
            <RippleEffect />
        </div>
        
        
    );
};

export default App;

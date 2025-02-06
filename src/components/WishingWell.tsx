import { useState, useEffect } from "react";

const WishingWell = () => {
    const [showText1, setShowText1] = useState(false);
    const [showText2, setShowText2] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const [coinActive, setCoinActive] = useState(false);

    useEffect(() => {
        setTimeout(() => setShowText1(true), 300);
        setTimeout(() => setShowText2(true), 900);
        setTimeout(() => setShowButton(true), 1500);
    }, []);

    const handleToss = () => {
        console.log("Toss button clicked!");
        setShowButton(false);
        setShowText1(false);
        setShowText2(false);
        setCoinActive(true);
        
        setTimeout(() => {
            window.location.href = "/new-page"; // Adjust the URL as needed
        },1600);
    };

    return (
        //<div className="w-2/3 h-222 border-3 border-white flex flex-col">
            <div className="flex flex-col items-center justify-center text-white h-screen">
                <div className={`text-6xl mb-10 transition-opacity duration-1000 ${showText1 ? "opacity-100" : "opacity-0"} font-serif`}>
                    Maison Wells
                </div>
                <img className="w-72 md:w-96 lg:w-[400px] transition-transform duration-1000" 
                    src="/images/wishingwell.png" alt="[Wishing Well Picture]" />
                <div className={`text-2xl mt-8 transition-opacity duration-1000 ${showText2 ? "opacity-100" : "opacity-0"} font-serif`}>
                    [Thank you for your interest]
                </div>
                <div className={`w-16 h-16 bg-white rounded-full fixed bottom-4 left-1/2 transform -translate-x-1/2 transition-all duration-1000 flex justify-center items-center ${coinActive ? "animate-coin-toss" : "opacity-0"}`}>
                    {/* <div className="rounded-full w-3/4 h-3/4 bg-purple-300"></div> */}
                </div>
                
                <button 
                    className={`mt-8 px-6 py-2 text-xl border-2 border-white transition-all duration-1000 hover:text-purple-300 hover:-translate-y-1 hover:duration-[300ms] ${showButton ? "opacity-100" : "opacity-0"} font-serif`}
                    onClick={handleToss}
                >
                    Make a Wish
                </button>
                
            </div>
        //</div>
    );
};

export default WishingWell;

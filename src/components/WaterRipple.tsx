import { useEffect, useRef } from "react";
import $ from "jquery";  // Import jQuery
import "ripples";        // Import ripples plugin

const WaterRipple: React.FC = () => {
  const rippleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Log jQuery and ripples to confirm they're loaded
    console.log("jQuery:", window.jQuery);
    console.log("Ripples Plugin:", window.jQuery?.ripples);

    // Function to load jQuery and Ripples
    const loadScriptsSequentially = async () => {
      try {
        // Dynamically load jQuery script
        await new Promise<void>((resolve, reject) => {
          const script = document.createElement("script");
          script.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";
          script.onload = () => resolve();  // Correct the type mismatch here
          script.onerror = () => reject(new Error("Failed to load jQuery"));
          document.body.appendChild(script);
        });
        console.log("jQuery loaded");

        // Dynamically load Ripples plugin after jQuery is loaded
        await new Promise<void>((resolve, reject) => {
          const ripplesScript = document.createElement("script");
          ripplesScript.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery.ripples/0.5.3/jquery.ripples.min.js";
          ripplesScript.onload = () => resolve();  // Correct the type mismatch here
          ripplesScript.onerror = () => reject(new Error("Failed to load Ripples plugin"));
          document.body.appendChild(ripplesScript);
        });
        console.log("Ripples plugin loaded");

        // After scripts are loaded, initialize Ripples
        initializeRipples();
      } catch (error) {
        console.error("Error loading scripts:", error);
      }
    };

    const initializeRipples = () => {
      // Log checks to confirm that both jQuery and Ripples are loaded
      console.log("window.jQuery available:", window.jQuery);
      console.log("window.jQuery.ripples available:", window.jQuery?.ripples);

      if (rippleRef.current && window.jQuery && window.jQuery.ripples as any) {
        const $element = $(rippleRef.current);
        // Check if ripples function is available
        if (typeof $element.ripples === "function") {
          console.log("Ripples plugin found, initializing...");
          $element.ripples({
            resolution: 512,
            dropRadius: 20,
            perturbance: 0.04,
          });
        } else {
          console.error("Ripples plugin is not loaded correctly.");
        }
      }
    };

    // Load scripts sequentially
    loadScriptsSequentially();

    return () => {
      if (rippleRef.current && window.jQuery as any) {
        const $element = $(rippleRef.current);
        if (typeof $element.ripples === "function") {
          $element.ripples("destroy");
        }
      }
    };
  }, []);

  return (
    <div
      ref={rippleRef}
      className="w-full h-screen flex items-center justify-center bg-blue-500 relative overflow-hidden"
    >
      <h1 className="text-white text-4xl font-bold">Water Ripple Effect</h1>
    </div>

  );
};

export default WaterRipple;

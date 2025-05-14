import React, { useEffect, useState } from "react";
import clsx from "clsx";

type ArrowDirection = "top" | "bottom" | "left" | "right";

interface ArrowButtonProps {
  direction: ArrowDirection;
  svgPath: string;
  fadeOut?: boolean;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ direction, svgPath, fadeOut }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (fadeOut) {
      setVisible(false);
    }
  }, [fadeOut]);

  const positionClasses = {
    top: "top-0 left-1/2 -translate-x-1/2",
    bottom: "bottom-0 left-1/2 -translate-x-1/2",
    left: "left-0 top-1/2 -translate-y-1/2",
    right: "right-0 top-1/2 -translate-y-1/2",
  }[direction];

  const rotation = {
    top: "rotate-90",
    bottom: "-rotate-90",
    left: "",
    right: "rotate-180",
  }[direction];

  const hoverMove = {
    top: "hover:translate-y-2",
    bottom: "hover:-translate-y-2",
    left: "hover:translate-x-2",
    right: "hover:-translate-x-2",
  }[direction];

  const padding = {
    top: "mt-[3vw]",
    bottom: "mb-[3vw]",
    left: "ml-[3vw]",
    right: "mr-[3vw]",
  }[direction];

  return (
    <img
      src={svgPath}
      alt={`${direction} arrow`}
      className={clsx(
        "absolute w-[4vw] h-auto",
        "transition-transform duration-300 ease-in-out",
        "hover:opacity-60",
        positionClasses,
        rotation,
        hoverMove,
        padding,
        visible ? "opacity-100" : "opacity-0"
      )}
      style={{
        transition: "transform 0.3s ease, opacity 0.6s ease",
      }}
    />
  );
};

export default ArrowButton;

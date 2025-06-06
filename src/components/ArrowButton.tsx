import { useEffect, useState, FC } from "react";
import clsx from "clsx";
import type { Page, TransitionDirection } from "../App";

type ArrowDirection = "top" | "bottom" | "left" | "right";

interface ArrowButtonProps {
  direction: ArrowDirection;
  svgPath: string;
  onHoverChange?: (direction: ArrowDirection | null) => void;
  fadeOut?: boolean;
  navigate?: (page: Page, direction: TransitionDirection) => void;
  pageName?: Page;
  onClickStart?: () => void;
}

const ArrowButton: FC<ArrowButtonProps> = ({
  direction,
  svgPath,
  onHoverChange,
  fadeOut = false,
  navigate,
  pageName,
  onClickStart,
}) => {
  const [visible, setVisible] = useState<boolean>(false);
  
  const getTransitionDirection = (arrowDir: ArrowDirection): TransitionDirection => {
    switch (arrowDir) {
      case "top": return "down";
      case "bottom": return "up";
      case "left": return "right";
      case "right": return "left";
      default: return "none";
    }
  };

  const handleClick = () => {
    onClickStart?.();
    if (navigate && pageName) {
      const transitionDir = getTransitionDirection(direction);
      navigate(pageName, transitionDir);
    }
  };

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

  const hoverAnimation = {
    top: "hover:-translate-y-2",
    bottom: "hover:translate-y-2",
    left: "hover:-translate-x-2",
    right: "hover:translate-x-2",
  }[direction];

  const padding = {
    top: "mt-[3vw]",
    bottom: "mb-20 sm:mb-[3vw]", 
    left: "ml-[3vw]",
    right: "mr-[3vw]",
  }[direction];

  return (
    <div
      className={clsx(
        "absolute transition-opacity duration-500 cursor-pointer",
        positionClasses,
        padding,
        visible && !fadeOut ? "opacity-100" : "opacity-0"
      )}
      onMouseEnter={() => onHoverChange?.(direction)}
      onMouseLeave={() => onHoverChange?.(null)}
      onClick={handleClick}
    >
      <img
        src={svgPath}
        alt={`${direction} arrow`}
        className={clsx(
          "w-12 h-auto sm:w-16 md:w-[4vw]",
          "transition-transform duration-300 ease-in-out",
          "transition-opacity duration-300",
          "hover:opacity-70",
          rotation,
          hoverAnimation
        )}
      />
    </div>
  );
};

export default ArrowButton;
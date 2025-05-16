import { useEffect, useState, FC } from "react";
import clsx from "clsx";

type ArrowDirection = "top" | "bottom" | "left" | "right";

interface ArrowButtonProps {
  direction: ArrowDirection;
  svgPath: string;
  onHoverChange?: (direction: ArrowDirection | null) => void;
  fadeOut?: boolean;
}

const ArrowButton: FC<ArrowButtonProps> = ({
  direction,
  svgPath,
  onHoverChange,
  fadeOut = false,
}) => {
  const [visible, setVisible] = useState<boolean>(false);

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
    bottom: "mb-[3vw]",
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
    >
      <img
        src={svgPath}
        alt={`${direction} arrow`}
        className={clsx(
          "w-[4vw] h-auto transition-transform duration-300 ease-in-out",
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
import { useState, RefObject, useEffect } from "react";

type HoverAnimationOptions = {
  x?: number;
  y?: number;
  z?: number;
};

export const useHoverAnimation = (ref: RefObject<HTMLElement>, { x = 0, y = 0, z = 0 }: HoverAnimationOptions) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (event: MouseEvent): void => {
    const current = ref.current;
    if (!current) return;

    const { offsetWidth: width, offsetHeight: height } = ref.current;
    const { clientX, clientY } = event;

    const x = (clientX - width / 2) / width;
    const y = (clientY - height / 2) / height;

    setCoords({ x, y });
  };

  const handleMouseEnter = (): void => {
    setIsHovering(true);
  };

  useEffect(() => {
    const current = ref.current;
    if (!current) return;

    current.addEventListener("mousemove", handleMouseMove);
    current.addEventListener("mouseenter", handleMouseEnter);

    return (): void => {
      current.removeEventListener("mousemove", handleMouseMove);
      current.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [ref]);

  const { x: xCoord, y: yCoord } = coords;

  const xTransform = isHovering ? xCoord * x : 0;
  const yTransform = isHovering ? yCoord * y : 0;
  const zTransform = isHovering ? z : 0;

  const transform = `perspective(1000px) rotateX(${yTransform}deg) rotateY(${-xTransform}deg) translateZ(${zTransform}px)`;
  const transition = isHovering ? "none" : "all 0.9s ease";

  return { transform, transition };
};

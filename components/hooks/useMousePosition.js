import { useState, useEffect } from "react";

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mousePositionHandler = (ev) => {
      setMousePosition({ ...mousePosition, x: ev.clientX, y: ev.clientY });
    };

    window.addEventListener("mousemove", mousePositionHandler);

    return () => {
      window.removeEventListener("mousemove", mousePositionHandler);
    };
  }, []);

  return mousePosition;
};

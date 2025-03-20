import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      className="fixed z-100 w-6 h-6 rounded-full pointer-events-none transition-transform ease-out "
      style={{
        left: `${position.x - 12}px`,
        top: `${position.y - 12}px`,
      }}
    >
      <div className="absolute  w-full h-full rounded-full border-red-300 border-2 border-goldenrod animate-ping" />
    </div>
  );
};

export default CustomCursor;

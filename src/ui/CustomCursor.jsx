import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Function to track the mouse movement
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Event listener to update the cursor position
    window.addEventListener("mousemove", moveCursor);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  useEffect(() => {
    // Remove the default cursor (this will remove the arrow cursor)
    document.body.style.cursor = "none";

    // Cleanup to restore the cursor when the component unmounts
    return () => {
      document.body.style.cursor = "default";
    };
  }, []);

  return (
    <div
      className="fixed z-100 w-6 h-6 rounded-full pointer-events-none transition-transform ease-out"
      style={{
        left: `${position.x - 12}px`, // Center the cursor on the mouse
        top: `${position.y - 12}px`,
      }}
    >
      <div className="absolute w-full h-full rounded-full border-secondary border-2 border-goldenrod pointer-events-none cursor-none" />
    </div>
  );
};

export default CustomCursor;

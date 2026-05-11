import { useState } from "react";

const GoofyButton = ({
  msg,
  className,
}: {
  msg: string;
  className?: string;
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);

  const moveButton = () => {
    // Calculate random coordinates within the screen bounds
    // We subtract some padding (150px) so it doesn't go off-edge
    const randomX = Math.random() * (window.innerWidth - 150);
    const randomY = Math.random() * (window.innerHeight - 150);

    // Briefly "vanish" the button for extra goofiness
    setIsVisible(false);

    setTimeout(() => {
      setPosition({ x: randomX, y: randomY });
      setIsVisible(true);
    }, 50); // 50ms "teleportation" delay
  };

  return (
    <button
      className={`
        fixed text-black text-xl bg-red-200 p-5 px-20 rounded-xl transition-all duration-75 ease-in-out ${className}
        ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"}
        ${position.x === 0 ? "relative" : "fixed"}
      `}
      style={{
        left: position.x !== 0 ? `${position.x}px` : "auto",
        top: position.y !== 0 ? `${position.y}px` : "auto",
        zIndex: 999,
      }}
      onMouseEnter={moveButton}
    >
      {msg}
    </button>
  );
};

export default GoofyButton;

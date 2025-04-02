import React, { useEffect, useState } from "react";

interface BubbleProps {
  text: string;
  onComplete: () => void;
}

const Bubble: React.FC<BubbleProps> = ({ text, onComplete }) => {
  const [left, setLeft] = useState<number | null>(null);

  useEffect(() => {
    const min = 200;
    const max = window.innerWidth - 300;
    setLeft(Math.floor(Math.random() * (max - min + 1)) + min);
  }, []);

  useEffect(() => {
    if (left === null) return;
    const timeout = setTimeout(() => {
      onComplete();
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [left, onComplete]);

  if (left === null) return null; // don't render until left is set

  return (
    <div
      style={{
        left: `${left.toString()}px`,
      }}
      className="fixed bottom-10 transform px-4 py-2 bg-[#29abe2] text-white rounded-full shadow-lg text-center animate-float"
    >
      {text}
    </div>
  );
};

export default Bubble;

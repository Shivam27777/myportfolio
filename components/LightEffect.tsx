"use client"
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function LightEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const {resolvedTheme, setTheme} = useTheme();

  useEffect(() => {
    const handleMouseMove = (e: { clientX: any; clientY: any; }) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  if(resolvedTheme === "light") return null;

  return (
    <div
      className="light-effect"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
}

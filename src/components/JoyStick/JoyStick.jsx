import React, { useRef, useState, useEffect } from "react";
import "./Joystick.css";

function Joystick({ onMove }) {
  const containerRef = useRef(null);
  const [stickPos, setStickPos] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const updateStickPosition = (e) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = e.clientX - centerX;
    const dy = e.clientY - centerY;

    const distance = Math.sqrt(dx * dx + dy * dy);
    const radius = rect.width / 2 - 20; // 20 = raio da bolinha

    let clampedX = dx;
    let clampedY = dy;

    if (distance > radius) {
      const angle = Math.atan2(dy, dx);
      clampedX = Math.cos(angle) * radius;
      clampedY = Math.sin(angle) * radius;
    }

    setStickPos({ x: clampedX, y: clampedY });

    const normX = clampedX / radius;
    const normY = clampedY / radius;
    onMove({ x: normX, y: normY });
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    updateStickPosition(e);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setStickPos({ x: 0, y: 0 });
    onMove({ x: 0, y: 0 });
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", updateStickPosition);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", updateStickPosition);
      window.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", updateStickPosition);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      className="joystick-container"
      ref={containerRef}
      onMouseDown={handleMouseDown}
    >
      <div
        className="joystick-stick"
        style={{ transform: `translate(${stickPos.x}px, ${stickPos.y}px)` }}
      />
    </div>
  );
}

export default Joystick;

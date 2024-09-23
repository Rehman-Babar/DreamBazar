/* eslint-disable react/prop-types */
import React, { useState } from "react";

const ZoomImage = ({ src, alt, className, containerClassName }) => {
  const [backgroundPosition, setBackgroundPosition] = useState("center");

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setBackgroundPosition(`${x}% ${y}%`);
    console.log(x);
  };

  const handleMouseLeave = () => {
    setBackgroundPosition("center");
  };

  return (
    <div
      className={`relative overflow-hidden ${containerClassName}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}>
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-center transition-transform duration-300 group-hover:scale-150 ${className}`}
        style={{
          transformOrigin: backgroundPosition,
        }}
      />
    </div>
  );
};

export default ZoomImage;

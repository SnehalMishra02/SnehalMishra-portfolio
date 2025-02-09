'use client'
import { useState } from "react";

const CardStack = ({ images, titles }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="grid place-items-center h-[50vmax] relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {images.map((image, index) => {
        const baseTransform = [
          "-translate-x-[100px] rotate-[-40deg]",
          "-translate-x-[50px] rotate-[-30deg]",
          "rotate-[-20deg]",
          "translate-x-[50px] rotate-[-10deg]",
        ];

        const hoverTransform = [
          "-translate-x-[150px] rotate-0",
          "-translate-x-[100px] rotate-0",
          "-translate-x-[50px] rotate-0",
          "translate-x-[50px] rotate-0",
        ];

        return (
          <div
            key={index}
            className={`sm:hidden w-[190px] h-[254px] bg-gray-200 absolute transition-all duration-300 shadow-lg cursor-pointer flex flex-col ${
              hovered ? baseTransform[index % baseTransform.length] : ""
            } hover:${hoverTransform[index % hoverTransform.length]}`}
          >
            <img
              src={image}
              alt={`Card ${index + 1}`}
              className="w-full h-2/3 object-cover"
            />
            <div className="w-full h-1/3 flex items-center justify-center bg-white text-black font-bold p-2">
              {titles[index]}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardStack;

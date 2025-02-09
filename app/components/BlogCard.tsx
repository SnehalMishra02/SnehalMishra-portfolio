'use client';

import { useState } from 'react';
import clsx from 'clsx';

// Define TypeScript Props
interface BlogCardProps {
  image: string;
  title: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ image, title }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="mx-3 w-[254px] h-[254px] rounded-2xl transition-all duration-300 bg-gradient-to-br from-[#5ffffa] to-[#ff00e6] shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={clsx(
          'w-[254px] h-[254px] bg-[#ffffff] rounded-2xl transition-all duration-200',
          { 'scale-[0.97]': isHovered }
        )}
      >
        <div className="h-full w-full p-2 grid grid-cols-1 grid-rows-3">
          <div className="row-span-2 rounded-2xl overflow-hidden">
            <img src={image} alt={title}  />
          </div>
          <h1 className="font-semibold text-2xl text-center">{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

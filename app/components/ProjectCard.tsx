import React from "react";
import Image from "next/image";
import "./ProjectCard.css";

// Define TypeScript Props
interface ProjectCardProps {
  img: string;
  first: string;
  second: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ img, first, second }) => {
  return (
    <div className="card m-3 z-[5] min-w-[210px] min-h-[295px]">
      <div className="first-content">
        <span className="flex flex-col h-full w-auto">
          <img src={img} alt="Project" />
          {first}
        </span>
      </div>
      <div className="second-content">
        <span className="text-sm">{second}</span>
      </div>
    </div>
  );
};

export default ProjectCard;

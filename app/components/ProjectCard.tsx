import React from "react";
import "./ProjectCard.css";

const ProjectCard: React.FC = ({img, first, second}) => {
  return (
    <div className="card m-3">
      <div className="first-content">
        <span className="flex flex-col h-full w-auto"><img src={img} alt="Project" />{first}</span>
      </div>
      <div className="second-content">
        <span>{second}</span>
      </div>
    </div>
  );
};

export default ProjectCard;

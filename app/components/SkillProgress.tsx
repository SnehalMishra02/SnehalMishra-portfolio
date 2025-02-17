'use client';

import { useEffect, useState } from 'react';


// Define Props Type
interface Skill {
  name: string;
  percentage: number;
  delay?: number;
}

interface SkillProgressProps {
  title: string;
  skills: Skill[];
}

const SkillProgress: React.FC<SkillProgressProps> = ({ title, skills }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="m-2">
      {/* Title Section */}
      <div className="relative w-[15vw] h-3 bg-gray-800 p-5 rounded-lg rounded-b-none min-w-[210px] flex justify-start items-center">
        <h2 className="text-white text-lg p-2">{title}</h2>
      </div>

      {/* Skill Bars */}
      <div className="relative max-w-md w-full bg-gray-900 p-5 rounded-lg rounded-t-none">
        {skills.map((skill, index) => (
          <div key={index} className="mb-6">
            <span className="block text-sm font-semibold text-gray-300">{skill.name}: {skill.percentage}%</span>
            <div className="w-full h-2 bg-gray-700 rounded-md mt-2 relative overflow-hidden">
              <div
                className="h-full bg-gray-300 rounded-md transition-all duration-500 ease-in-out"
                style={{ 
                  width: isVisible ? `${skill.percentage}%` : '0%', 
                  transitionDelay: `${skill.delay || 0}s` 
                }}
              />
              <span className="absolute right-0 top-[-22px] text-xs font-bold text-gray-800 bg-gray-300 px-2 py-1 rounded-md">
                {skill.percentage}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillProgress;

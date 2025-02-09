import React from 'react'
import WaveDivider from './WaveDivider'
import SkillProgress from './SkillProgress'

const basicFrontEnd = [
  { name: 'HTML', percentage: 70, delay: 0.1 },
  { name: 'CSS', percentage: 80, delay: 0.1 },
  { name: 'Tailwind', percentage: 90, delay: 0.1},
  { name: 'Next.js', percentage: 90, delay:0.1},
  { name:'React.js', percentage: 70, delay:0.1}
];

const DBMS = [
  { name: 'Oracle SQL', percentage: 60, delay:0.2},
  { name: 'MySQL', percentage: 60, delay:0.2},
  { name: 'MongoDB', percentage: 20, delay:0.2}

]

const Backend = [
  { name: 'Node.js', percentage: 80, delay:0.3},
  { name: 'Express.js', percentage: 80, delay:0.3},
  { name: 'Socket.js', percentage: 70, delay:0.3}

]
const core = [
  { name: 'Computer Networks', percentage: 85, delay: 0.4 },
  { name: 'Operating Systems', percentage: 80, delay: 0.4 },
  { name: 'OOPS', percentage: 80, delay: 0.4 },
]
const codingLanguades = [
  { name: 'Python', percentage: 95, delay: 0.5 },
  { name: 'Java', percentage: 70, delay: 0.5 },
  { name: 'C', percentage: 60, delay: 0.5 },
  { name:'JavaScript', percentage: 70, delay:0.5}
];

const Extras = [
  {name: 'BlockChain', percentage:60, delay:0.6},
  {name:'AI/ML', percentage:50, delay:0.6},
  {name:'Football ⚽', percentage:100, delay:0.6},
  {name:'badminton 🏸', percentage:100, delay:0.6}
];

const Skills = () => {
  return (
        <div className="bg-gradient-to-b from-[#7950f2] via-[#7950f2] via-5% to-[#f783ac] to-95% min-h-screen h-auto w-full" id="Skills">
            <WaveDivider clr="#56b2d4"/>
            <h1 className='text-white text-[250%] px-6 py-2 font-extrabold mt-7 text-center'>My Skills</h1>
            <div className='m-3 mb-0 p-2 h-full w-full flex flex-wrap  justify-center items-start'>
              <SkillProgress title = "Web Front-end" skills = {basicFrontEnd}/>
              <SkillProgress title = "DataBase Management" skills = {DBMS}/>
              <SkillProgress title = "Web Back-end" skills = {Backend}/>
              <SkillProgress title = "Core" skills = {core}/>
              <SkillProgress title = "Coding Languages" skills = {codingLanguades}/>
              <SkillProgress title = "More" skills = {Extras}/>

            </div>
        </div>

  )
}

export default Skills
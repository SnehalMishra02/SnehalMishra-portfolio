import React from 'react'
import ProjectCard from './ProjectCard'
import WaveDivider from './WaveDivider'

const Projects = () => {
  return (
    <div id='Projects' className='bg-gradient-to-b from-[#e64980] to-[#ff8787] min-h-screen h-auto'>
        <WaveDivider clr="#f783ac" />
        <h1 className='text-white text-[250%] px-6 mt-11 font-extrabold text-center'>My Projects</h1>
        <div className='flex items-center flex-wrap h-[80%] px-10'>
          <ProjectCard img="ecofolio1.png" first="EcoFolio" second="EcoFolio is a blockchain-powered platform for trading carbon credits, enabling transparent, secure, and efficient transactions in the carbon market. By leveraging decentralized technology, EcoFolio ensures verifiable and tamper-proof records of carbon credit ownership, empowering businesses and individuals to invest in sustainability with confidence. 🌱🔗💰"/>
          <ProjectCard img="wumpus.png" first="Demon Assault Game" second="Demon Assault is a grid-based strategy game where players navigate a robotic battlefield, avoiding deadly demons while using strategic shooting mechanics. The game features procedurally generated maps, reset-on-loss functionality, and an interactive 'How to Play' guide. It challenges players with tactical movement and fast-paced decision-making for an engaging gameplay experience."/>  
        </div>
    </div>
  )
}

export default Projects
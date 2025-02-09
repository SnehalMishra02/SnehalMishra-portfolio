import React from 'react'
import Mail from './Mail'
import Socials from './Socials'
import WaveDivider from './WaveDivider'

const Connect = () => {
  return (
    <div className='bg-gradient-to-b from-[#264073] via-[#264073] via-29% to-[#c600ff] to-82% h-auto min-h-screen w-full flex items-center justify-center' id="Connect">
        <WaveDivider clr="#6162b8" />
        <h1 className='text-white text-[250%] px-6 py-2 font-extrabold text-center'>Connect</h1>
        <div className='w-full h-[80%] flex flex-wrap flex-col justify-center items-center gap-11 p-4 pt-8'>
            <Mail/>
            <div>
                <Socials /> 
            </div>
        </div>
    </div>
  )
}

export default Connect
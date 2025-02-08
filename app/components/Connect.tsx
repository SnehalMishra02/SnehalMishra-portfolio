import React from 'react'
import Mail from './Mail'
import TriangleDivider from './TriangleDivider'
import Socials from './Socials'
const Connect = () => {
  return (
    <div className='bg-gradient-to-b from-[#264073] via-[#264073] via-29% to-[#c600ff] to-82% h-screen w-full' id="Connect">
        <TriangleDivider clr="#6162b8" />
        <h1 className='text-white text-[250%] px-6 py-2 font-extrabold'>Connect</h1>
        <div className='w-full h-[80%] grid grid-cols-2 p-4 pt-8'>
            <Mail/>
            <div>
                <Socials /> 
            </div>
        </div>
    </div>
  )
}

export default Connect
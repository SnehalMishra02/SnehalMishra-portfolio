import React from 'react'
import Timeline from './Timeline'
import WaveDivider from './WaveDivider'
const Timelinesection = () => {
  return (
    <div className='bg-gradient-to-b from-[#d84fff] via-[#4748af] to-[#6162b8] h-full w-full min-h-screen' id='TimeLine'>
        <WaveDivider clr="#ff8787" />
        <Timeline/>
    </div>
  )
}

export default Timelinesection
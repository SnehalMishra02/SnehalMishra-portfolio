import React from 'react'
import BlogCard from './BlogCard'
import './file.css'

const Hero = () => {
  return (
    <div className=" mt-[5vw] bg-gradient-to-b from-[#1e3c72] via-[#1e3c72] via-29% to-[#56b2d4] to-82% max-md:h-screen h-auto min-h-screen w-full" id='Me'>
      <div className='grid h-full grid-cols-4 grid-rows-3 p-3'>
        <div className='row-span-2 col-span-2 flex items-center justify-center max-sm:hidden'>
          <img className='max-h-[90%]' src="Me.png" alt="me" /></div>
        
        <div className='col-span-2 row-span-1 max-sm:col-span-4'>
          <h1 className='text-[300%] font-extrabold text-white text-center max-sm:text[250%]'>
            Hey, I am Snehal Mishra
          </h1>
          <h2 className='text-[150%] font-semibold text-white italic p-2 rounded max-md:text-[90%]'>
          A Computer Science student and an ever-curious tech explorer 💻, always diving deeper into the world of all things tech related🤿. When I’m not building applications or experimenting with new tech, you’ll find me on the field as a sportsman ⚽ or immersed in a gaming session 🎮.
          </h2>
          <br />
          <a href="#Connect" className='bg-cyan-300 hover:bg-pink-300 p-3 hover:p-4 rounded-2xl shadow-lg shadow-pink-300 hover:shadow-cyan-300 font-semibold text-slate-800 '>Connect Now</a>
        </div>

        {/* Blogs */}
        <div className='row-start-3 col-span-4 p-2 flex items-center gap-7 scroll1 mb-7'>
          <h1 className='text-white text-[150%] font-extrabold mr-11 max-sm:hidden'>Read My Thoughts On: </h1>
          <div className='overflow-auto flex mb-7'>
          <BlogCard image="b1.avif" title="Upcoming! 🤚"/>
          <BlogCard image="b1.avif" title="Upcoming! 🤚"/>
          <BlogCard image="b1.avif" title="Upcoming! 🤚"/>
          <BlogCard image="b1.avif" title="Upcoming! 🤚"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
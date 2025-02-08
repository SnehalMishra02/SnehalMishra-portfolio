import Link from 'next/link'
import React from 'react'

const Header = () => {
  var sections = ["Me", "Skills", "Projects", "TimeLine", "Connect"]
  return (
    <div className=' w-full h-[10vh] flex items-center justify-center p-1 top-0 sticky z-10'>
        <div className='h-full bg-black w-[90%] rounded-3xl border-white border-2 bg-opacity-50 flex'>
            
            <div className='left-0 h-full w-[10%] items-center flex justify-center pl-4'>
                <a title='To-top' className='h-full w-full items-center flex' href="/#"><img className='max-h-[80%] w-auto' src="/Logo.png" alt="" /></a>
            </div>

            <div className='right-0 flex justify-end items-center w-full p-2'>
                {sections.map( (section: string, i: number)=>{
                    return(
                        <a href={`/#${section}`} key={i} className=' bg-white/30 shadow-xl shadow-[rgba(31,38,135,0.37)] backdrop-blur-[5.5px] border border-white/20  font-semibold  hover:shadow-md hover:shadow-purple-400 border-white text-blue-100 hover:text-slate-800 hover:bg-white/70 p-3 m-2 rounded-2xl' >
                            {section}
                        </a>
                    );
                })}
                        <Link href={'/Blogs'} className=' bg-white/30 shadow-xl shadow-[rgba(31,38,135,0.37)] backdrop-blur-[5.5px] border border-white/20  font-semibold  hover:shadow-md hover:shadow-purple-400 border-white text-blue-100 hover:text-slate-800 hover:bg-white/70 p-3 m-2 rounded-2xl' >
                            Blogs
                        </Link>
            </div>

        </div>

    </div>
  )
}

export default Header
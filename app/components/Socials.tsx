import React from 'react'
import SocialButton from './SocialButton'
const Socials = () => {
  return (
    <div className='w-full min-h-[30%] h-fit flex items-center justify-center'>
        <div className='bg-white w-[90%] h-full rounded-full flex items-center justify-center p-5 md:min-w-[500px]'>
            <SocialButton img="Instagram.png" link="https://www.instagram.com/snehal.mishraa/"/>
            <SocialButton img="linkedin.png" link="https://www.linkedin.com/in/snehal-mishra-2618b2199/"/>
            <SocialButton img="leetcode.png" link="https://leetcode.com/u/SnehalMishra/"/>
            <SocialButton img="github.png" link="https://github.com/SnehalMishra02"/>
        </div>
    </div>
  )
}

export default Socials
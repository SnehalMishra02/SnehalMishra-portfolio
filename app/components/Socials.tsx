import React from 'react'
import SocialButton from './SocialButton'
const Socials = () => {
  return (
    <div className='w-full h-[30%] flex items-center justify-center'>
        <div className='bg-white w-[90%] h-full rounded-3xl flex items-center justify-center'>
            <SocialButton clr="pink-300" img="Instagram.png" link="https://www.instagram.com/snehal.mishraa/"/>
            <SocialButton clr="blue-300" img="linkedin.png" link="https://www.linkedin.com/in/snehal-mishra-2618b2199/"/>
            <SocialButton clr="blue-300" img="leetcode.png" link="https://leetcode.com/u/SnehalMishra/"/>
            <SocialButton clr="blue-300" img="github.png" link="https://github.com/SnehalMishra02"/>
        </div>
    </div>
  )
}

export default Socials
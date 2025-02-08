import React from 'react'

const SocialButton = ({img, link, clr}) => {
  return (
    <a target='blank' className={`border m-2 bg-white shadow-md shadow-slate-400 rounded-full hover:shadow-lg hover:shadow-slate-400 hover:h-[80%] h-[60%] w-[20%] flex items-center justify-center`} href={link}><img className='h-[40%] w-fit' src={img} alt="" /></a>
  )
}

export default SocialButton
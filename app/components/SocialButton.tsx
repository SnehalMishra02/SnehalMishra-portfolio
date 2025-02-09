import Link from 'next/link'
import React from 'react'

const SocialButton = ({img, link}) => {
  return (
    <Link target='blank' className={` p-4 border mx-2 bg-white shadow-md shadow-slate-400 rounded-full hover:shadow-lg hover:shadow-slate-400 hover:h-[80%] h-[60%] min-h-[100px] min-w-[67px] w-[20%] flex items-center justify-center max-sm:min-h-0`} href={link}><img className='h-[60%] w-fit max-w-[50px] max-h-auto max-sm:max-h-[35px] max-sm:max-w-[35px]' src={img} alt="" /></Link>
  )
}

export default SocialButton
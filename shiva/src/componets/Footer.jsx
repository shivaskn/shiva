import React from 'react'
import { SOCIAL_MEDIA_LINKS } from '../constants'
import {motion} from 'framer-motion'

const Footer = () => {
  return (
    <div className='mb-8 mt-20'>
        <div className='flex items-center justify-center mb-4'>
            <motion.h1 initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.5}}>SHIVAKUMAR</motion.h1>
        </div>
        <div className='flex items-center justify-center gap-8'>
            {SOCIAL_MEDIA_LINKS.map((item,index)=>(
                <motion.a initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.2, delay:index*0.5}} key={index} href={item.href} target="_blank" rel='noopener noreferrer'>
                    {item.icon}
                </motion.a>
            ))}
        </div>
        <p className='mt-8 text-center text-sm tracking-wide text-gray-400'>
            &copy;ShivaDeveloper. All rights reversed
        </p>
    </div>
  )
}

export default Footer
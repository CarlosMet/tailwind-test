"use client"
import React, {useRef, useEffect, useState} from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { guardarNombre } from '@/store/slice'
import SectionNumber from './SectionNumber'




export default function Hero() {

    const router = useRouter()

    const avatarRef = useRef(null)
    
    
    function startAnimation(){
        avatarRef.current.classList.add('avatar')
    }

    

    const pageChange = useSelector( state => state.valor.bool )    
    const dispatch = useDispatch()

    const pageChangeHandler = ()=>{
        startAnimation()
        setTimeout(()=>{
            router.push('/about')            
        }, 500)
        dispatch(guardarNombre(!pageChange))
    }

    const [animationHandler, setAnimationHandler] = useState(pageChange)

    useEffect(()=>{
      if (pageChange){
        startAnimation()
        setTimeout(()=>{          
          dispatch(guardarNombre(!pageChange))
          
        }, 100)
      }
    }, [pageChange])

    

    

  return (
    <div className='overflow-hidden w-[100vw] h-[100vh] relative py-36 md:py-20 lg:py-44 2xl:py-72 px-3 md:px-12 lg:px-16 xl:px-36 2xl:px-64'>
        <div className='text-center md:text-left'>
          <SectionNumber number={'1'}></SectionNumber>
        </div>
        <motion.h1             
            className='text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold xl:font-extrabold tracking-tighter lg:tracking-tight z-40 text-center md:text-left'>I'm Carlos Metaute, <br />  <div className='text-[#00E5BC] '>Frontend Developer.</div></motion.h1>
        <p className='w-full lg:w-[535px] 2xl:w-[800px] mt-4 md:mt-6 lg:mt-8 leading-relaxed 2xl:mt-12 text-gray-400 tracking-tight z-40 text-lg text-center md:text-justify'>Lorem ipsum dolor sit amet consectetur two teas to room tu tu. Quod eos i dont know what else! Lorem ipsum dolor sit amet consectetu.</p>
        <div className='text-center lg:text-left'>
          
          <button 
            onClick={()=> setAnimationHandler(!animationHandler)}
            className='z-40 mt-4 md:mt-6 lg:mt-8 2xl:mt-14 border-2 border-[#00E5BC] text-[#00E5BC] py-2 px-10 lg:px-9 xl:px-28 2xl:px-32 hover:border-black hover:bg-black transition-colors duration-500 w-10/12 lg:w-auto'>{pageChange? 'siu': 'nope'}</button>
          
        </div>
        
        <img ref={avatarRef} className='absolute hidden lg:block top-14 w-6/12 right-1/2 translate-x-1/2 lg:translate-x-0 lg:top-auto lg:bottom-0 lg:right-20 xl:right-40 2xl:right-64 lg:w-[29%] z-20' src="https://i.imgur.com/OTdKfwe.png" alt="" />
        <img src="https://i.imgur.com/mKNPStx.png" className='hidden lg:block lg:w-[145%] lg:h-[115%] absolute bottom-0 lg:-bottom-9 -z-10 left-0 mix-blend-color-dodge' alt="" />
      {/* {https://i.imgur.com/3i0z58v.jpg} */}

    </div>
  )
}

"use client"
import React from 'react'


export default function Hero() {
  return (
    <div className='overflow-hidden w-[100vw] h-[100vh] relative pad py-[306px] lg:py-48 2xl:py-80'>

        <h1 className='text-3xl lg:text-5xl 2xl:text-7xl font-bold xl:font-extrabold tracking-tighter lg:tracking-tight z-40 text-center lg:text-left'>Carlos Metaute, <br />  <div className='text-[#00E5BC]'><span className='text-white'>i'm</span> Frontend Developer.</div></h1>
        <p className='w-full lg:w-[535px] 2xl:w-[800px] mt-4 md:mt-6 lg:mt-8 leading-relaxed 2xl:mt-12 text-gray-400 tracking-tight z-40 text-lg text-justify'>Lorem ipsum dolor sit amet consectetur two teas to room tu tu. Quod eos i dont know what else! Lorem ipsum dolor sit amet consectetu.</p>
        <div className='text-center lg:text-left'>
          <button className='z-40 mt-4 md:mt-6 lg:mt-8 2xl:mt-14 border-2 border-[#00E5BC] py-2 px-10 lg:px-9 xl:px-28 2xl:px-32 hover:border-black hover:bg-black transition-colors duration-500'>Something</button>
        </div>
        
        <img className='absolute top-14 w-6/12 right-1/2 translate-x-1/2 lg:translate-x-0 lg:top-auto lg:bottom-0 lg:right-20 xl:right-40 2xl:right-64 lg:w-[29%] z-20' src="https://i.imgur.com/OTdKfwe.png" alt="" />
        <img src="https://i.imgur.com/mKNPStx.png" className='hidden lg:block lg:w-[145%] lg:h-[115%] absolute bottom-0 lg:-bottom-9 -z-10 left-0 mix-blend-color-dodge' alt="" />
      {/* {https://i.imgur.com/3i0z58v.jpg} */}

    </div>
  )
}

"use client"
import React, { useState } from 'react'

export default function Slider({slides}) {
    const [currentSlide, setCurrentSlide] = useState(0)
    const goRight = ()=>{
        setCurrentSlide(currentSlide + 1)
    }
    const goLeft = ()=>{
        setCurrentSlide(currentSlide - 1)
    }

    const dotHandler = (position)=>{
        setCurrentSlide(position)
    }
  return (
    <div className='relative w-full'>
      <img className='w-7/12 lg:w-10/12 h-64 lg:h-96 2xl:h-[512px] mx-auto' src={slides[currentSlide].image} alt="" />
      <button onClick={goRight} className='absolute top-1/2 right-0 transform -translate-y-1/2'>right</button>
      <button onClick={goLeft} className='absolute top-1/2 left-0 transform -translate-y-1/2'>left</button>
      <div className="absolute -bottom-8 flex items-center gap-2 left-1/2 -translate-x-1/2">{slides.map( (dot, index) =>{
        return(
            currentSlide === index 
                ? <div onClick={()=> dotHandler(index)} className='w-5 h-5 bg-transparent rounded-full border-2 border-blue-400' key={dot.id}></div>
                : <div onClick={()=> dotHandler(index)} className='w-[18px] h-[18px] bg-transparent rounded-full border border-slate-400' key={dot.id}></div> 
        )
      } )}</div>
    </div>
  )
}

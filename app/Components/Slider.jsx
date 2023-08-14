"use client"
import React, { useState } from 'react'

export default function Slider({slides}) {
    const [currentSlide, setCurrentSlide] = useState(0)
    const goRight = ()=>{
        if (currentSlide === slides.length - 1){            
            setCurrentSlide(0)
        }else{
            setCurrentSlide(currentSlide + 1)
        }
    }
    const goLeft = ()=>{
        if(currentSlide === 0){
            setCurrentSlide(slides.length - 1)
        }else{
            setCurrentSlide(currentSlide - 1)
        }
    }

    const dotHandler = (position)=>{
        
        setCurrentSlide(position)
    }
  return (
    <div className='relative w-full'>
      <div className='grid grid-cols-2 place-items-center gap-x-1 md:gap-x-0 gap-y-4 md:gap-y-2'>
      {slides.slice(0,4).map( (slide, index) =>{
        return(
            <div className='overflow-hidden rounded-xl md:rounded-md w-[95%] h-24 lg:h-40 bg-purple-400'>
                <img src={slide.image} key={index} alt="" className='w-full bg-inherit' />
            </div>
        )
      } )}
      </div>
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

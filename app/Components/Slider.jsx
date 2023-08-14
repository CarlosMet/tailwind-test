"use client"
import React, { useState } from 'react'

export default function Slider({slides}) {

    const [currentPage, setCurrentPage] = useState(1)
    const [slicers, setSlicers] = useState({initial: 0, last: 4})

    const [currentSlide, setCurrentSlide] = useState(0)
    const changePage = ()=>{
        
       if(currentPage === 1){
        setCurrentPage(2)
        setSlicers({initial:4, last: 8})
       }else{
        setCurrentPage(1)
        setSlicers({initial:0, last: 4})
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
    <div className='relative w-full px-0 lg:px-3'>
      <div className='grid grid-cols-2 place-items-center gap-x-1 md:gap-x-0 gap-y-4 md:gap-y-2 xl:gap-y-5'>
      {slides.slice(slicers.initial,slicers.last).map( (slide, index) =>{
        return(
            <div className='overflow-hidden rounded-xl md:rounded-md w-[95%] h-28 lg:h-40 2xl:h-56 bg-gradient-radial from-purple-500 to-purple-200 '>
                <img src={slide.image} key={index} alt="" className='w-full bg-inherit' />
            </div>
        )
      } )}
      </div>
      <button onClick={changePage} className='absolute top-1/2 -right-12 2xl:-right-16 hidden lg:block transform -translate-y-1/2'><img className='w-16 2xl:w-24 text-white' src="/right-arrow-svgrepo-com.svg" alt="" /></button>
      <button onClick={changePage} className='absolute top-1/2 -left-12 2xl:-left-16 hidden lg:block transform -translate-y-1/2'><img className='w-16 2xl:w-24 text-white' src="/left-arrow-backup-2-svgrepo-com.svg" alt="" /></button>
      
      <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-2">
      {
        currentPage === 1 
        ? <div onClick={changePage} className='w-4 h-4 rounded-full bg-[#00E5BC]'></div>
        : <div onClick={changePage} className='w-3 h-3 rounded-full bg-[#00E5BC]/20'></div>
      }
      {
        currentPage === 2 
        ? <div onClick={changePage} className='w-4 h-4 rounded-full bg-[#00E5BC]'></div>
        : <div onClick={changePage} className='w-3 h-3 rounded-full bg-[#00E5BC]/20'></div>
      }
      </div>
      
    </div>
  )
}

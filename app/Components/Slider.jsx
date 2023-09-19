"use client"
import React, { useEffect, useState } from 'react'


export default function Slider({slides}) {

  const [viewsPerPage, setViewsPerPage] = useState(4) 

  const [slicers, setSlicers] = useState({
    first: 0,
    second: viewsPerPage
  })

  const [activePage, setActivePage] = useState(0)

  const [pages, setPages] = useState( Math.ceil( slides.length / viewsPerPage ) )

  const dotsArray = Array(pages).fill('_')

  const pageChangeHandler = (page)=>{
    setSlicers({
      first: page * viewsPerPage,
      second: viewsPerPage * (page + 1)
    })
    setActivePage(page)
  }

  

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 w-full md:gap-2 lg:gap-4 place-items-center relative'>
      {
        slides.slice(slicers.first, slicers.second).map( (slide, index) => (
          <div key={index} className='w-80 md:w-full md:h-40 lg:h-48 2xl:h-64 mt-4 lg:mt-0 rounded-xl bg-gradient-to-br from-pink-200 to-pink-500 overflow-hidden'>            
            <img className='w-full h-96 mx-auto transform -rotate-[30deg]' src={slide.image} alt="project" />
          </div>
        ) )
      }

      <div className="absolute flex items-center gap-2 -bottom-10">
        {dotsArray.map( (dot, index) =>(
          <div onClick={()=> pageChangeHandler(index)} key={index} className={index === activePage ? 'h-[14px] w-[14px] rounded-full bg-[#00E5BC] cursor-pointer' : 'h-3 w-3 rounded-full bg-[#00E5BC]/40 cursor-pointer'}></div>
        ) )}
      </div>

    </div>
  )
}

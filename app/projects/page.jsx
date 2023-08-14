"use client"
import React, { useEffect, useState } from 'react'
import SectionNumber from '../Components/SectionNumber'
import { Roboto_Condensed } from 'next/font/google'
import Slider from '../Components/Slider'

const roboto = Roboto_Condensed({subsets:['latin'], weight:['300', '400', '700']})

export default function page() {

    const projects = [{
        src: '',
        image: 'https://i.imgur.com/vhn2tOL.png',
        title: '1st project',
        id:1
    },
    {
        src: '',
        image: 'https://i.imgur.com/PXlNKGO.png',
        title: '2nd one',
        id: 2
    },
    {
        src: '',
        image: 'https://i.imgur.com/KIzRmwy.png',
        title: '2nd one',
        id: 3
    },
    {
        src: '',
        image: 'https://i.imgur.com/vhn2tOL.png',
        title: '2nd one',
        id: 4
    },
    {
        src: '',
        image: 'https://i.imgur.com/07KMWab.jpg',
        title: '2nd one',
        id: 5
    },
    {
        src: '',
        image: 'https://i.imgur.com/aHiQV2C.jpg',
        title: '2nd one',
        id: 6
    },
    {
        src: '',
        image: 'https://i.imgur.com/aHiQV2C.jpg',
        title: '2nd one',
        id: 4
    }

    ]    
    
    
    
  return (
    <div className='w-screen h-screen overflow-hidden px-1 md:px-12 lg:px-16 xl:px-36 2xl:px-64 py-28 md:py-16 lg:py-36 xl:py-44 2xl:py-64 relative'>

      <div className='flex flex-col md:flex-row items-center w-full'>

        <div className='w-full lg:w-4/12'>
            <div className="text-center md:text-left"><SectionNumber number={'2'}></SectionNumber></div>
            <h2 className='text-3xl lg:text-5xl font-bold mb-3 text-center md:text-left'>
                Projects
            </h2>
            <p className='tracking-tight text-gray-400 mb-4 lg:mb-0 text-center md:text-left md:pr-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eum laboriosam</p>
        </div>

        <div className='w-full lg:w-8/12'>
            <Slider slides={projects}></Slider>
        </div>
      </div>

      {/* {https://i.imgur.com/Mw1p9T4.png} */}
      <img src="https://i.imgur.com/Mw1p9T4.png" className='lg:w-[145%] lg:h-[115%] absolute bottom-0 lg:-bottom-9 -z-10 left-0 mix-blend-color-dodge' alt="" />
    </div>
  )
}

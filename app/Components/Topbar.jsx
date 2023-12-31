"use client"
import React from 'react'
import {AiOutlineGithub, AiFillLinkedin} from 'react-icons/ai'



export default function Topbar() {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center px-3 md:px-12 lg:px-16 xl:px-36 2xl:px-64 py-3 lg:py-5 xl:py-6 2xl:py-8 absolute top-0 w-full left-0'>
    <div>
        <p className='font-bold text-2xl lg:text-3xl xl:text-4xl'>Carlos Metaute.</p>
    </div>
    <div className='mt-3'>
        <ul className='flex justify-center lg:justify-between items-center gap-4'>
          <li><AiOutlineGithub size={27}></AiOutlineGithub></li>
          <li><AiFillLinkedin size={27}></AiFillLinkedin></li>
          <li></li>
        </ul>
    </div>
    </div>
  )
}
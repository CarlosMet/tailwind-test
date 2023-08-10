"use client"
import React from 'react'
import {BiHomeAlt2, BiSolidFolderOpen} from 'react-icons/bi'
import {RiContactsLine} from 'react-icons/ri'
import {BsFillSendExclamationFill} from 'react-icons/bs'
import {GiStrong} from 'react-icons/gi'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { guardarNombre } from '@/store/slice'
import { useRouter } from 'next/navigation'

export default function Navbar() {

  const triggerPageChange = useSelector( state => state.valor.bool )
  const dispatch = useDispatch()
  const router = useRouter()

  const pageChangeHandler = (route)=>{   
    dispatch(guardarNombre(false))
    if(route === '/'){
      dispatch(guardarNombre(false))
      router.push(`/${route}`)
    }else{
      setTimeout(()=>{
        dispatch(guardarNombre(!triggerPageChange))
        setTimeout(() => {
          router.push(`/${route}`)
        },350);
        
      },10)
    }
    
    
   
  }

  return (
    <nav className='fixed -bottom-9 w-full left-1/2 lg:left-auto -translate-x-1/2 lg:-translate-x-0 lg:w-10 lg:top-1/2 lg:right-5 xl:right-7 transform -translate-y-1/2 flex flex-row justify-between lg:flex-col items-center gap-3 text-white bg-white/10 lg:bg-gray-600/40 px-2 2xl:px-3 py-5 rounded-none lg:rounded-2xl z-50'>
        
        <div
          className='cursor-pointer'
          onClick={()=> pageChangeHandler('projects')}
        >          
          <BiSolidFolderOpen size={27}></BiSolidFolderOpen>        
        </div>


        <div 
          className='cursor-pointer'
          onClick={()=> pageChangeHandler('about')}
        >
            <RiContactsLine size={27}></RiContactsLine>
        </div>
        <div 
          className='cursor-pointer'
          onClick={()=> pageChangeHandler('/')}
          >
          <BiHomeAlt2 size={27}></BiHomeAlt2>
        </div>
        <BsFillSendExclamationFill size={27}></BsFillSendExclamationFill>
        <GiStrong size={27}></GiStrong>
    </nav>
  )
}
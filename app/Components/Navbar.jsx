"use client"
import React from 'react'
import {BiHomeAlt2, BiSolidFolderOpen} from 'react-icons/bi'
import {RiContactsLine} from 'react-icons/ri'
import {BsFillSendExclamationFill} from 'react-icons/bs'
import {GiStrong} from 'react-icons/gi'

export default function Navbar() {
  return (
    <nav className='fixed -bottom-2 w-11/12 left-1/2 lg:left-auto -translate-x-1/2 lg:-translate-x-0 lg:w-10 lg:top-1/2 lg:right-5 xl:right-7 transform -translate-y-1/2 flex flex-row justify-between lg:flex-col items-center gap-3 text-white bg-black lg:bg-gray-600/40 px-2 2xl:px-3 py-2 lg:py-5 rounded-xl lg:rounded-2xl z-50'>
        <BiSolidFolderOpen size={27}></BiSolidFolderOpen>
        <BiHomeAlt2 size={27}></BiHomeAlt2>
        <RiContactsLine size={27}></RiContactsLine>
        <BsFillSendExclamationFill size={27}></BsFillSendExclamationFill>
        <GiStrong size={27}></GiStrong>
    </nav>
  )
}
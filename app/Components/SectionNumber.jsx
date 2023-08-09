import { Roboto } from 'next/font/google'
import React from 'react'
import localFont from 'next/font/local'

const roboto = Roboto({weight:['700', '900'], subsets:['latin']})
const myFont = localFont({
    src: '../../fonts/Generation-Mono.otf'
  })

export default function SectionNumber({number}) {
  return (
    <span className='text-4xl text-gray-100 opacity-50 font-black'>
        <p className={roboto.className}><span className=' tracking-tighter'>0{number}</span></p>
    </span>
  )
}

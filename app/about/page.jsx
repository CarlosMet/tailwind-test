"use client"
import React from 'react'
import { useSelector } from 'react-redux'

export default function Page() {
  const pageChange = useSelector( state => state.valor.bool )
  
  return (
    <div>
      {pageChange ? 'true' : 'false'}
    </div>
  )
}

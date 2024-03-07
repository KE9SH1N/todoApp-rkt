"use client"
import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {

  const newColor = useSelector((state: any) => state.bgColor.bgColor)
  console.log(newColor);
  return (
    <div className={`text-red-600 py-4 px-6 uppercase transition-colors duration-300`} style={{backgroundColor:newColor}}>
      <h1 className="text-2xl font-bold">Todo List</h1>
    </div>
  )
}

export default Header
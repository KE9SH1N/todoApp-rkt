"use client"
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const CustomBtn = () => {

  const color1 = useSelector((state: any) => state.color1)
  const color2 = useSelector((state: any) => state.color2)
  console.log(color1);
  
  // const renderedColor = true;
  return (
    <button className=" text-green-800 font-bold py-2 px-4 rounded"
    style={{backgroundColor: color2}}>
      multi background check
    </button>
  )
}

export default CustomBtn
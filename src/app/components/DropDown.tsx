"use client"
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { reset } from '../features/counterSlice'
import { changeColor } from '../features/colorSlice'

const DropDown = () => {
  const resetCount = useSelector((state: any) => state.counter.value)

  const dispatch = useDispatch();

  const [hoverColor, setHoverColor] = useState<string | null>();
  
  const handleClick = (color:string) => {
      dispatch(changeColor(color));
      setHoverColor(color);
    };
  

  return (
    <div className="flex justify-center space-x-4 mb-6">
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      onClick={() => handleClick('#F6F6F6')}>
        Change Header Color
      </button>
      <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
      onMouseEnter={()=> handleClick('#401099')}
      onMouseLeave={()=> handleClick('#80e0ec')}>
        Hover Me
      </button>
      <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
      onClick={() => dispatch(reset())}>
        Clear Count
      </button>
      <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
        Clear All Todo
      </button>
    </div>
  )
}

export default DropDown
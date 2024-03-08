"use client"
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../features/counterSlice'

const Counter = () => {

  const count = useSelector((state: any) => state.counter.value)
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-center py-6">
      <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-l"
      onClick={() => dispatch(decrement())}>
        -
      </button>
      <span className="bg-gray-200 text-gray-700 font-bold py-2 px-4">
        {count}
      </span>
      <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-r"
      onClick={() => dispatch(increment())}>
        +
      </button>
    </div>
  )
}

export default Counter
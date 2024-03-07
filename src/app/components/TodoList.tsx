import React from 'react'

const TodoList = () => {
  return (
    <div className="my-4">
      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Enter new todo"
          className="border p-2 mr-2"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Add
        </button>
      </div>
      <ul>
        <li className="flex items-center justify-between mb-2">
          <span>Example Todo 1</span>
          <div>
            <button className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600 mr-2">
              Edit
            </button>
            <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">
              Delete
            </button>
          </div>
        </li>
        <li className="flex items-center justify-between mb-2">
          <span>Example Todo 2</span>
          <div>
            <button className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600 mr-2">
              Edit
            </button>
            <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">
              Delete
            </button>
          </div>
        </li>
        {/* Add more li elements as needed for additional todos */}
      </ul>
    </div>
  )
}

export default TodoList
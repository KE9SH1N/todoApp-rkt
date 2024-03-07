import React from 'react'

const TodoFooter = () => {
  return (
    <footer className="bg-gray-200 p-4 flex items-center justify-between">
      <p className="text-gray-600">© 2024 Todo App. All rights reserved.</p>
      <ul className="flex space-x-4">
        <li>
          <a href="#" className="text-gray-600 hover:text-gray-800">About</a>
        </li>
        <li>
          <a href="#" className="text-gray-600 hover:text-gray-800">Contact</a>
        </li>
        <li>
          <a href="#" className="text-gray-600 hover:text-gray-800">Privacy Policy</a>
        </li>
      </ul>
    </footer>
  )
}

export default TodoFooter
import React from 'react'
import { IoShieldCheckmarkOutline } from 'react-icons/io5'

export const WaitingSession = () => {
  return (
    <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
      <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
        <IoShieldCheckmarkOutline />
        <span className="group-hover:text-gray-700">Waiting...</span>
      </button>
    </div>
  )
}

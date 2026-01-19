'use client'
import React from 'react'
import { BiDoorOpen } from 'react-icons/bi'
import { signIn } from 'next-auth/react'

export const SingIn = () => {
  return (
    <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
      <button
        onClick={() => signIn()}
        className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
        <BiDoorOpen />
        <span className="group-hover:text-gray-700">Sing In</span>
      </button>
    </div>
  )
}

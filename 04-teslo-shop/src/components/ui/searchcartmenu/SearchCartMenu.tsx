import Link from 'next/link'
import React from 'react'
import { IoCartOutline, IoSearchOutline } from 'react-icons/io5'
import { MenuButton } from './MenuButton'

export const SearchCartMenu = () => {
  return (
    <div className='flex items-center gap-3'>
      <Link href={'/search'}>
        <IoSearchOutline className='w-5 h-5' />
      </Link>
      <Link href={'/cart'}>
        <div className="relative">
          <span className='absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-blue-700 text-white'>3</span>
          <IoCartOutline className='w-5 h-5' />
        </div>
      </Link>
      <MenuButton />
    </div>
  )
}

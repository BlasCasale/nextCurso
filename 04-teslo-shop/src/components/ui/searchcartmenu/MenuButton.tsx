'use client';
import { useUIStore } from '@/store';
import React from 'react'


export const MenuButton = () => {
  const openMenu = useUIStore(state => state.openSideMenu)

  return (
    <button onClick={openMenu} className='m-2 p-2 rounded-md transition-all hover:bg-gray-100'>Menu</button>
  )
}

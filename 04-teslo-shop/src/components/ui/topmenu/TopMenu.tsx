import { titleFont } from '@/config/fonts'
import Link from 'next/link'
import React from 'react'
import { CenterMenu } from '../centermenu/CenterMenu'
import { SearchCartMenu } from '../searchcartmenu/SearchCartMenu'

export const TopMenu = () => {
  return (
    <nav className='flex p-3 justify-between items-center w-full'>
      <div>
        <Link href={'/'} >
          <span className={`${titleFont.className} antialiased font-bold`}>Teslo</span>
          <span> | Shop</span>
        </Link>
      </div>

      <CenterMenu />

      <SearchCartMenu />
    </nav>
  )
}
import Link from 'next/link'
import React from 'react'
import { uriTopMenus } from '@/utils/uriTopMenu'

export const CenterMenu = () => {
  return (
    <div className='hidden sm:block'>
      {
        uriTopMenus.map((item) => (
          <Link key={item.title} className='m-2 p-2 rounded-md transition-all hover:bg-gray-100' href={item.href}>{item.title}</Link>
        ))
      }
    </div>
  )
}

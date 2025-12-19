import Link from 'next/link'
import { HomeIcon } from '@primer/octicons-react'
import { ActiveLink } from '../active-link/ActiveLink'
import React from 'react'

const navItems = [
  { path: '/about', label: 'About' },
  { path: '/pricing', label: 'Pricing' },
  { path: '/contact', label: 'Contact' },
]

export const Navbar = () => {
  return (
    <nav className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded'>
      <Link href="/" className='flex items-center gap-1'>
        <HomeIcon size={16} />
        <span>Home</span>
      </Link>

      <div className='flex flex-1'></div>

      {
        navItems.map((item) => (
          <ActiveLink key={item.path} {...item} />
        ))
      }

    </nav>
  )
}
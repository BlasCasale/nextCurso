'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { JSX } from 'react'

interface Props {
  href: string
  label: string
  icon: JSX.Element
}

export const SidebarMenuIcon = ({ href, icon, label }: Props) => {

  const path = usePathname()

  return (
    <Link
      href={`${href}`}
      className={`relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-linear-to-r from-sky-600 to-cyan-400 ${href === path && 'text-white bg-gradient-to-r from-sky-600 to-cyan-400'}`}>
      {icon}
      <span className="-mr-1 font-medium">{label}</span>
    </Link>
  )
}

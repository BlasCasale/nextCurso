'use client'
import React from 'react'
import { JSX } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface Props {
  path: string;
  icon: JSX.Element;
  title: string;
  subtitle: string;
}

export function SiderbarMenuIcon({ path, icon, title, subtitle }: Props) {

  const pathname = usePathname();

  return (
    <Link href={path} className={`w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150 ${pathname === path ? 'bg-blue-500' : ''}`}>
      {icon}
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-5 text-white">{title}</span>
        <span className="text-sm text-white/50 hidden md:block">{subtitle}</span>
      </div>
    </Link>
  )
}
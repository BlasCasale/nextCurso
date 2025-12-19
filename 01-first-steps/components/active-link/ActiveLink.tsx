'use client';
import Link from 'next/link'
import styles from './ActiveLink.module.css'
import { usePathname } from 'next/navigation';
import React from 'react'

interface Props {
  path: string;
  label: string;
}


export const ActiveLink = ({ path, label }: Props) => {

  const pathname = usePathname();

  return (
    <>
      <Link href={path} className={`${styles.link} ${pathname === path ? styles.active : ''}`}>
        {label}
      </Link>
    </>
  )
}
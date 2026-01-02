import { WidgetGrid } from '@/components'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Dashboard admin',
  description: 'Dashboard admin description',
}

export default function Main() {
  return (
    <div className='text-black p-2'>
      <h1 className='mt-2 text-3xl'>Dashboard</h1>
      <span className='mt-2 text-xl'>Dashboard</span>
      <WidgetGrid />
    </div>
  )
}

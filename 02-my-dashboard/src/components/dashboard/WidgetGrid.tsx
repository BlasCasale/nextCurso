'use client'
import React from 'react'
import { SimpleWidget } from './SimpleWidget'
import { FaCartShopping } from 'react-icons/fa6'
import { BsArrowCounterclockwise } from 'react-icons/bs'
import { useAppSelector } from '@/store'

export const WidgetGrid = () => {

  const counter = useAppSelector(state => state.counter.count)

  return (
    <div className='flex flex-wrap p-2 w-full justify-center gap-3'>
      <SimpleWidget
        title='Carrito de compras'
        subtitle='Productos elegidos'
        href='/'
        icon={<FaCartShopping size={50} className='text-blue-600' />}
      />
      <SimpleWidget
        title='Contador'
        subtitle='Ver estado del contador'
        href='/dashboard/counter'
        icon={<BsArrowCounterclockwise size={50} className='text-blue-600' />}
        label={`${counter}`}
      />
    </div>
  )
}
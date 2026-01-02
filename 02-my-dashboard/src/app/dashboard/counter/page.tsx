import React from 'react'
import { Metadata } from 'next';
import CartCounter from '@/shoppingCart/components/CartCounter';

export const metadata: Metadata = {
  title: 'Shopping Cart',
  description: 'A simple shopping cart page with increment and decrement functionality.',
}

export default function CounterPage() {

  return (
    <div className='flex flex-col items-center justify-center w-full h-full'>
      <span>Counter</span>

      <CartCounter value={10} />
    </div>
  )
}

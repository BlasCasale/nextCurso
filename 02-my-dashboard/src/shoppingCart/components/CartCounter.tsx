'use client'
import { useEffect } from 'react'
import { Button } from '@/components/Button'
import { useAppDispatch, useAppSelector } from '@/store'
import { addOne, initCounterState, substractOne } from '@/store/counter/counterSlice'
import React from 'react'

interface Props {
  value?: number
}

export interface CounterResponse {
  method: string;
  count: number;
}

const getApiCounter = async (): Promise<CounterResponse> => {
  const result = await fetch('/api/counter').then(res => res.json())

  return result
}

export default function CartCounter({ value = 0 }: Props) {

  const count = useAppSelector(state => state.counter.count)
  const dispatch = useAppDispatch()

  const increment = () => dispatch(addOne())
  const decrement = () => dispatch(substractOne())

  useEffect(() => {
    getApiCounter().then(({ count }) => dispatch(initCounterState(count)))
  }, [dispatch])

  const styles = 'flex items-center justify-center rounded-xl transition-all text-white p-2 w-14 bg-gray-500 hover:bg-gray-600 hover:cursor-pointer'

  return (
    <>
      <span className='text-9xl'>{count}</span>

      <div className="flex">
        <Button onClick={decrement} label="-" class={styles} />
        <Button onClick={increment} label="+" class={styles} />
      </div>
    </>
  )
}
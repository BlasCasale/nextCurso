'use client'
import React from 'react'
import { IoCheckboxOutline, IoSquareOutline } from 'react-icons/io5'
// import * as api from '@/todos/helpers/todos'
// import { useRouter } from 'next/navigation'
// import { toggleTodo } from '../actions/todos-actions'

interface Props {
  complete: boolean
  id: string
  onToggle: (id: string, complete: boolean) => void
}

export const TodoButton = ({ id, complete, onToggle }: Props) => {
  // const router = useRouter()

  // const toggleTodo = async () => {
  //   await api.updateTodo(id, !complete)
  //   router.refresh()
  // }

  return (
    <div className={`
          flex p-2 rounded-md hover:bg-opacity-60 bg-blue-100 hover:cursor-pointer
          ${complete ? 'bg-blue-100' : 'bg-red-100'}
          `}
      onClick={() => onToggle(id, !complete)}
    >
      {
        complete
          ? <IoCheckboxOutline size={30} />
          : <IoSquareOutline size={30} />
      }
    </div>
  )
}

'use client'
import { Todo } from '@prisma/client'
import React, { startTransition, useOptimistic } from 'react'
import { TodoButton } from './TodoButton'
import { toggleTodo } from '../actions/todos-actions'

interface Props {
  todo: Todo
}

export const TodoCard = ({ todo }: Props) => {

  const [todoOptimistic, setTodoOptimistic] = useOptimistic(
    todo,
    (state, newState: boolean) => ({ ...state, complete: newState })
  )

  const onToggle = async () => {
    try {
      startTransition(() => setTodoOptimistic(!todoOptimistic.complete))
      await toggleTodo(todoOptimistic.id, !todoOptimistic.complete)
    } catch (error) {
      startTransition(() => setTodoOptimistic(!todoOptimistic.complete))
    }
  }

  const cardStyles = todoOptimistic.complete
    ? "line-through bg-blue-50 border-blue-500"
    : "bg-red-50 border-red-500"

  return (
    <div className={cardStyles}>
      <div className='flex flex-col sm:flex-row justify-start items-center gap-4'>
        <TodoButton id={todoOptimistic.id} complete={todoOptimistic.complete} onToggle={onToggle} />
        <div className='text-center sm:text-left'>
          <span>{todoOptimistic.description}</span>
        </div>
      </div>
    </div>
  )
}

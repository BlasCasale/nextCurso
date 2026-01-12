import { Todo } from '@prisma/client'
import React from 'react'
import { TodoButton } from './TodoButton'

export const TodoCard = ({ complete, created_at, description, id, updated_at }: Todo) => {

  const cardStyles = complete
    ? "line-through bg-blue-50 border-blue-500"
    : "bg-red-50 border-red-500"

  return (
    <div className={cardStyles}>
      <div className='flex flex-col sm:flex-row justify-start items-center gap-4'>
        <TodoButton id={id} complete={complete} />
        <div className='text-center sm:text-left'>
          <span>{description}</span>
        </div>
      </div>
    </div>
  )
}

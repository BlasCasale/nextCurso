import { Todo } from '@prisma/client'
import React from 'react'
import { TodoCard } from './TodoCard'

interface Props {
  todos: Todo[]
}

export const TodosGrid = ({ todos }: Props) => {

  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-2'>
      {
        todos.length > 0
          ? todos.map((todo) => (<TodoCard key={todo.id} {...todo} />))
          : <h2>No hay to do para este usuario</h2>
      }
    </div>
  )
}

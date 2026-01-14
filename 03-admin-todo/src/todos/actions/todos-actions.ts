'use server'

import { Todo } from "@prisma/client"
import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export const toggleTodo = async (id: string, complete: boolean): Promise<Todo> => {
  const todo = await prisma.todo.findFirst({ where: { id } })

  if (!todo) {
    throw `No existe un todo con el id ${id}`
  }

  const updatedTodo = await prisma.todo.update({
    where: { id },
    data: { complete }
  })

  revalidatePath('/dashboard/server-actions')
  return updatedTodo
}

interface ErrorResponse {
  message: string
}

interface SuccessfullResponse {
  message: string
  count: number
}

export const createTodo = async (description: string): Promise<Todo | ErrorResponse> => {

  try {
    const todo = await prisma.todo.create({
      data: { description }
    })

    revalidatePath('/dashboard/server-actions')

    return todo
  } catch (error) {
    return { message: 'error al crear to do' }
  }
}

export const deleteTodos = async (): Promise<SuccessfullResponse | ErrorResponse> => {
  try {
    const deletedTodos = await prisma.todo.deleteMany({ where: { complete: true } }).then((res) => res.count)

    revalidatePath('/dashboard/server-actions')

    return {
      message: 'Todos eliminados correctamente',
      count: deletedTodos
    }
  } catch (error) {
    return {
      message: 'Error al eleminiar los completados'
    }
  }
}
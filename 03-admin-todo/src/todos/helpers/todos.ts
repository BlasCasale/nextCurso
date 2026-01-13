import { Todo } from "@prisma/client";

export const updateTodo = async (id: string, complete: boolean): Promise<Todo> => {

  const body = JSON.stringify({ complete })

  const todo = await fetch(`/api/todos/${id}`, {
    method: 'PUT',
    body,
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((res) => res.json())

  return todo
}

export const createTodo = async (description: string): Promise<Todo> => {

  const body = JSON.stringify({ description })
  const createdTodo = await fetch('/api/todos', {
    method: 'POST',
    body,
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((res) => res.json())

  return createdTodo;
}

export const deleteTodos = async (): Promise<Todo> => {
  const deletedTodos = await fetch('/api/todos', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((res) => res.json())

  return deletedTodos
}
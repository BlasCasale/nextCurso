export const dynamic = 'force-dynamic'
export const revalidate = 0

import { NewTodo } from "@/components/todo/NewTodo";
import prisma from "@/lib/prisma";
import { TodosGrid } from "@/todos";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Rest page',
  description: 'Page builded at rest'
}

export default async function RestTodosPage() {

  const todos = await prisma.todo.findMany({ orderBy: { description: 'asc' } })

  return (
    <div>
      <div className="w-full px-3 mx-5 mb-5">
        <NewTodo />
      </div>
      <TodosGrid todos={todos} />
    </div>
  );
}
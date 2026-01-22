export const dynamic = 'force-dynamic'

import { getUserSessionServer } from "@/auth/actions/auth-actions";
import { NewTodo } from "@/components/todo/NewTodo";
import prisma from "@/lib/prisma";
import { TodosGrid } from "@/todos";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: 'Rest page',
  description: 'Page builded at rest'
}

export default async function RestTodosPage() {

  const user = await getUserSessionServer()

  if (!user) redirect('/api/auth/signin')

  const todos = await prisma.todo.findMany({
    where: { userId: user.id },
    orderBy: { description: 'asc' }
  })

  return (
    <div>
      <div className="w-full px-3 mx-5 mb-5">
        <NewTodo />
      </div>
      <TodosGrid todos={todos} />
    </div>
  );
}
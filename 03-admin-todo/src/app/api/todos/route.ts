import prisma from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) {

  const { searchParams } = new URL(request.url)
  const take = +(searchParams.get('take') ?? '10')

  if (isNaN(take)) {
    return NextResponse.json({ message: 'Se debe enviar un número en el parametro take' })
  }

  const skip = +(searchParams.get('skip') ?? 0)

  if (isNaN(skip)) {
    return NextResponse.json({ message: 'Se debe enviar un número en el parametro skip' })
  }

  const todos = await prisma.todo.findMany({
    take,
    skip
  })

  return new Response(JSON.stringify({
    message: 'Todos los todos',
    todos
  }));
}
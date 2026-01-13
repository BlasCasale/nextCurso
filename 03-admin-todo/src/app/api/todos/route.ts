import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from 'next/server'
import { boolean, object, string } from 'yup'

const postSchema = object({
  description: string().required(),
  complete: boolean().optional().default(false)
})

export async function POST(request: Request) {

  try {
    const { complete, description } = await postSchema.validate(await request.json())

    const todo = await prisma.todo.createManyAndReturn({
      data: {
        description,
        complete
      }
    })

    return NextResponse.json(todo);
  } catch (error) {
    return NextResponse.json(error, { status: 400 })
  }
}

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

export async function DELETE(request: Request) {
  try {
    const deleted = await prisma.todo.deleteMany({ where: { complete: true } })
    return NextResponse.json({ message: 'Se eliminaron los completados', deleted })
  } catch (error) {
    return NextResponse.json({ message: error })
  }
}
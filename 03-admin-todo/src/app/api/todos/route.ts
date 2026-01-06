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

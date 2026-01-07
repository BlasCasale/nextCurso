import prisma from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'
import { boolean, object, string } from 'yup'

interface Segments {
  params: {
    id: string
    limit?: string
    take?: string
  }
}

const getTodo = async (id: string) => {

  const todo = await prisma.todo.findFirst({ where: { id } })

  return todo
}

export async function GET(request: Request, { params }: Segments) {
  const { id } = await params

  if (!id) {
    return NextResponse.json({ message: 'Se debe enviar el id para actualizar el registro' })
  }

  const todo = await getTodo(id)

  if (!todo) {
    return NextResponse.json({ message: `No existe un to do con este id ${id}` })
  }

  return new Response(JSON.stringify({
    message: 'Se completo la petición',
    todo
  }), { status: 200 });
}

const putSchema = object({
  description: string().optional(),
  complete: boolean().optional()
})

export interface ErrorValidation {
  value: Value;
  path: string;
  type: string;
  params: Params;
  errors: string[];
  inner: unknown[];
  name: string;
  message: string;
}

export interface Params {
  value: string;
  originalValue: string;
  path: string;
  spec: Spec;
  disableStackTrace: boolean;
  type: string;
}

export interface Spec {
  strip: boolean;
  strict: boolean;
  abortEarly: boolean;
  recursive: boolean;
  disableStackTrace: boolean;
  nullable: boolean;
  optional: boolean;
  coerce: boolean;
}

export interface Value {
  description: string;
  complete: string;
}


export async function PUT(request: Request, { params }: Segments) {

  const { id } = await params

  if (!id) {
    return NextResponse.json({ message: 'Se debe enviar el id para actualizar el registro' }, { status: 404 })
  }

  const todo = await getTodo(id)

  if (!todo) {
    return NextResponse.json({ message: `No existe un to do con este id ${id}` })
  }

  try {
    const { description, complete } = await putSchema.validate(await request.json())

    const updatedTodo = await prisma.todo.update({
      where: { id },
      data: {
        description,
        complete
      }
    })

    return NextResponse.json({ message: 'Se completo', data: updatedTodo }, { status: 201 })
  } catch (error) {
    const response = error as ErrorValidation
    return NextResponse.json(response.errors)
  }
}
import prisma from '@/lib/prisma'
import bcrypt from 'bcryptjs'
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) {

  await prisma.todo.deleteMany()
  await prisma.user.deleteMany()

  // const todo = await prisma.todo.createMany({
  //   data: [
  //     { description: "Piedra del alma", complete: true },
  //     { description: "Piedra de la mente" },
  //     { description: "Piedra del espacio" },
  //     { description: "Piedra del tiempo" },
  //     { description: "Pïedra del poder" },
  //     { description: "Pïedra de la realidad" }
  //   ]
  // })

  const user = await prisma.user.create({
    data: {
      email: 'test@gmail.com',
      password: bcrypt.hashSync('123456'),
      roles: ['admin', 'user'],
      todos: {
        create: [
          { description: "Piedra del alma", complete: true },
          { description: "Piedra de la mente" },
          { description: "Piedra del espacio" },
          { description: "Piedra del tiempo" },
          { description: "Pïedra del poder" },
          { description: "Pïedra de la realidad" }
        ]
      }
    }
  })

  return NextResponse.json({ message: 'Seed funcionando' })
}
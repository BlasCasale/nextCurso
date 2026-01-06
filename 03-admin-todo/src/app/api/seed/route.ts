import prisma from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) {

  const todo = await prisma.todo.create({
    data: {
      description: "Piedra del alma"
    }
  })

  return NextResponse.json({ message: 'Seed funcionando', todo })
}
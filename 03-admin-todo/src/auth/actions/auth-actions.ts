import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export const getUserSessionServer = async () => {
  const session = await getServerSession(authOptions)

  return session?.user
}

export const signInWithEmailAndPassword = async (email: string, password: string) => {

  if (!email || !password) return null

  const user = await prisma.user.findUnique({ where: { email } })

  if (!user) return createUser(email, password)

  if (!user.isActive) return null

  if (bcrypt.compareSync(password, user.password ?? '')) return null

  return user
}

const createUser = async (email: string, password: string) => {
  const newUser = await prisma.user.create({
    data: {
      email,
      password: bcrypt.hashSync(password),
      name: email.split('@')[0]
    }
  })
  return newUser
}
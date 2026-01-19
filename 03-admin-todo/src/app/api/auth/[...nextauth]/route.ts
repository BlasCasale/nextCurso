import { PrismaAdapter } from "@auth/prisma-adapter"
import NextAuth, { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from 'next-auth/providers/google'
import prisma from '@/lib/prisma'
import { Adapter } from "next-auth/adapters"

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? '',
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ''
    })
  ],
  session: {
    strategy: "jwt"
  },
  callbacks: {
    async signIn({ user }) {
      console.log({ user })
      return true
    },
    async jwt({ token, user, account, profile }) {
      console.log({ token })
      const userDb = await prisma.user.findUnique({ where: { email: token.email! } })

      if (userDb) {
        token.roles = userDb?.roles ?? ['no-roles']
        token.id = userDb?.id
      }


      return token
    },
    async session({ session, user, token }) {
      console.log({ token })
      console.log({ session })

      if (session && session.user) {
        session.user.roles = token.roles as string[]
        session.user.id = token.id as string
      }

      return session
    }
  }

}

export const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
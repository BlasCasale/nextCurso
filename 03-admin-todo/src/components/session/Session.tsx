'use client'
import { useSession } from 'next-auth/react'
import React from 'react'
import { WaitingSession } from './WaitingSession'
import { SingIn } from './SingIn'
import { LogoutSession } from './LogoutSession'

export const Session = () => {

  const { data, status } = useSession()

  if (status === 'loading') return <WaitingSession />

  if (status === 'unauthenticated') return <SingIn />

  // Authenticated
  return <LogoutSession />
}

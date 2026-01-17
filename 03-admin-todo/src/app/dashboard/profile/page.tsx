'use client'
import { useSession } from "next-auth/react";
import Image from 'next/image';

export default function ProfilePage() {

  const { data: session } = useSession()

  return (
    <div>
      <h2>Page profile</h2>
      <div className="flex flex-col gap-2">
        <span>{session?.user?.email ?? 'No email'}</span>
        <span>{session?.user?.name ?? 'No name'}</span>
        <Image alt="No image" src={session?.user?.image ?? ''} height={50} width={50} />
      </div>
    </div>
  );
}
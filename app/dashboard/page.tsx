'use server'
import { logout } from '@/actions/auth/logout';
import { auth } from '@/auth';
import { Button } from '@/components/ui/button';
import getUser from '@/db/queries/users/getUser';
import { useSession } from 'next-auth/react'
import React from 'react'

export default async function Dashboard() {
  const session=await auth();
  const user=await getUser(session?.user?.email)
  return (
    <div>
      <form action={logout}>
                    <Button type="submit">Sign Out</Button>
                </form>
      {session?.user?.phone}
    </div>
  )
}

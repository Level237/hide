import { logout } from '@/actions/auth/logout';
import { auth } from '@/auth';
import {FormBtn} from '@/components/common/FormBtn';
import React from 'react'

export default async function ProfilePage() {
    const session=await auth();
  return (
    <div>
        <form action={logout}>
                    <FormBtn>Logout</FormBtn>
                </form>
        {session?.user?.name}
    </div>
  )
}

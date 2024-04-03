import { logout } from '@/actions/auth/logout';
import { auth } from '@/auth';
import {FormBtn} from '@/components/common/FormBtn';
import { HomeComponent } from '@/components/Home/Home';

import Header from '@/components/ui/Header';
import React from 'react'

export default async function ProfilePage() {
    const session=await auth();
  return (
    <div>
      <div className="bg-gray-900">
    <Header/>
    
    </div>
    <HomeComponent>
      dd
    </HomeComponent>
        <form action={logout}>
                    <FormBtn>Logout</FormBtn>
                </form>
        {session?.user?.name}
    </div>
  )
}

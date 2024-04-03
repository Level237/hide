import { logout } from '@/actions/auth/logout';
import { auth } from '@/auth';
import {FormBtn} from '@/components/common/FormBtn';
import HeaderAuth from '@/components/header/HeaderAuth';
import { HomeComponent } from '@/components/Home/Home';

import Header from '@/components/ui/Header';
import React from 'react'

interface ProfileShowPageProps{
  params:{
      slug:string;
  }
}
export default async function ProfilePage({params}:ProfileShowPageProps) {
  const {slug}=params
  
  const submenuNav = [
    { title: "Overview", path: "javascript:void(0)" },
    { title: "Integration", path: "javascript:void(0)" },
    { title: "Billing", path: "javascript:void(0)" },
    { title: "Transactions", path: "javascript:void(0)" },
    { title: "Plans", path: "javascript:void(0)" },
]

    const session=await auth();
  return (
    <div>
      <div className="bg-gray-900">
    <HeaderAuth>
    <nav className="">
                <ul className="flex items-center gap-x-3 max-w-screen-xl mx-auto px-4 overflow-x-auto lg:px-8">
                    {
                        submenuNav.map((item, idx) => {
                            return (
                                // Replace [idx == 0] with [window.location.pathname == item.path]
                                <li key={idx} className={`py-1 ${idx == 0 ? "border-b-2 border-primary" : ""}`}>
                                    <a href={item.path} className="block py-2 px-3 rounded-lg text-white hover:text-white hover:bg-[#ffffff15] duration-150">
                                        {item.title}
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
      </HeaderAuth>
    
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

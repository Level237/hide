'use server'

import { Avatar, AvatarFallback } from '../ui/avatar'
import { useSession } from 'next-auth/react'
import Link from 'next/link';
import { ArrowRightToLine } from 'lucide-react';
import { auth } from '@/auth';
import HeaderGuard from '@/components/header/HeaderGuard';
import HeaderAuth from '../header/HeaderAuth';

export default async function Header() {



  // Replace javascript:void(0) paths with your paths
  const navigation = [
      { title: "Features", path: "javascript:void(0)" },
      { title: "Integrations", path: "javascript:void(0)" },
      { title: "Customers", path: "javascript:void(0)" },
      { title: "Pricing", path: "javascript:void(0)" }
  ]



    const session=await auth();
    let authContent:React.ReactNode

  
    if(session?.user){
        authContent= <div>
<HeaderAuth firstName={session.user.name?.charAt(0)}/>
        
      </div>
    }else{
        authContent=<>
           <HeaderGuard/>
        </>
    }
  return authContent
}

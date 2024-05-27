'use client'

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { useSession } from 'next-auth/react'
import Link from 'next/link';

import HeaderGuard from './HeaderGuard';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';

import { Input } from '../ui/input';

import {
    Cloud,
    CreditCard,
    Github,
    Keyboard,
    LifeBuoy,
    LogOut,
    Mail,
    MessageSquare,
    Plus,
    PlusCircle,
    Search,
    Settings,
    User,
    UserPlus,
    Users,
  } from "lucide-react"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { logout } from '@/actions/auth/logout';
import DropdownAsChild from '../DropdownAsChild';


export default  function HeaderAuth(props?:any) {


    const [state, setState] = useState(false)
  // Replace javascript:void(0) paths with your paths


  useEffect(() => {
    document.onclick = (e) => {
        const target = e.target;
        
    };
}, [])

  const Brand = () => (
      <div className="flex items-center justify-between py-5 md:block">
          <Link href="/">
              <Image
                  src="/logo.png"
                  width={50}
                  height={50}
                  alt="Float UI logo"
              />
          </Link>
          <div className="md:hidden">
              
          </div>
      </div>
  )
   
    return(
     
<header   className='w-[100%]    max-lg:gap-y-6   sm:px-10 bg-[#282828] pb-2 font-[sans-serif] ' >
<section className='flex items-center justify-between'>
        <section className='flex items-center gap-3'>
            <Brand/>
            <div>
              <Input className='bg-[#363636] h-8 placeholder:text-sm rounded-xl placeholder:text-gray-400 border-[#363636]' type='text' placeholder='#Explore'/>
            </div>
        </section>
    </section>
          
          
          
       {props?.children}
        
        
      </header>
        
        )
}

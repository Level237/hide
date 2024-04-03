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
          <a href="javascript:void(0)">
              <Image
                  src="/logo.png"
                  width={50}
                  height={50}
                  alt="Float UI logo"
              />
          </a>
          <div className="md:hidden">
              
          </div>
      </div>
  )
   
    return(
     
<header   className='w-[100%]    max-lg:gap-y-6   sm:px-10 bg-gray-900 pb-2 font-[sans-serif] ' >
        <div className='flex flex-wrap items-center justify-between gap-x-2'>
        <div className='flex items-center gap-3'>
            <Brand/>
         <div className='text-white font-bold'> Dashboard</div>
            </div>
           
        <div className='flex gap-2 items-center'>
            <div className='relative'>
            <Input placeholder='Search' type='text' className='bg-transparent placeholder:pl-5 border-[0.1px] pl-7 border-[#ffffff4f] w-[290px] h-full focus: h-8  text-white hover:text-white  hover:bg-[#2dac5c3d]'/>
            <div className='absolute left-0 top-1 text-[#ffffff4f] w-12'>
                <Search className='w-4 mx-2'/>
            </div>
            </div>
        
            <Button variant="outline" className='bg-transparent border-[0.1px] border-[#ffffff4f] w-[50px] h-8  text-white hover:text-white  hover:bg-[#2dac5c3d]'><Plus className=''/></Button>
           
          <DropdownAsChild>
          <Avatar className='cursor-pointer'>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
        </Avatar>
          </DropdownAsChild>
     
        </div>
        </div>
          
          
          
       {props?.children}
        
        
      </header>
        
        )
}

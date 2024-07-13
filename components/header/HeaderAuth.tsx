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
  BellRingIcon,
    ChevronDown,
    Cloud,
    CreditCard,
    Github,
    Home,
    Keyboard,
    LifeBuoy,
    LogOut,
    Mail,
    MessageSquare,
    Mic,
    PanelsRightBottom,
    Plus,
    PlusCircle,
    Search,
    Settings,
    User,
    User2Icon,
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
     
<header   className='flex w-full mr-8 fixed items-center justify-around top-0 right-8 left-8' >


        <section className='flex flex-2 items-center gap-3 absolute top-0 left-0'>
        <div className="flex items-center justify-between py-5 md:block">
        <Link href="/">
            <Image
                src="/logo.png"
                width={45}
                height={45}
                alt="Float UI logo"
            />
        </Link>
        
    </div>
            <div className=''>
              <Input className='bg-[#363636] w-[15rem] h-10 placeholder:text-sm rounded-xl placeholder:text-gray-400 border-[#363636]' type='text' placeholder='#Explore'/>
              <section className='flex justify-center'>
              
              </section>
            </div>
        </section>
        <section className='flex   flex-1 gap-10 items-center justify-center absolute top-8'>
        <div>
        <Link href="/">
        <Home className='text-primary w-[1.4rem]'/>
          </Link>
          
        </div>
        <div>
          <Link href="/notification">
          <BellRingIcon className='text-gray-200 w-[1.4rem]'/>
          </Link>
          
        </div>
        <div>
          <Mic className='text-gray-200 w-[1.4rem]'/>
        </div>
        <div>
          <User2Icon className='text-gray-200 w-[1.4rem]'/>
        </div>
        
        </section>
  
        <section className='flex flex-2 absolute top-6 right-16  gap-7 ml-12 bg-[#363636] pr-3 py-1 pl-[0.1rem] rounded-lg items-center justify-between'>
          <section className='flex flex-2 gap-2 items-center justify-center'>
          <div>
       <Avatar style={{ background:"url('/profile.jpg')",backgroundPosition:"center",backgroundSize:"cover" }} className='cursor-pointer w-7 h-7 rounded-xl'>
            </Avatar>
    
       </div>
       <div>
          <h2 className='text-white text-sm'>Martin Lunel</h2>
        </div>
          </section>
       <section>
        <ChevronDown className='text-white fill-current w-4'/>
       </section>
        
        </section>
  
          
       {props?.children}
        
        
      </header>
        
        )
}

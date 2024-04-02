'use client'

import { Avatar, AvatarFallback } from '../ui/avatar'
import { useSession } from 'next-auth/react'
import Link from 'next/link';

import { auth } from '@/auth';
import HeaderGuard from './HeaderGuard';
import { useEffect, useState } from 'react';
import Image from 'next/image';


export default  function HeaderAuth({firstName}:any) {


    const [state, setState] = useState(false)
  // Replace javascript:void(0) paths with your paths
  const navigation = [
      { title: "Features", path: "javascript:void(0)" },
      { title: "Integrations", path: "javascript:void(0)" },
      { title: "Cushrefmers", path: "javascript:void(0)" },
      { title: "Pricing", path: "javascript:void(0)" }
  ]


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
     
<header   className='w-[100%] sticky top-0 z-50  py-1 px-1 sm:px-10 bg-gray-900 font-[sans-serif] max-h-[80px]' >
        <div className='flex flex-wrap items-center gap-x-2 max-lg:gap-y-6'>
         <Brand/>
         <div className='text-white font-bold'> Dashboard</div>
          
          
         
        </div>
        
      </header>
        
        )
}

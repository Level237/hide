'use client'

import { Avatar, AvatarFallback } from '../ui/avatar'
import { useSession } from 'next-auth/react'
import Link from 'next/link';
import { ArrowRightToLine } from 'lucide-react';
import { auth } from '@/auth';
import HeaderGuard from './HeaderGuard';
import { useEffect, useState } from 'react';

export default  function HeaderAuth() {


    const [state, setState] = useState(false)
  // Replace javascript:void(0) paths with your paths
  const navigation = [
      { title: "Features", path: "javascript:void(0)" },
      { title: "Integrations", path: "javascript:void(0)" },
      { title: "Customers", path: "javascript:void(0)" },
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
              <img
                  src="https://www.floatui.com/logo-dark.svg"
                  width={120}
                  height={50}
                  alt="Float UI logo"
              />
          </a>
          <div className="md:hidden">
              
          </div>
      </div>
  )
   
    return(
     
<header>
        <div className={`md:hidden ${state ? "mx-2 pb-5" : "hidden"}`}>
            <Brand />
        </div>
        <nav className={`pb-5 md:text-sm ${state ? "absolute z-20 top-0 inset-x-0 bg-gray-800 rounded-xl mx-2 mt-2 md:mx-0 md:mt-0 md:relative md:bg-transparent" : ""}`}>
            <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
                <Brand />
                <div className={`flex-1 items-center mt-8 md:mt-0 md:flex ${state ? 'block' : 'hidden'} `}>
                    <ul className="flex-1 justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                        {
                            navigation.map((item, idx) => {
                                return (
                                    <li key={idx} className="text-gray-300 hover:text-gray-400">
                                        <a href={item.path} className="block">
                                            {item.title}
                                        </a>
                                    </li>
                                )
                            })
                        }
                        <li>
                        <Avatar>
                
                <AvatarFallback className='font-bold bg-primary text-white'>m</AvatarFallback>
              </Avatar>
    
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
        
        )
}

'use client'


import React from 'react'
import HeaderAuth from './HeaderAuth'
import { useSession } from 'next-auth/react'

export default function HeaderProfile() {

    const session=useSession()
    const submenuNav = [
        { title: "Profile", path: `/profile/${session.data?.user?.name}` },
        { title: "Posts", path: `/profile/${session.data?.user?.name}?tab=posts` },
        { title: "Billing", path: "javascript:void(0)" },
        { title: "Transactions", path: "javascript:void(0)" },
        { title: "Plans", path: "javascript:void(0)" },
    ]
  return (
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
  )
}

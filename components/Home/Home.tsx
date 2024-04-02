'use server'

import { Loader2 } from 'lucide-react';
import { useSession } from 'next-auth/react'
import React from 'react'
import Hero from '../Hero';
import { auth } from '@/auth';


export default async function HomeComponent() {
    const session=await auth();

    let authContent:React.ReactNode;
    if(session?.user){
        authContent=<>
        <div className='text-white'></div>
        </>
    }else{
        authContent=<>
        <Hero/>
        </>
    }
  return authContent;
}

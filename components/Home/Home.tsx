'use server'

import { Loader2 } from 'lucide-react';
import { useSession } from 'next-auth/react'
import React from 'react'
import Hero from '../Hero';
import { auth } from '@/auth';
import HomeAuth from './HomeAuth';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  }
export  const HomeComponent=async({children}:any) =>{
    const session=await auth();

    let authContent:React.ReactNode;
    if(session?.user){
        authContent=<>
        {children}
        </>
    }else{
        authContent=<>
        <Hero/>
        </>
    }
  return authContent;
}

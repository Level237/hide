'use server'
import * as auth from "@/auth"
import { NextRequest, NextResponse } from 'next/server'
import { redirect } from "next/navigation";


export async function logout(request:NextRequest){
    
    await new Promise((resolve)=>setTimeout(resolve,2500))
    const logout=auth.signOut({redirect:false}).then(()=>{
        redirect('/')
    })
    //return NextResponse.redirect(new URL('/'))
    console.log(request);
    return logout;
}
'use server'
import * as auth from "@/auth"
import { redirect } from "next/navigation";


export async function logout(){
    
    await new Promise((resolve)=>setTimeout(resolve,2500))
    const logout=auth.signOut({redirect:true}).then(()=>{
        redirect('/')
    })
    //return NextResponse.redirect(new URL('/'))
    
    return logout;
}
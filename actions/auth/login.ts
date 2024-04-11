'use server'

import { signIn } from "@/auth";
import { AuthError } from "next-auth";

import { redirect } from "next/navigation";
import getUser from '@/db/queries/users/getUser';

export default async function LoginAction(formData:FormData){
    try{
        await new Promise((resolve)=>setTimeout(resolve,2500))
        await signIn('credentials',{
          email:formData.get('email'),
          password:formData.get('password'),
          redirect:false
        })
     
    }catch(error:unknown){
        if (error instanceof AuthError) {
            switch (error.type) {
              case 'CredentialsSignin':
                return 'Invalid credentials.';
              default:
                return 'Something went wrong.';
            }
          }
          console.log(error);
    }
    const user=await getUser(formData.get('email'))
    redirect(`profile/${user?.name}`)
}
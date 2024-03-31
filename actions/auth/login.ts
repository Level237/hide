'use server'

import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { revalidatePath } from "next/cache";

import { redirect } from "next/navigation";

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
    redirect('/dashboard')
}
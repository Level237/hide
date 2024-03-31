'use server'
import { signIn } from "@/auth";
import { db } from "@/db";
import { registerSchema } from "@/db/schema/register.schema";
import { redirect } from "next/navigation";
import {hash} from 'bcrypt';
interface createUserFormState{
  errors:{
    name?:string[],
    email?:string[],
    _form?:string[]
  }
  }


export async function registerAction(
  formState:createUserFormState,
formData:FormData
):Promise<createUserFormState>

{

  await new Promise((resolve)=>setTimeout(resolve,2500))
  const result= registerSchema.safeParse({
    name:formData.get('name'),
    email:formData.get('email'),
    phone:formData.get('phone'),
    password:formData.get('password')
  })

  
  if(!result.success){
    return{
      errors:result.error.flatten().fieldErrors
    }
  }
try {
  const hashedPassword=await hash(result.data.password,10)
   await db.user.create({
     data:{
      name:result.data.name,
      email:result.data.email,
      phone:result.data.phone,
      password:hashedPassword
     }
    })
   
} catch (error:unknown) {
    if(error instanceof Error){
      return {
        errors:{
          _form:[error.message]
        }
      }
    }
}
redirect('/login')

}
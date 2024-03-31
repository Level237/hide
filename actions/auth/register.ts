'use server'
import { signIn } from "@/auth";
import { db } from "@/db";

export async function register(
formData:FormData
){
try {
  const email=formData.get('email') as string
  const phone=formData.get('phone') as string
  const password=formData.get('password') as string
  const name=formData.get('name') as string
 
   await db.user.create({
     data:{
      name,
      email,
      phone,
      password
     }
    })
   
} catch (error) {
    
}

}
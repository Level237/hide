'use server'

import { auth } from "@/auth";
import { db } from "@/db"
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import NextTopLoader from 'nextjs-toploader';



export default async function CreatePost(formData:FormData){
await new Promise((receive)=>{
      setTimeout(receive,2000)
  })
    const session=await auth()
    const color=formData.get('color') as string;
    const content=formData.get('content') as string;
    const id=session?.user?.id as string
    try {
        await db.post.create({
            data:{
              bgColor:color,
              content:content,
              userId:id
            }
          })
    } catch (error) {
        if(error instanceof Error){
            throw new Error(error.message)
        }
    }
    
   redirect(`/profile/${session?.user?.name}`)
}
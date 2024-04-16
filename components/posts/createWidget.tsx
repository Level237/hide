'use client'

import React, { useState } from 'react'
import { Textarea } from '../ui/textarea'
import { CirclePlus, Mic, Send } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

export default function CreateWidget() {

    const [bgPost,setBgPost]=useState<string>("")
    const [color,setColor]=useState<string>("")

    const changeBgHandler=(color:string)=>{
        setBgPost(color)
        setColor("#fff")
        console.log(color);
    }
  return (
    <div className="bg-white relative rounded-3xl w-full py-[1rem] mt-3 flex justify-center">
  <div className="w-[90%] relative">
    <div className='flex justify-center gap-3 items-center'>
    <Avatar className='cursor-pointer'>
                <AvatarImage src="/hidd.jpg" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Textarea style={{ background:`${bgPost}`,color:`${color}` }} name='content' placeholder="Type your message here." className={`font-bold mt-5 w-full h-[2rem] flex justify-center relative overflow-y-hidden border-[#00000041] rounded-2xl placeholder:text-gray-300         text-black  text-xl`}  />
    </div>
  
  <div className="mt-5">
  <div className="flex  justify-center  items-center gap-3 ">
      <div onClick={()=>changeBgHandler("#000")}  className="bg-black p-4 rounded-full cursor-pointer">

      </div>
      <div onClick={()=>changeBgHandler("#2cac5c")} className="bg-primary p-4 rounded-full cursor-pointer">

      </div>
      <div className=" p-4 rounded-full cursor-pointer" onClick={()=>changeBgHandler("linear-gradient(to top left,#fcc5e4,#fda34b,#ff7882,#c8699e,#7046aa,#0c1db8,#020f75)")} style={{ background:"linear-gradient(to top left,#fcc5e4,#fda34b,#ff7882,#c8699e,#7046aa,#0c1db8,#020f75)" }}>

      </div>
      <div onClick={()=>changeBgHandler("linear-gradient(to top left,#000000,#434343)")} className=" p-4 rounded-full cursor-pointer" style={{ background:"linear-gradient(to top left,#000000,#434343)" }}>

      </div>
      <div className="cursor-pointer" >
        <Mic className="w-[2rem]"/>
      </div>
      <div className="cursor-pointer">
        <Link href="/new/post">
        <CirclePlus/>
        </Link>
        
      </div>
  </div>
 
  </div>
  
  </div>


 


</div>
  )
}



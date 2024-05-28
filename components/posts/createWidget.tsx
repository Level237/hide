'use client'

import React, { useState } from 'react'
import { Textarea } from '../ui/textarea'
import { CirclePlus, Mic, Send } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import Image from 'next/image'

export default function CreateWidget() {

    const [bgPost,setBgPost]=useState<string>("")
    const [color,setColor]=useState<string>("")

    const changeBgHandler=(color:string)=>{
        setBgPost(color)
        setColor("#fff")
        console.log(color);
    }
  return (
    <div className="bg-[#363636] py-5 relative rounded-3xl w-full   flex justify-center flex-col px-4 gap-2">
 
    <div className='flex  gap-3 '>
      <div>
      <Avatar style={{ background:"url('/profile.jpg')",backgroundPosition:"center",backgroundSize:"cover" }} className='cursor-pointer w-10 h-10 rounded-xl'>
            </Avatar>
      </div>
    
            <div className='flex flex-1 flex-col'>
              <div>
              <textarea name="" id="" placeholder='Tell your hide post to your friend' className={`font-bold placeholder:text-sm  w-full bg-[#282828] resize-none max-h-12 flex justify-center relative overflow-y-hidden border-[#00000041] rounded-2xl placeholder:text-[#ffffff21] py-4 px-3 cursor-pointer        text-white  text-sm`} ></textarea>
              </div>
            <div className="mt-2">
  <div className="flex justify-center items-center gap-5 ">
      <div   className="bg-[#282828] px-3 py-2 gap-1 flex items-center justify-center rounded-full cursor-pointer">
<div>
  <Image width="26" height="26" src='/photo.png' alt={'photo icon'}/>
</div>
<div>
  <h2 className='text-gray-300 text-sm'>Photos</h2>
</div>
      </div>
      <div   className="bg-[#282828] px-3 py-2 gap-1 flex items-center justify-center rounded-full cursor-pointer">
<div>
  <Image width="26" height="26" src='/pencil.png' alt={'photo icon'}/>
</div>
<div>
  <h2 className='text-gray-300 text-sm'>Simple post</h2>
</div>
      </div>
      <div   className="bg-[#282828] px-3 py-2 gap-1 flex items-center justify-center rounded-full cursor-pointer">
<div>
  <Image width="26" height="26" src='/mic.png' alt={'photo icon'}/>
</div>
<div>
  <h2 className='text-gray-300 text-sm'>Voice</h2>
</div>
      </div>
     
  </div>
 
  </div>
            </div>
       
        
    </div>
</div>
  )
}



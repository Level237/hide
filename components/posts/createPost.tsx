'use client'

import {AnimatePresence, motion,useAnimate} from "framer-motion"
import React, { useRef, useState } from 'react'
import { Textarea } from '../ui/textarea'
import { AlignHorizontalDistributeCenter, Bold, BookHeart, Camera, Circle, CircleStop, CloudUpload, Edit, Eye, File, FileQuestion, GalleryHorizontal, Home, Italic, ListMusic, LucideCircleSlash2, Mic, MicOff, MicVocalIcon, MoveLeft, Pause, PencilLine, Play, Save, Send, SendIcon, ShieldClose, Smile, SmilePlus, Speech, SpeechIcon, StickyNote, StopCircle, Trash, VenetianMaskIcon, Waves, X } from 'lucide-react'
import { Button } from '../ui/button'
import { PickerExample } from '../PicExample'
import { useRouter } from 'next/navigation'
import { Input } from '../ui/input'
import CreatePost from '@/actions/post/create'
import { FormBtn } from "../common/FormBtn"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { PostStore } from "@/store/PostStore"
import Image from "next/image"
import RecordMic from "./mic/RecordMic"


type PostType={
  type:string | null
}
export default function Post() {
  const  [visible,setVisible]=useState(false)
  const [scope,animate]=useAnimate();
  const changeBgHandler=PostStore((state)=>state.changeBgHandler)
  const [image,setImage]=useState<String>("")
  const [loadImage,setLoadImage]=useState<boolean>(false)
   const bgPost=PostStore((state)=>state.bgPost)
  
   return <> <div 
 
   className='  flex mt-6 gap-5 max-h-[100%]  items-stretch  overflow-y-hidden'>
     <section className="w-[25rem] mx-6 max-w-[300px]  fixed  py-8  bg-[#363636]  rounded-xl ">
      <section className="flex mx-5 flex-col gap-3">
        <div>
        <Image src="/logo.png" alt="logo" height={50} width={50} className="mx-auto" />
        </div>
        
        <div className="flex flex-col">
          <h2 className="text-sm text-gray-300 font-bold">Background Post</h2>
          </div>
         <div className="flex flex-col gap-4">
          

          <div>

<label className="inline-flex items-center cursor-pointer">
  <input type="checkbox" value="" className="sr-only peer" />
  <div className="relative w-11 h-6 bg-[#262626] rounded-full peer peer-focus:ring-4 peer-focus:ring-[#262626] dark:peer-focus:ring-[#262626] dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
  <span className="ms-3 text-sm font-medium text-gray-300 dark:text-gray-300">Hide Post</span>
</label>

<label className="inline-flex mt-3 items-center cursor-pointer">
  <input type="checkbox" value="" className="sr-only peer" />
  <div className="relative w-11 h-6 bg-[#262626] rounded-full peer peer-focus:ring-4 peer-focus:ring-[#262626] dark:peer-focus:ring-[#262626] dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
  <span className="ms-3 text-sm font-medium text-gray-300 dark:text-gray-300">Hide Comment</span>
</label>

          </div>

          </div>
       
          
      </section>
     </section>
     <section className="overflow-y-hidden right-[350px] fixed left-[350px]  bg-[#363636] rounded-2xl py-3 px-8">
     
     <form action={CreatePost} className=''>
      
       <div className='' >
    
          <>
          <div  className={`  overflow-y-hidden placeholder:text-gray-300 `}>
          

          <h2 className="text-2xl text-gray-300">Post</h2>
          <div className="flex overflow-x-hidden relative justify-center items-center w-[100%]">
            
           {visible &&  <div className="absolute top-[3rem] inset-0 z-20">
                  <RecordMic/>
            </div>}
           
           
           
          <textarea name="" id="" style={{ background:bgPost }} placeholder='Tell your hide post to your friend' className={`overflow-x-hidden  font-bold peer-focus:ring-[#262626] peer-focus:ring-4 mt-5 placeholder:text-sm px-24  w-full bg-[#282828] resize-none h-[12rem] flex justify-center relative overflow-y-hidden border-[#00000041] rounded-2xl placeholder:text-[#ffffff21] py-12  cursor-pointer        text-white  text-sm`} ></textarea>
          <div className="absolute top-12 left-8">
          <Avatar style={{ background:"url('/profile.jpg')",backgroundPosition:"center",backgroundSize:"cover" }} className='cursor-pointer w-9 h-9 rounded-xl'>
            </Avatar>
          </div>
          <div className="absolute right-4 top-8 left-24">

          </div>
          
          </div>
          <section className="flex items-center mt-4">
          <div className="grid grid-cols-8 flex-1 gap-8 ">
          <div onClick={()=>changeBgHandler("")} className="bg-[#262626]  cursor-pointer  w-8  flex items-center justify-center rounded-md">
<LucideCircleSlash2 className="text-red-500 w-4"/>
</div>
          <div onClick={()=>changeBgHandler("#2dac5c")} className="bg-primary cursor-pointer p-[0.7rem] rounded-md">

          </div>
          <div onClick={()=>changeBgHandler("#000C40")} className="bg-[#000C40] cursor-pointer p-[0.7rem] rounded-md">

          </div>
          <div  onClick={()=>changeBgHandler("#e65c00")} className="bg-[#e65c00] cursor-pointer p-[0.7rem] rounded-md">

          </div>
          <div onClick={()=>changeBgHandler("#4801FF")} className="bg-[#4801FF] cursor-pointer p-[0.7rem] rounded-md">

</div>
<div className="bg-[#262626]  cursor-pointer  w-8  flex items-center justify-center rounded-md">
<Image width="20" height="20" src='/palette.png' alt={'photo icon'}/>
</div>
          </div>
          <div className="flex flex-1 justify-end items-center gap-5">
         
          <div className="cursor-pointer">
          <Image width="24" height="24" src='/smile.png' alt={'photo icon'}/>
          </div>
          <div className="cursor-pointer">
          <Image width="24" height="24" src='/photo.png' alt={'photo icon'}/>
          </div>
         
            
            <Image onClick={()=>{
              if(visible){
                setVisible(false)
              }else{
                setVisible(true)
              }
            }} className="cursor-pointer" width="24" height="24" src='/mic.png' alt={'photo icon'}/>
            
          
          
          <div className="">
            <Button className="bg-primary hover:bg-[#363636] flex items-center gap-2 px-6 py-2 rounded-lg">
            <h2 className="text-gray-200 text-[0.8rem]">Send</h2>
            <SendIcon className="text-gray-200  w-4 h-4 cursor-pointer"/>
            </Button>
           
          </div>
         
         
          </div>
          </section>
         
          
          </div>
         
          </>
       </div>
       <Input type="hidden" name='color' value={bgPost} />
       <section className='  bottom-0 mx-5  w-[95vw] my-5 flex items-center justify-between absolute'>
      
       
       </section>
      
     </form>
   </section>
  
   </div></>
}



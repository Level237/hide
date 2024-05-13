'use client'

import {motion,useAnimate} from "framer-motion"
import React, { useEffect, useState } from 'react'
import { Textarea } from '../ui/textarea'
import { BookHeart, Circle, CircleStop, ListMusic, Mic, MicOff, MicVocalIcon, MoveLeft, Pause, Play, Save, Send, StopCircle, VenetianMaskIcon, Waves, X } from 'lucide-react'
import { Button } from '../ui/button'
import { PickerExample } from '../PicExample'
import { useRouter } from 'next/navigation'
import { Input } from '../ui/input'
import CreatePost from '@/actions/post/create'
import { FormBtn } from "../common/FormBtn"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import {parseAsString, useQueryState} from "nuqs"
import { PostStore } from "@/store/PostStore"
import PaletteContainer from "./PaletteContainer"
import paths from "@/path"

import PostMic from "./mic/PostMic"
import Image from "next/image"
import { Separator } from "../ui/separator"
import { z } from 'zod';
import Palette from "./Palette"


type PostType={
  type:string | null
}
export default function Post() {
  const searchParams=useQueryState('type',)
  const [query,setQuery]=useQueryState("type",{defaultValue:""})
  const [scope,animate]=useAnimate();
  const changeBgHandler=PostStore((state)=>state.changeBgHandler)

  const router=useRouter()
   const bgPost=PostStore((state)=>state.bgPost)
   const PostInit=<> <div 
 
   className='  flex h-[100vh] bg-blue-600 overflow-y-hidden'>
     <section className="w-[16rem] bg-white relative ">
      <section className="flex mx-5 flex-col gap-3">
        <div>
        <Image src="/full-logo.png" alt="logo" height={100} width={100} className="mx-auto" />
        </div>
        
        <div className="flex flex-col">
          <h2 className="text-sm">Type</h2>
          <div className="flex justify-around">
          <div   className='h-12 flex-col  mt-5 cursor-pointer  rounded-sm'>
           <VenetianMaskIcon className="h-6 w-6" onClick={()=>setQuery(c=> "recording")}/>
          
           </div>
           <div className="flex justify-center items-center">
           <Separator className="my-1 h-6 bg-slate-400" orientation="vertical" />
           </div>
           <div  className='h-12 flex flex-col mt-5 cursor-pointer  rounded-sm'>
           <Mic className="h-6 w-6" onClick={()=>setQuery(c=> "recording")}/>
           
           </div>
           <div className="flex justify-center items-center">
           <Separator className="my-1 h-6 bg-slate-400" orientation="vertical" />
           </div>
           <div  className='h-12 flex flex-col mt-5 cursor-pointer  rounded-sm'>
           <BookHeart onClick={()=>setQuery("")} className="h-6 w-6"/>
           
           </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-sm">background</h2>

          <Palette color="#2cac5c"/>

          </div>
  
          <div className="mt-[8rem] flex gap-5">
            <Button className="border-primary" variant="outline">Cancel</Button>
            <Button className="px-8">Save</Button>
          </div>
      </section>
     </section>
     <section className="flex-1">
     
     <form action={CreatePost} className=''>
      
       <div className='' >
        {query==="recording" && <div style={{ background:`${bgPost}` }} className={`font-bold overflow-y-hidden placeholder:text-gray-300     top-0 h-full py-[18rem]  text-center  text-white   text-xl`}>
          <motion.div
          ref={scope} 
          
          >

          <PostMic/>

          </motion.div>
          
          
          </div>}
          {!query  &&
          
          
          <Textarea name='content' placeholder="Type your message here." className={`font-bold overflow-y-hidden placeholder:text-gray-300     top-0 h-full py-[18rem]  text-center  text-white   text-xl`} style={{ background:`${bgPost}` }} />}
       
       <section className='absolute w-full top-1 mx-5  flex   items-center justify-between '>
        
       
       
       <motion.div className="p-2 hidden rounded-md left-[-11rem] bg-white absolute  justify-center top-[35vh]"
        
        whileHover={{ x:175}}
        transition={{ 
         duration:1
         }}
        >
       <PaletteContainer/>
       </motion.div>
     </section>
       </div>
       <Input type="hidden" name='color' value={bgPost} />
       <section className='  bottom-0 mx-5  w-[95vw] my-5 flex items-center justify-between absolute'>
       <div className=' bg-white py-2 px-8 flex   items-center gap-4 z-20'>

          
         
       </div>
       <div className='z-10'>
         <FormBtn className="bg-white hover:bg-current hover:bg-gray-200 text-black" >Publish<Send className='w-5 ml-2'/></FormBtn>
           
       </div>
       </section>
      
     </form>
   </section>
   </div></>
   let containerPost:React.ReactNode;

   if(query==="recording"){
    containerPost=PostInit
   }else if(!query){
    containerPost=PostInit
   }
  return containerPost
}


const PostContainer=({children}:{children:React.ReactNode})=>{
  
}



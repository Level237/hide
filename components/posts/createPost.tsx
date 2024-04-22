'use client'

import {motion,useAnimate} from "framer-motion"
import React, { useEffect, useState } from 'react'
import { Textarea } from '../ui/textarea'
import { BookHeart, Mic, MicOff, MicVocalIcon, MoveLeft, Palette, Save, Send, VenetianMaskIcon, Waves, X } from 'lucide-react'
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


type PostType={
  type:string | null
}
export default function Post(props:PostType) {
  const [query,setQuery]=useQueryState("type",parseAsString)
  const [scope,animate]=useAnimate();

  const handleAnimation=async()=>{
    await animate('#target',{x:0})
   await animate('#target',{y:150,rotate:"360deg"},{duration:0.5})

   await animate('#target',{x:0,y:150,rotate:"0deg"},{duration:0.5})
   
  
}
  const handleClickType=(type:string)=>{
   
    setQuery(type)
    
  }
 useEffect(()=>{
 
    props.type=query
  
  
 },[query])
  const router=useRouter()
   const bgPost=PostStore((state)=>state.bgPost)
   const PostInit=<> <motion.div 
   initial={{ scale:0,opacity:0 }}
   animate={{ scale:1,opacity:1 }}
   className='relative h-[100vh]'>
     
     <section className='container'>
     <h2 className='text-center font-bold text-2xl'>New Post</h2>
     <form action={CreatePost} className='mt-5'>
      
       <div className='mt-4 flex justify-center' >
        {props.type==="recording" && <div style={{ background:`${bgPost}` }} className={`font-bold mx-36 overflow-y-hidden placeholder:text-gray-300   absolute  top-0 h-full w-full p-60  text-center  text-white flex justify-center  text-xl`}>
          <motion.div
          ref={scope} 
          onClick={()=>handleAnimation()}
          >
<Mic id='target' className="w-16 h-16 cursor-pointer"/>
          </motion.div>
          
          
          </div>}
        {props.type==="" && <Textarea name='content' placeholder="Type your message here." className={`font-bold mx-36 overflow-y-hidden placeholder:text-gray-300   absolute  top-0 h-full py-60  text-center  text-white flex justify-center  text-xl`} style={{ background:`${bgPost}` }} />}
       
       <section className='absolute w-full top-1 mx-5  flex   items-center justify-between '>
         <X onClick={()=>router.back()} className='text-white w-[2rem] mx-5 cursor-pointer h-[2rem] '/>
       
       <div className='flex items-center gap-2 mx-5 mt-3'>
       <Avatar className='cursor-pointer'>
               <AvatarImage src="/hidd.jpg" alt="@shadcn" />
       <AvatarFallback>CN</AvatarFallback>
       </Avatar>
       </div>
       <motion.div className="p-2 rounded-md left-[-11rem] bg-white absolute flex justify-center top-[35vh]"
        
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
       <section className='  bottom-0  w-[95vw] my-5 flex items-center justify-between absolute'>
       <div className=' bg-white py-2 px-8 flex  justify-center items-center gap-4 z-20'>
           <div   className='h-12 mt-5 cursor-pointer  rounded-sm'>
           <VenetianMaskIcon className="h-8 w-8" onClick={()=>setQuery(c=> "recording")}/>
           </div>
           <div  className='h-12 mt-5 cursor-pointer  rounded-sm'>
           <Mic className="h-8 w-8" onClick={()=>setQuery(c=> "recording")}/>
           </div>
           <div  className='h-12 mt-5 cursor-pointer  rounded-sm'>
           <BookHeart onClick={()=>setQuery("book")} className="h-8 w-8"/>
           </div>
           
         
       </div>
       <div className='z-10'>
         <FormBtn className="bg-white hover:bg-current hover:bg-gray-200 text-black" >Publish<Send className='w-5 ml-2'/></FormBtn>
           
       </div>
       </section>
      
     </form>
   </section>
   </motion.div></>
   let containerPost:React.ReactNode;

   if(props.type==="recording"){
    containerPost=PostInit
   }else if(props.type===""){
    containerPost=PostInit
   }
  return containerPost
}


const PostContainer=({children}:{children:React.ReactNode})=>{
  
}



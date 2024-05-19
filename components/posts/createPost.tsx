'use client'

import {motion,useAnimate} from "framer-motion"
import React, { useEffect, useState } from 'react'
import { Textarea } from '../ui/textarea'
import { BookHeart, Circle, CircleStop, Edit, FileQuestion, GalleryHorizontal, ListMusic, Mic, MicOff, MicVocalIcon, MoveLeft, Pause, PencilLine, Play, Save, Send, StickyNote, StopCircle, Trash, VenetianMaskIcon, Waves, X } from 'lucide-react'
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
import Palette from "./Palette"


type PostType={
  type:string | null
}
export default function Post() {
  const searchParams=useQueryState('type',)
  const [query,setQuery]=useQueryState("type",{defaultValue:""})
  const [scope,animate]=useAnimate();
  const changeBgHandler=PostStore((state)=>state.changeBgHandler)
  const [image,setImage]=useState<String>("")
  const [loadImage,setLoadImage]=useState<boolean>(false)
  const router=useRouter()
   const bgPost=PostStore((state)=>state.bgPost)
   const PostInit=<> <div 
 
   className='  flex h-[100vh] bg-gray-100 overflow-y-hidden'>
     <section className="w-[20rem] bg-white relative ">
      <section className="flex mx-5 flex-col gap-3">
        <div>
        <Image src="/full-logo.png" alt="logo" height={100} width={100} className="mx-auto" />
        </div>
        
        <div className="flex flex-col">
          <h2 className="text-sm font-bold">Create a new Post</h2>
          <div className="flex flex-col gap-3 justify-around">
          <div   className=' flex justify-between items-center mt-5 cursor-pointer  rounded-sm'>
            <div className="flex items-center  gap-3 ">
            <PencilLine className="h-8 w-8 bg-gray-100 p-2 rounded-lg" onClick={()=>setQuery(c=> "media-post")}/>
          <div>
            <h2 className="text-sm">Post</h2>
          </div>
            </div>
           
           </div>
           
           <div   className='h-12 flex justify-between items-center cursor-pointer  rounded-sm'>
            <div className="flex items-center  gap-3 ">
            <StickyNote className="h-8 w-8 bg-gray-100 p-2 rounded-lg" onClick={()=>setQuery(c=> "simple-post")}/>
          <div>
            <h2 className="text-sm">Cover Post</h2>
          </div>
            </div>
           
           </div>
           
           <div   className='h-12 flex justify-between items-center cursor-pointer  rounded-sm'>
            <div className="flex items-center  gap-3 ">
            <Mic className="h-8 w-8 bg-gray-100 p-2 rounded-lg" onClick={()=>setQuery(c=> "recording")}/>
          <div>
            <h2 className="text-sm">Voice Post</h2>
          </div>
            </div>
           
           </div>
          
           <div   className='h-12 flex justify-between items-center  cursor-pointer  rounded-sm'>
            <div className="flex items-center  gap-3 ">
            <FileQuestion className="h-8 w-8 bg-gray-100 p-2 rounded-lg" onClick={()=>setQuery(c=> "media-post")}/>
          <div>
            <h2 className="text-sm">Poll Post</h2>
          </div>
            </div>
           
           </div>
          </div>
        </div>

        {query!=="media-post" &&  <div className="flex flex-col gap-4">
          <h2 className="text-sm">background</h2>

          <Palette color="#2cac5c"/>

          </div>}
       {query==="media-post" &&  <div className="flex flex-col gap-4">
          <h2 className="text-sm">Media</h2>


          <div className="  w-full h-12  bg-grey-lighter">

            {!image && <label className="flex flex-col items-center px-4 py-6   text-blue cursor-pointer border rounded-lg shadow-lg bg-gray-500">

{loadImage &&   
<div className="flex flex-col items-center justify-center gap-2">
<div role="status">
<svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-pink-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
</svg>
<span className="sr-only">Loading...</span>

</div>
<div>
  <span className="text-white">Loading...</span>
</div>
</div>
}
{!loadImage && <><svg width="20" height="20" viewBox="0 -0.5 18 18" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#ffffff" fill-rule="evenodd" d="M474.188327,259.775909 L480.842912,259.775909 L477.549999,256.482996 L474.375904,259.65709 C474.321124,259.71187 474.256777,259.751373 474.188327,259.775909 Z M474,258.618781 L474,247.775909 L486,247.775909 L486,254.968826 L483.657827,252.626653 C483.470927,252.439753 483.148791,252.4342 482.953529,252.629462 C482.940375,252.642616 482.928101,252.656403 482.916711,252.670736 C482.913161,252.674075 482.909651,252.677479 482.906183,252.680947 L479.034173,256.552957 L477.918719,255.437503 C477.808988,255.327771 477.655516,255.279359 477.507786,255.29536 C477.387162,255.302309 477.267535,255.351246 477.17513,255.44365 L474,258.618781 Z M482.257125,259.775909 L486,259.775909 L486,256.377007 L485.996984,256.380023 L483.309152,253.692192 L479.74128,257.260064 L482.257125,259.775909 Z M487,259.406871 L487.960593,259.541874 C488.51207,259.619379 489.020377,259.235606 489.097766,258.684953 L490.765938,246.815293 C490.843443,246.263816 490.459671,245.75551 489.909017,245.678121 L478.039358,244.009949 C477.487881,243.932444 476.979574,244.316216 476.902185,244.86687 L476.633887,246.775909 L474.006845,246.775909 C473.449949,246.775909 473,247.226689 473,247.782754 L473,259.769063 C473,260.32596 473.45078,260.775909 474.006845,260.775909 L485.993155,260.775909 C486.550051,260.775909 487,260.325128 487,259.769063 L487,259.406871 Z M487,258.397037 L488.10657,258.552556 L489.776647,246.669339 L477.89343,244.999262 L477.643739,246.775909 L485.993155,246.775909 C486.54922,246.775909 487,247.225857 487,247.782754 L487,258.397037 Z" transform="translate(-473 -244)"></path> </g></svg>
<span className="mt-2 text-white">Upload your file</span></>}

<input onChange={(e)=>{
  setLoadImage(true)
    setTimeout(()=>{
      if(e.target.files?.length===1){
      setImage(URL.createObjectURL(e.target.files[0]));
      setLoadImage(false)
    }
    },[2000])
    
 
}} type='file' className="hidden"/>

</label>}
  
</div>

          </div>}
          {image && query==="media-post" && <>
          <div className="flex flex-col mt-[-5rem]">
            <div className="flex mb-5 items-center justify-between">
            <div  className='p-2 flex items-center gap-2 bg-gray-600 mt-5 cursor-pointer  rounded-lg'>
              <div className="text-[0.7rem] text-white" ><h2>Edit</h2></div>
           <Edit className="h-4 w-4 text-white" onClick={()=>setQuery(c=> "recording")}/>
           
           </div>
           <div  className='p-2  flex items-center gap-2 bg-red-600 mt-5 cursor-pointer  rounded-lg'>
              <div className="text-[0.7rem] text-white" ><h2>Delete</h2></div>
           <Trash className="h-4 w-4 text-white" onClick={()=>setQuery(c=> "recording")}/>
           
           </div>
            </div>
            <div>
            <Image src={image} className="w-full h-[10rem]" width="100" height="100" alt="dd"/>
            </div>
          
          </div>
          </>}
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
          {query==="media-post" && <div  className={`mx-24 overflow-y-hidden placeholder:text-gray-300 mt-24  text-center  text-white   text-xl`}>
          <div>

          <h2 className="text-2xl text-black">Post</h2>
          <div>
            
          <Textarea  name='content' placeholder="Type your message here." className={`mt-5 w-full h-[9rem] flex justify-center relative overflow-y-hidden  rounded-2xl placeholder:text-gray-300         text-black  text-sm`}  />
          </div>
          </div>
          
          
          </div>}
          {!query || query=="simple-post"  &&
          
          
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
   }else if(!query || query==="simple-post"){
    containerPost=PostInit
   }else if(query==="media-post"){
    containerPost=PostInit
   }
  return containerPost
}


const PostContainer=({children}:{children:React.ReactNode})=>{
  
}



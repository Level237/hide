'use client'

import React, { useState } from 'react'
import { Textarea } from '../ui/textarea'
import { MoveLeft, Palette, Save, Send } from 'lucide-react'
import { Button } from '../ui/button'
import { PickerExample } from '../PicExample'
import { useRouter } from 'next/navigation'
import { Input } from '../ui/input'
import CreatePost from '@/actions/post/create'



export default function Post() {
  const router=useRouter()
    const [bgPost,setBgPost]=useState('#2dac5c')

    const changeBgHandler=(color:string)=>{
        setBgPost(color)
        console.log(color);
    }
  return (
    <div className='relative h-[100vh]'>
      
      <section className='container'>
      <h2 className='text-center font-bold text-2xl'>New Post</h2>
      <form action={CreatePost} className='mt-5'>
       
        <div className='mt-4 flex justify-center'>
        <Textarea name='content' placeholder="Type your message here." className={`font-bold mx-36 overflow-y-hidden placeholder:text-gray-300   absolute  top-0 h-full py-60  text-center  text-white flex justify-center  text-xl`} style={{ background:`${bgPost}` }} />
        <section className='absolute w-full top-1  flex   items-center justify-between '>
          
        <Button onClick={()=>router.back()} className='bg-transparent text-primary mx-12 hover:bg-transparent'><MoveLeft/>Back</Button>
        <div className='flex items-center gap-2'>
        <Button className='mx-12'>Publier <Save className='w-5 ml-2'/></Button>
        </div>
        
      </section>
        </div>
        <Input type="hidden" name='color' value={bgPost} />
        <section className='  bottom-0  w-[95vw] my-5 flex items-center justify-between absolute'>
        <div className='mt-5  w-[14rem] grid grid-cols-4 gap-4 z-20'>
            <div  onClick={()=>changeBgHandler("#2cac5c")} className='h-12 cursor-pointer bg-primary rounded-sm'>

            </div>
            <div onClick={()=>changeBgHandler("#ff0000")} className='h-12 cursor-pointer bg-[#ff0000] rounded-sm'>

            </div>
            <div onClick={()=>changeBgHandler("#000")} className='h-12 cursor-pointer bg-[#000] rounded-sm'>

            </div>
            <div className='h-12 relative flex flex-row justify-center items-center cursor-pointer bg-gray-200 border-[0.03px] border-primary rounded-sm'>
                <Palette/>
                <PickerExample changeBgHandler={changeBgHandler}/>
                
            </div>
          
        </div>
        <div className='z-10'>
            <Button variant="outline" type='submit'>Publish <Send className='w-5 ml-2'/></Button>
        </div>
        </section>
       
      </form>
    </section>
    </div>
  )
}



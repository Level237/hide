'use client'

import React, { useState } from 'react'
import { Textarea } from '../ui/textarea'
import { Palette } from 'lucide-react'
import { Button } from '../ui/button'
import { PickerExample } from '../PicExample'

export default function Post() {

    const [bgPost,setBgPost]=useState('#2dac5c')

    const changeBgHandler=(color:string)=>{
        setBgPost(color)
    }
  return (
    <div>
      <section className='container mt-[4rem] '>
      <h2 className='text-center font-bold text-2xl'>New Post</h2>
      <form action="" className='mt-5'>
       
        <div className='mt-4 flex justify-center'>
        <Textarea placeholder="Type your message here." className={`font-bold mx-36 overflow-y-hidden placeholder:text-gray-300  py-[5rem]  text-center h-[15rem] text-white flex justify-center text-xl bg-[${bgPost}]`} />
        
        </div>
        <section className=' mx-36 flex items-center justify-between'>
        <div className='mt-5  w-[14rem] grid grid-cols-4 gap-4'>
            <div  onClick={()=>changeBgHandler("#2cac5c")} className='h-12 cursor-pointer bg-primary rounded-sm'>

            </div>
            <div onClick={()=>changeBgHandler("#ff0000")} className='h-12 cursor-pointer bg-[#ff0000] rounded-sm'>

            </div>
            <div onClick={()=>changeBgHandler("#000")} className='h-12 cursor-pointer bg-[#000] rounded-sm'>

            </div>
            <div className='h-12 relative flex flex-row justify-center items-center cursor-pointer bg-gray-200 border-[0.03px] border-primary rounded-sm'>
                <Palette/>
                <PickerExample changeBg={()=>setBgPost}/>
            </div>
            
        </div>
        <div>
            <Button>Publier</Button>
        </div>
        </section>
       
      </form>
    </section>
    </div>
  )
}

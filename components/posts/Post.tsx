'use client'

import React, { useState } from 'react'
import { Textarea } from '../ui/textarea'
import { MoveLeft, Palette, Save } from 'lucide-react'
import { Button } from '../ui/button'
import { PickerExample } from '../PicExample'
import { useRouter } from 'next/navigation'


export default function Post() {
  const router=useRouter()
    const [bgPost,setBgPost]=useState('#2dac5c')

    const changeBgHandler=(color:string)=>{
        setBgPost(color)
        console.log(color);
    }
  return (
    <div>
      <section className='h-16 flex  bg-gray-50 items-center justify-between  border-b-[0.03px] border-primary'>
        <Button onClick={()=>router.back()} className='bg-transparent text-primary mx-12 hover:bg-transparent'><MoveLeft/>Back</Button>
        <div className='flex items-center gap-2'>
        <Button className='mx-12'>Publier <Save className='w-5 ml-2'/></Button>
        </div>
        
      </section>
      <section className='container mt-[4rem] '>
      <h2 className='text-center font-bold text-2xl'>New Post</h2>
      <form action="" className='mt-5'>
       
        <div className='mt-4 flex justify-center'>
        <Textarea placeholder="Type your message here." className={`font-bold mx-36 overflow-y-hidden placeholder:text-gray-300  py-[6rem]  text-center h-[15rem] text-white flex justify-center text-xl`} style={{ background:`${bgPost}` }} />
        
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
                <PickerExample changeBgHandler={changeBgHandler}/>
                
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



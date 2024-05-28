import React from 'react'
import { Brand } from '../ui/Logo'
import { Input } from '../ui/input'
import Link from 'next/link'
import Image from 'next/image'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Separator } from '../ui/separator'
import { Button } from '../ui/button'
export default function HomeSidebar() {
  return (
  
    <section  className='fixed mt-24 scroll-m-0 top-0 bottom-0 overflow-y-scroll flex flex-col gap-3  max-w-[300px]'>
   
    <section className=''>
    <Card className="w-full pb-0 max-w-full rounded-2xl bg-[#363636] border-[#363636]">
      <CardHeader className='h-32 opacity-[0.5] rounded-2xl  relative' style={{ background:"url('/cover.jpg')",backgroundPosition:"center",backgroundSize:"cover" }}>
        
        
       
      </CardHeader>
      <Separator className='bg-[#363636]'/>
      <CardContent>
        <section className='flex flex-col gap-3'>
        <section className='flex justify-center gap-16 items-start'>
          <div className='flex flex-col mt-3 justify-center items-center'>
            <h2 className='text-white font-bold'>197</h2>
            <span className='text-sm text-gray-400'>Followers</span>
          </div>
        <div className='flex justify-center items-center'>
        <div style={{ background:"url('/profile.jpg')",backgroundPosition:"center",backgroundSize:"cover" }} className='absolute left-[40%]   rounded-[28%] w-[4.6rem] h-[4.6rem] '>

</div>
        </div>
        <div className='flex mt-3 flex-col justify-center items-center'>
            <h2 className='text-white font-bold'>197</h2>
            <span className='text-sm text-gray-400'>Posts</span>
          </div>
        </section>
        <section className='flex flex-col'>
          <h2 className='text-center font-bold text-white'>Martin Lunel</h2>
          <h2 className='text-center text-sm font-bold text-gray-400'>#Level</h2>
        </section>
        <section>
       <h2 className='w-full text-white text-center text-sm'> 😄🚀👨‍💻Hello i{`'`}m level.i{`'`}m Frontend developper..Follow me please </h2>
        </section>
      
        </section> 
       
      
      </CardContent>
      <CardFooter className="flex justify-between">
      <Button className='w-full bg-[#4d4b4b]'>My Profile</Button>
      </CardFooter>
    </Card>
    </section>
    <section className='flex flex-col gap-5'>
      <section>
      <h2 className='text-white'>Interesting</h2>
      </section>
     <section className='grid grid-cols-3 gap-2'>

      <div className='py-2  text-center bg-[#363636] text-white text-sm rounded-xl'>
     Sport
      </div>
      <div className='py-2  text-center bg-[#363636] text-white text-sm rounded-xl'>
      Management
      </div>
      <div className='py-2  text-center bg-[#363636] text-white text-sm rounded-xl'>
     Life
      </div>
      <div className='py-2  text-center bg-[#363636] text-white text-sm rounded-xl'>
    Programming
      </div>
      <div className='py-2  text-center bg-[#363636] text-white text-sm rounded-xl'>
     Gamming
      </div>
      <div className='py-2  text-center bg-[#363636] text-white text-sm rounded-xl'>
    Humor
      </div>
     
     </section>
    </section>
    <section className='flex flex-col gap-2'>
      <section>
      <h2 className='text-white'>Friends</h2>
      </section>
     <section className='flex flex-col gap-2'>

      <div className='py-2  text-center bg-[#363636] text-white text-sm rounded-xl'>
     Sport
      </div>
      <div className='py-2  text-center bg-[#363636] text-white text-sm rounded-xl'>
      Management
      </div>
      <div className='py-2  text-center bg-[#363636] text-white text-sm rounded-xl'>
     Life
      </div>
      <div className='py-2  text-center bg-[#363636] text-white text-sm rounded-xl'>
    Programming
      </div>
      <div className='py-2  text-center bg-[#363636] text-white text-sm rounded-xl'>
     Gamming
      </div>
      <div className='py-2  text-center bg-[#363636] text-white text-sm rounded-xl'>
    Humor
      </div>
     
     </section>
    </section>
    </section>
   
  
  )
}

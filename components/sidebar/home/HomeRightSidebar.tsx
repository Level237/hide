import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
export default function HomeRightSidebar() {
  return (
    <section  className='fixed mt-[5.5rem] right-0 bg-[#363636] px-4 rounded-xl py-3 mx-8  top-0 bottom-0 overflow-y-scroll flex flex-col gap-3  max-w-[300px]'>
   
   <section className='flex flex-col gap-2'>
    <div>
    <h2 className=' text-white'>
        Recent activity
    </h2>
    </div>
   <section className='flex flex-col'>
    <div className='flex flex-col gap-4'>
        <div className='flex flex-col  items-center gap-4 bg-[#282828a4]  px-5 py-3 rounded-xl'>
            <div className='flex gap-2 items-center'>
            <div>
            <Avatar style={{ background:"url('/profile2.jpg')",backgroundPosition:"center",backgroundSize:"cover" }} className='cursor-pointer w-8 h-8 rounded-xl'>
                    
                   
                    </Avatar>
            </div>
            <div className='flex flex-col'>
                <div >
                <h2 className='text-white text-sm'>Zed Camara</h2>
                </div>
                <div className='leading-4'>
                    <span className='text-[0.8rem] text-gray-400'>has replied your post <span className='text-primary '> - 3 min ago</span>  </span>
                </div>
            </div>
            </div>
            
            <div className='bg-[#282828] rounded-lg gap-2  justify-around py-3 px-2 flex items-center'>
                
                <button className='text-[0.78rem]  bg-[#4d4b4b75] text-white py-1 px-10 rounded-md'>Ignore</button>
                <button className='text-[0.78rem]  bg-primary text-white py-1 px-10 rounded-md'>View</button>
               
            </div>
        </div>
        <div className='flex flex-col  items-center gap-4 bg-[#282828a4]  px-5 py-3 rounded-xl'>
            <div className='flex gap-2 items-center'>
            <div>
            <Avatar style={{ background:"url('/profile1.jpg')",backgroundPosition:"center",backgroundSize:"cover" }} className='cursor-pointer w-8 h-8 rounded-xl'>
                    
                   
                    </Avatar>
            </div>
            <div className='flex flex-col'>
                <div >
                <h2 className='text-white text-sm'>Ibrahima Djamilatou</h2>
                </div>
                <div className='leading-4'>
                    <span className='text-[0.8rem] text-gray-400'>has replied your post <span className='text-primary '> - 3 min ago</span>  </span>
                </div>
            </div>
            </div>
            
            <div className='bg-[#282828] rounded-lg gap-2  justify-around py-3 px-2 flex items-center'>
                
                <button className='text-[0.78rem]  bg-[#4d4b4b75] text-white py-1 px-10 rounded-md'>Ignore</button>
                <button className='text-[0.78rem]  bg-primary text-white py-1 px-10 rounded-md'>View</button>
               
            </div>
        </div>
        <div className='flex flex-col  items-center gap-4 bg-[#282828a4]  px-5 py-3 rounded-xl'>
            <div className='flex gap-2 items-center'>
            <div>
            <Avatar style={{ background:"url('/profile3.jpg')",backgroundPosition:"center",backgroundSize:"cover" }} className='cursor-pointer w-8 h-8 rounded-xl'>
                    
                   
                    </Avatar>
            </div>
            <div className='flex flex-col'>
                <div >
                <h2 className='text-white text-sm'>Romila Miezi(Grace)</h2>
                </div>
                <div className='leading-4'>
                    <span className='text-[0.8rem] text-gray-400'>has send a invitation <span className='text-primary '> - 3 min ago</span>  </span>
                </div>
            </div>
            </div>
            
            <div className='bg-[#282828] rounded-lg gap-2  justify-around py-3 px-2 flex items-center'>
                
                <button className='text-[0.78rem]  bg-[#4d4b4b75] text-white py-1 px-10 rounded-md'>Ignore</button>
                <button className='text-[0.78rem]  bg-primary text-white py-1 px-10 rounded-md'>View</button>
               
            </div>
        </div>
        <div className='flex flex-col  items-center gap-4 bg-[#282828a4]  px-5 py-3 rounded-xl'>
            <div className='flex gap-2 items-center'>
            <div>
            <Avatar style={{ background:"url('/anonymous.jpg')",backgroundPosition:"center",backgroundSize:"cover" }} className='cursor-pointer w-8 h-8 rounded-xl'>
                    
                   
                    </Avatar>
            </div>
            <div className='flex flex-col'>
                <div >
                <h2 className='text-white text-sm'>Anonymous</h2>
                </div>
                <div className='leading-4'>
                    <span className='text-[0.8rem] text-gray-400'>has replied your post <span className='text-primary '> - 3 min ago</span>  </span>
                </div>
            </div>
            </div>
            
            <div className='bg-[#282828] rounded-lg gap-2  justify-around py-3 px-2 flex items-center'>
                
                <button className='text-[0.78rem]  bg-[#4d4b4b75] text-white py-1 px-10 rounded-md'>Ignore</button>
                <button className='text-[0.78rem]  bg-primary text-white py-1 px-10 rounded-md'>View</button>
               
            </div>
        </div>
    </div>
   </section>
   </section>
    </section>
  )
}

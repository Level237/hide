import { LucideMessageSquare, Mic, Share, ThumbsUp } from 'lucide-react'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

export default function RecentPost() {
  return (
    <div className="grid grid-cols-3 gap-3 mb-6 mt-5">
    <div className=" max-h-96 p-3 px-8 rounded-2xl " style={{ background:"linear-gradient(to top left,#000000,#434343)" }}>
        <div className="flex justify-between w-[5rem] gap-3 ">
        <Avatar className='cursor-pointer'>
                    <AvatarImage src="/hidd.jpg" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
            </Avatar>
    
            <div className="flex flex-col">
              <h2 className="font-bold text-md " style={{ color:"white" }}>#uizog234</h2>
              <span className="text-sm text-gray-500 text-primary">1h ago</span>
            </div>
        </div>
        <div className="mt-5">
          <h2 className="text-3xl font-bold" style={{ color:"white" }}>-How create post in Hide ,Please..I have forget that...</h2>
        </div>
        <div className='flex  justify-between text-white mt-5'>
          <div className='flex items-center gap-1'>
          <ThumbsUp/><span className='text-[0.8rem]'>0</span> 
          
          </div>
        <div className='flex items-center gap-1'>
          <Mic/><span className='text-[0.8rem]'>0</span> 
        </div>
        <div className='flex items-center gap-1'>
        <LucideMessageSquare/> <span className='text-[0.8rem]'>0</span> 
        </div>
        <div className='flex items-center gap-1'>
        <Share/> <span className='text-[0.8rem]'>0</span> 
        </div>
        </div>
    </div>
    <div className=" max-h-96 p-3 px-8 rounded-2xl " style={{ background:"linear-gradient(to top left,#fcc5e4,#fda34b,#ff7882,#c8699e,#7046aa,#0c1db8,#020f75)" }}>
        <div className="flex justify-between w-[5rem] gap-3 ">
        <Avatar className='cursor-pointer'>
                    <AvatarImage src="/hidd.jpg" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
            </Avatar>
    
            <div className="flex flex-col">
              <h2 className="font-bold text-md " style={{ color:"white" }}>#uizog234</h2>
              <span className="text-sm text-gray-500 text-primary">3h ago</span>
            </div>
        </div>
        <div className="mt-5">
          <h2 className="text-3xl font-bold" style={{ color:"white" }}>-Hello i like this social media.it{`'`} very beautiful post...</h2>
        </div>
        <div className='flex  justify-between text-white mt-5'>
          <div className='flex items-center gap-1'>
          <ThumbsUp/><span className='text-[0.8rem]'>50</span> 
          
          </div>
        <div className='flex items-center gap-1'>
          <Mic/><span className='text-[0.8rem]'>0</span> 
        </div>
        <div className='flex items-center gap-1'>
        <LucideMessageSquare/> <span className='text-[0.8rem]'>0</span> 
        </div>
        <div className='flex items-center gap-1'>
        <Share/> <span className='text-[0.8rem]'>0</span> 
        </div>
        </div>
    </div>
    <div className=" max-h-96 p-3 px-8 rounded-2xl " style={{ background:"linear-gradient(to top left,#40E0D0,#FF8C00,#FF0080)" }}>
        <div className="flex justify-between w-[5rem] gap-3 ">
        <Avatar className='cursor-pointer'>
                    <AvatarImage src="/hidd.jpg" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
            </Avatar>
    
            <div className="flex flex-col">
              <h2 className="font-bold text-md " style={{ color:"white" }}>#ehjyyzt45</h2>
              <span className="text-sm text-gray-500 text-primary">3h ago</span>
            </div>
        </div>
        <div className="mt-5">
          <h2 className="text-3xl font-bold" style={{ color:"white" }}>-how create a voice in my post..i don{`'`}t know how create..</h2>
        </div>
        <div className='flex  justify-between text-white mt-5'>
          <div className='flex items-center gap-1'>
          <ThumbsUp/><span className='text-[0.8rem]'>50</span> 
          
          </div>
        <div className='flex items-center gap-1'>
          <Mic/><span className='text-[0.8rem]'>0</span> 
        </div>
        <div className='flex items-center gap-1'>
        <LucideMessageSquare/> <span className='text-[0.8rem]'>0</span> 
        </div>
        <div className='flex items-center gap-1'>
        <Share/> <span className='text-[0.8rem]'>0</span> 
        </div>
        </div>
    </div>
    </div>
  )
}

import { Heart, LucideMessageSquare, MoreHorizontal, SendIcon, Share } from 'lucide-react'
import React from 'react'
import { Textarea } from '../ui/textarea'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import PostVoice from './PostVoice'

export default function PostList() {
  return (
    <div className="mt-5 flex flex-col gap-3">
  <div className="bg-white px-12 py-12 mb-6 rounded-3xl">
    <div className="flex justify-between">
    <div className="flex justify-between w-[5rem] gap-3 ">
        <Avatar className='cursor-pointer'>
                    <AvatarImage src="/hidd.jpg" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
            </Avatar>
    
            <div className="flex flex-col">
              <h2 className="font-bold text-md " style={{ color:"black" }}>#uizog234</h2>
              <span className="text-sm text-gray-500 ">1h ago</span>
            </div>
        </div>
        <div className="">
       <MoreHorizontal/>
        </div>
    </div>
  
  <div className="mt-5 h-96 flex justify-center items-center  p-10 px-8 rounded-2xl " style={{ background:"linear-gradient(to top left,#000000,#434343)" }}>
        
        <div className="mt-5">
          <h2 className="text-3xl font-bold" style={{ color:"white" }}>-How create post in Hide ,Please..I have forget that...</h2>
        </div>
        
    </div>
    
    <div className="flex mt-5 justify-between items-center">
      <div className="flex items-center gap-3 flex-1">
        
      <Avatar className='cursor-pointer'>
                    <AvatarImage src="/hidd.jpg" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="w-full relative">
            <Textarea className="" placeholder="Enter your comment" />
            <div className="absolute bottom-6  right-4">
            <SendIcon className=""/> 
            </div>
            </div>
            
      </div>
      <div className='flex w-[12rem]  justify-around text-black mt-5'>
          <div className='flex items-center gap-1'>
          <Heart className="font-bold text-primary text-xl "/><span className='text-[0.8rem] text-primary font-bold'>3</span> 
          
          </div>
          <div className='flex items-center gap-1'>
          <LucideMessageSquare className=""/> <span className='text-[0.8rem]'>0</span> 
        </div>
        <div className='flex items-center gap-1'>
          <Share/><span className='text-[0.8rem]'>0</span> 
        </div>
       
        
        </div>
    </div>
  </div>
  <div className="bg-white px-12 py-12 mb-6 rounded-3xl">
    <div className="flex justify-between">
    <div className="flex justify-between w-[5rem] gap-3 ">
        <Avatar className='cursor-pointer'>
                    <AvatarImage src="/hidd.jpg" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
            </Avatar>
    
            <div className="flex flex-col">
              <h2 className="font-bold text-md " style={{ color:"black" }}>#uizog234</h2>
              <span className="text-sm text-gray-500 ">1h ago</span>
            </div>
        </div>
        <div className="">
       <MoreHorizontal/>
        </div>
    </div>
  
  <div className="mt-5 h-96 flex justify-center items-center  p-10 px-8 rounded-2xl " style={{ background:"linear-gradient(to top left,#40E0D0,#FF8C00,#FF0080)" }}>
        
        <div className="mt-5">
          <h2 className="text-3xl font-bold" style={{ color:"white" }}>-Hello i like this social media.it{`'`} very beautiful post...</h2>
        </div>
        
    </div>
    
    <div className="flex mt-5 justify-between items-center">
      <div className="flex items-center gap-3 flex-1">
        
      <Avatar className='cursor-pointer'>
                    <AvatarImage src="/hidd.jpg" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="w-full relative">
            <Textarea className="" placeholder="Enter your comment" />
            <div className="absolute bottom-6  right-4">
            <SendIcon className=""/> 
            
            </div>
            </div>
            
      </div>
      <div className='flex w-[12rem]  justify-around text-black mt-5'>
          <div className='flex items-center gap-1'>
          <Heart className="font-bold text-primary text-xl "/><span className='text-[0.8rem] text-primary font-bold'>3</span> 
          
          </div>
          <div className='flex items-center gap-1'>
          
          <LucideMessageSquare className=""/> <span className='text-[0.8rem]'>0</span> 
        </div>
        <div className='flex items-center gap-1'>

          <Share/><span className='text-[0.8rem]'>0</span> 
        </div>
       
        
        </div>
    </div>
  </div>
  <div className="bg-white px-12 py-12 mb-6 rounded-3xl">
    <div className="flex justify-between">
    <div className="flex justify-between w-[5rem] gap-3 ">
        <Avatar className='cursor-pointer'>
                    <AvatarImage src="/hidd.jpg" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
            </Avatar>
    
            <div className="flex flex-col">
              <h2 className="font-bold text-md " style={{ color:"black" }}>#uizog234</h2>
              <span className="text-sm text-gray-500 ">1h ago</span>
            </div>
        </div>
        <div className="">
       <MoreHorizontal/>
        </div>
    </div>
  
  <div className="mt-5 h-96 flex justify-center items-center relative  p-10 px-8 rounded-2xl " style={{ background:"linear-gradient(to top left,#AC32E4,#7918F2,#4801FF)" }}>
  <div className='bg-[#0000003d] absolute inset-0  top-0 left-0 w-full h-full'>

</div>
        <div className="mt-5">
          <h2 className="text-3xl font-bold" style={{ color:"white" }}><PostVoice audioUrl={'afrobeat.mp3'} waveId={'wave1'}/></h2>
        </div>
        
    </div>
    
    <div className="flex mt-5 justify-between items-center">
      <div className="flex items-center gap-3 flex-1">
        
      <Avatar className='cursor-pointer'>
                    <AvatarImage src="/hidd.jpg" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="w-full relative">
            <Textarea className="" placeholder="Enter your comment" />
            <div className="absolute bottom-6  right-4">
            <SendIcon className=""/> 
            
            </div>
            </div>
            
      </div>
      <div className='flex w-[12rem]  justify-around text-black mt-5'>
          <div className='flex items-center gap-1'>
          <Heart className="font-bold text-primary text-xl "/><span className='text-[0.8rem] text-primary font-bold'>3</span> 
          
          </div>
          <div className='flex items-center gap-1'>
          
          <LucideMessageSquare className=""/> <span className='text-[0.8rem]'>0</span> 
        </div>
        <div className='flex items-center gap-1'>

          <Share/><span className='text-[0.8rem]'>0</span> 
        </div>
       
        
        </div>
    </div>
  </div>
  <div className="bg-white px-12 py-12 mb-6 rounded-3xl">
    <div className="flex justify-between">
    <div className="flex justify-between w-[5rem] gap-3 ">
        <Avatar className='cursor-pointer'>
                    <AvatarImage src="/hidd.jpg" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
            </Avatar>
    
            <div className="flex flex-col">
              <h2 className="font-bold text-md " style={{ color:"black" }}>#uizog234</h2>
              <span className="text-sm text-gray-500 ">1h ago</span>
            </div>
        </div>
        <div className="">
       <MoreHorizontal/>
        </div>
    </div>
  
  <div className="mt-5 h-96 flex justify-center items-center relative  p-10 px-8 rounded-2xl " style={{ background:"linear-gradient(to top left,#8a2be2,#0000cd,#228b22,#ccff00)" }}>
  <div className='bg-[#0000003d] absolute inset-0  top-0 left-0 w-full h-full'>

</div>
        <div className="mt-5">
          <h2 className="text-3xl font-bold" style={{ color:"white" }}><PostVoice audioUrl={'piano.mp3'} waveId={'wave2'}/></h2>
        </div>
        
    </div>
    
    <div className="flex mt-5 justify-between items-center">
      <div className="flex items-center gap-3 flex-1">
        
      <Avatar className='cursor-pointer'>
                    <AvatarImage src="/hidd.jpg" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="w-full relative">
            <Textarea className="" placeholder="Enter your comment" />
            <div className="absolute bottom-6  right-4">
            <SendIcon className=""/> 
            
            </div>
            </div>
            
      </div>
      <div className='flex w-[12rem]  justify-around text-black mt-5'>
          <div className='flex items-center gap-1'>
          <Heart className="font-bold text-primary text-xl "/><span className='text-[0.8rem] text-primary font-bold'>3</span> 
          
          </div>
          <div className='flex items-center gap-1'>
          
          <LucideMessageSquare className=""/> <span className='text-[0.8rem]'>0</span> 
        </div>
        <div className='flex items-center gap-1'>

          <Share/><span className='text-[0.8rem]'>0</span> 
        </div>
       
        
        </div>
    </div>
  </div>
</div>
  )
}

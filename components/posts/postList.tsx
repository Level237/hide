import { Heart, LucideMessageSquare, MoreHorizontal, SendIcon, Share } from 'lucide-react'
import React from 'react'
import { Textarea } from '../ui/textarea'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import PostVoice from './PostVoice'

export default function PostList() {
  return (
    <div className="mt-5 mb-32 flex flex-col gap-3">
  <div className="bg-[#363636] px-6 py-4 mb-6 rounded-3xl">
    <div className="flex justify-between">
    <div className="flex justify-between w-[8rem] ">
      <div className='flex-1'>
      <Avatar style={{ background:"url('/profile2.jpg')",backgroundPosition:"center",backgroundSize:"cover" }} className='cursor-pointer w-10 h-10 rounded-xl'>
                    
                   
                    </Avatar>
      </div>
    
    
            <div className="flex  flex-col flex-2">
              <h2 className="font-bold text-sm text-gray-400" >Zed Camara</h2>
              <span className="text-sm text-gray-500 ">1h ago</span>
            </div>
        </div>
        <div className="text-white">
       <MoreHorizontal/>
        </div>
    </div>
  
  <div className="mt-5 h-96 flex justify-center items-center  p-10 px-8 rounded-2xl " style={{ background:"linear-gradient(to top left,#00416A,#ec008c)" }}>
        
        <div className="mt-5">
          <h2 className="text-2xl text-center font-bold" style={{ color:"white" }}>-😄😄😄Tu trouve le bon mais il est toujours devant sa machine..</h2>
        </div>
        
    </div>
    
    <div className="flex mt-5 justify-between items-center">
      <div className="flex items-center gap-3 flex-1">
        
      <Avatar style={{ background:"url('/profile.jpg')",backgroundPosition:"center",backgroundSize:"cover" }} className='cursor-pointer w-8 h-8 rounded-xl'>
            </Avatar>
            <div className="w-full relative">
            <textarea name="" id="" placeholder='Enter your comment' className={`font-bold placeholder:text-sm  w-full bg-[#282828] resize-none max-h-12 flex justify-center relative overflow-y-hidden border-[#00000041] rounded-2xl placeholder:text-[#ffffff21] py-4 px-3 cursor-pointer        text-white  text-sm`} ></textarea>
            <div className="absolute bottom-2  right-4">
            <SendIcon className="w-6 h-6 text-gray-400"/> 
            </div>
            </div>
            
      </div>
      <div className='flex w-[12rem]  justify-around text-black mt-5'>
          <div className='flex items-center gap-1'>
          <Heart className="font-bold text-primary fill-current text-md w-6 h-6"/><span className='text-[0.8rem] text-primary font-bold'>32</span> 
          
          </div>
          <div className='flex items-center gap-1 text-gray-300'>
          <LucideMessageSquare className="w-6 h-6"/> <span className='text-[0.8rem]'>0</span> 
        </div>
        <div className='flex items-center gap-1 text-gray-300'>
          <Share className='w-6 h-6'/><span className='text-[0.8rem]'>0</span> 
        </div>
       
        
        </div>
    </div>
  </div>
  <div className="bg-[#363636] px-6 py-4 mb-6 rounded-3xl">
    <div className="flex justify-between">
    <div className="flex justify-between w-[8rem] ">
      <div className='flex-1'>
      <Avatar style={{ background:"url('/profile2.jpg')",backgroundPosition:"center",backgroundSize:"cover" }} className='cursor-pointer w-10 h-10 rounded-xl'>
                    
                   
                    </Avatar>
      </div>
    
    
            <div className="flex  flex-col flex-2">
              <h2 className="font-bold text-sm text-gray-400" >Zed Camara</h2>
              <span className="text-sm text-gray-500 ">1h ago</span>
            </div>
        </div>
        <div className="text-white">
       <MoreHorizontal/>
        </div>
    </div>
  
  <div className="mt-5 h-96 flex justify-center items-center  p-10 px-8 rounded-2xl " style={{ background:"url('/cover.png')",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat: "no-repeat" }}>
        
       
        
    </div>
    
    <div className="flex mt-5 justify-between items-center">
      <div className="flex items-center gap-3 flex-1">
        
      <Avatar style={{ background:"url('/profile.jpg')",backgroundPosition:"center",backgroundSize:"cover" }} className='cursor-pointer w-8 h-8 rounded-xl'>
            </Avatar>
            <div className="w-full relative">
            <textarea name="" id="" placeholder='Enter your comment' className={`font-bold placeholder:text-sm  w-full bg-[#282828] resize-none max-h-12 flex justify-center relative overflow-y-hidden border-[#00000041] rounded-2xl placeholder:text-[#ffffff21] py-4 px-3 cursor-pointer        text-white  text-sm`} ></textarea>
            <div className="absolute bottom-2  right-4">
            <SendIcon className="w-6 h-6 text-gray-400"/> 
            </div>
            </div>
            
      </div>
      <div className='flex w-[12rem]  justify-around text-black mt-5'>
          <div className='flex items-center gap-1'>
          <Heart className="font-bold text-primary fill-current text-md w-6 h-6"/><span className='text-[0.8rem] text-primary font-bold'>32</span> 
          
          </div>
          <div className='flex items-center gap-1 text-gray-300'>
          <LucideMessageSquare className="w-6 h-6"/> <span className='text-[0.8rem]'>0</span> 
        </div>
        <div className='flex items-center gap-1 text-gray-300'>
          <Share className='w-6 h-6'/><span className='text-[0.8rem]'>0</span> 
        </div>
       
        
        </div>
    </div>
  </div>
  <div className="bg-[#363636] px-6 py-4  rounded-3xl">
    <div className="flex justify-between">
    <div className="flex justify-between w-[12rem] ">
      <div className='flex-1'>
      <Avatar style={{ background:"url('/profile1.jpg')",backgroundPosition:"center",backgroundSize:"cover" }} className='cursor-pointer w-10 h-10 rounded-xl'>
                    
                   
                    </Avatar>
      </div>
    
    
            <div className="flex  flex-col flex-2">
              <h2 className="font-bold text-sm text-gray-400" >Ibrahima Djamilatou</h2>
              <span className="text-sm text-gray-500 ">1h ago</span>
            </div>
        </div>
        <div className="text-white">
       <MoreHorizontal/>
        </div>
    </div>
  
  <div className="mt-5 h-96 flex justify-center items-center  p-10 px-8 rounded-2xl " style={{ background:"#000000" }}>
        
  <div className="mt-5">
          <h2 className="text-3xl font-bold" style={{ color:"white" }}><PostVoice audioUrl={'afrobeat.mp3'} waveId={'wave3'}/></h2>
        </div>
        
    </div>
    
    <div className="flex mt-5 justify-between items-center">
      <div className="flex items-center gap-3 flex-1">
        
      <Avatar style={{ background:"url('/profile.jpg')",backgroundPosition:"center",backgroundSize:"cover" }} className='cursor-pointer w-8 h-8 rounded-xl'>
            </Avatar>
            <div className="w-full relative">
            <textarea name="" id="" placeholder='Enter your comment' className={`font-bold placeholder:text-sm  w-full bg-[#282828] resize-none max-h-12 flex justify-center relative overflow-y-hidden border-[#00000041] rounded-2xl placeholder:text-[#ffffff21] py-4 px-3 cursor-pointer        text-white  text-sm`} ></textarea>
            <div className="absolute bottom-2  right-4">
            <SendIcon className="w-6 h-6 text-gray-400"/> 
            </div>
            </div>
            
      </div>
      <div className='flex w-[12rem]  justify-around text-black mt-5'>
          <div className='flex items-center gap-1'>
          <Heart className="font-bold text-primary fill-current text-md w-6 h-6"/><span className='text-[0.8rem] text-primary font-bold'>3</span> 
          
          </div>
          <div className='flex items-center gap-1 text-gray-300'>
          <LucideMessageSquare className="w-6 h-6"/> <span className='text-[0.8rem]'>5</span> 
        </div>
        <div className='flex items-center gap-1 text-gray-300'>
          <Share className='w-6 h-6'/><span className='text-[0.8rem]'>0</span> 
        </div>
       
        
        </div>
    </div>
  </div>
  <div className="bg-[#363636] px-6 py-4 mb-6 rounded-3xl">
    <div className="flex justify-between">
    <div className="flex justify-between w-[12rem] ">
      <div className='flex-1'>
      <Avatar style={{ background:"url('/profile1.jpg')",backgroundPosition:"center",backgroundSize:"cover" }} className='cursor-pointer w-10 h-10 rounded-xl'>
                    
                   
                    </Avatar>
      </div>
    
    
            <div className="flex  flex-col flex-2">
              <h2 className="font-bold text-sm text-gray-400" >Ibrahima Djamilatou</h2>
              <span className="text-sm text-gray-500 ">1h ago</span>
            </div>
        </div>
        <div className="text-white">
       <MoreHorizontal/>
        </div>
    </div>
  
  <div className="mt-5 h-96 flex justify-center items-center  p-10 px-8 rounded-2xl " style={{ background:"linear-gradient(to top left,#1488CC,#000)" }}>
        
        <div className="mt-5">
          <h2 className="text-2xl text-center font-bold" style={{ color:"white" }}>🚀Les Barcelonais vous etes à la place? faites du bruit </h2>
        </div>
        
    </div>
    
    <div className="flex mt-5 justify-between items-center">
      <div className="flex items-center gap-3 flex-1">
        
      <Avatar style={{ background:"url('/profile.jpg')",backgroundPosition:"center",backgroundSize:"cover" }} className='cursor-pointer w-8 h-8 rounded-xl'>
            </Avatar>
            <div className="w-full relative">
            <textarea name="" id="" placeholder='Enter your comment' className={`font-bold placeholder:text-sm  w-full bg-[#282828] resize-none max-h-12 flex justify-center relative overflow-y-hidden border-[#00000041] rounded-2xl placeholder:text-[#ffffff21] py-4 px-3 cursor-pointer        text-white  text-sm`} ></textarea>
            <div className="absolute bottom-2  right-4">
            <SendIcon className="w-6 h-6 text-gray-400"/> 
            </div>
            </div>
            
      </div>
      <div className='flex w-[12rem]  justify-around text-black mt-5'>
          <div className='flex items-center gap-1'>
          <Heart className="font-bold text-primary fill-current text-md w-6 h-6"/><span className='text-[0.8rem] text-primary font-bold'>3</span> 
          
          </div>
          <div className='flex items-center gap-1 text-gray-300'>
          <LucideMessageSquare className="w-6 h-6"/> <span className='text-[0.8rem]'>5</span> 
        </div>
        <div className='flex items-center gap-1 text-gray-300'>
          <Share className='w-6 h-6'/><span className='text-[0.8rem]'>0</span> 
        </div>
       
        
        </div>
    </div>
  </div>
  <div className="bg-[#363636] px-6 py-4  rounded-3xl">
    <div className="flex justify-between">
    <div className="flex justify-between w-[12rem] ">
      <div className='flex-1'>
      <Avatar style={{ background:"url('/profile1.jpg')",backgroundPosition:"center",backgroundSize:"cover" }} className='cursor-pointer w-10 h-10 rounded-xl'>
                    
                   
                    </Avatar>
      </div>
    
    
            <div className="flex  flex-col flex-2">
              <h2 className="font-bold text-sm text-gray-400" >Ibrahima Djamilatou</h2>
              <span className="text-sm text-gray-500 ">1h ago</span>
            </div>
        </div>
        <div className="text-white">
       <MoreHorizontal/>
        </div>
    </div>
  
  <div className="mt-5 h-96 flex justify-center items-center  p-10 px-8 rounded-2xl " style={{ background:"#ec008c" }}>
        
  <div className="mt-5">
          <h2 className="text-3xl font-bold" style={{ color:"white" }}><PostVoice audioUrl={'afrobeat.mp3'} waveId={'wave1'}/></h2>
        </div>
        
    </div>
    
    <div className="flex mt-5 justify-between items-center">
      <div className="flex items-center gap-3 flex-1">
        
      <Avatar style={{ background:"url('/profile.jpg')",backgroundPosition:"center",backgroundSize:"cover" }} className='cursor-pointer w-8 h-8 rounded-xl'>
            </Avatar>
            <div className="w-full relative">
            <textarea name="" id="" placeholder='Enter your comment' className={`font-bold placeholder:text-sm  w-full bg-[#282828] resize-none max-h-12 flex justify-center relative overflow-y-hidden border-[#00000041] rounded-2xl placeholder:text-[#ffffff21] py-4 px-3 cursor-pointer        text-white  text-sm`} ></textarea>
            <div className="absolute bottom-2  right-4">
            <SendIcon className="w-6 h-6 text-gray-400"/> 
            </div>
            </div>
            
      </div>
      <div className='flex w-[12rem]  justify-around text-black mt-5'>
          <div className='flex items-center gap-1'>
          <Heart className="font-bold text-primary fill-current text-md w-6 h-6"/><span className='text-[0.8rem] text-primary font-bold'>3</span> 
          
          </div>
          <div className='flex items-center gap-1 text-gray-300'>
          <LucideMessageSquare className="w-6 h-6"/> <span className='text-[0.8rem]'>5</span> 
        </div>
        <div className='flex items-center gap-1 text-gray-300'>
          <Share className='w-6 h-6'/><span className='text-[0.8rem]'>0</span> 
        </div>
       
        
        </div>
    </div>
  </div>
  
  
</div>
  )
}

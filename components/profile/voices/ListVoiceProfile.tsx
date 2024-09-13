
import PostVoice from '@/components/posts/PostVoice'
import { Avatar } from '@/components/ui/avatar'
import { Mic, MoreHorizontal, Plus } from 'lucide-react'
import React, { useEffect, useState } from 'react'

export default function ListVoiceProfile() {

    const [loading,setLoading]=useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },2000)
    })
  return (
    <>




 <section className='grid grid-cols-2 gap-x-4 w-full'>
      <div className="bg-[#000] cursor-pointer  flex  justify-center items-center   mb-6 rounded-2xl">
   
    <div>
    <Mic className='w-16  text-primary'/>
    </div>
    <div>
        <h2 className='text-md text-primary'>New Voice</h2>
        
    </div>
   
    <div className="flex mt-5 justify-between items-center">
     
      
    </div>
  </div>
  <div className="bg-[#363636] min-w-96 px-6 py-4 mb-6 rounded-2xl">
    <div className="flex justify-between">
    <div className="flex items-center justify-center gap-3 w-[6rem] ">
      <div className=''>
      <Avatar style={{ background:"url('/profile.jpg')",backgroundPosition:"center",backgroundSize:"cover" }} className='cursor-pointer w-8 h-8 rounded-xl'>
                    
                   
                    </Avatar>
      </div>
    
    
            <div className="flex  flex-col">
              <h2 className="font-bold text-sm max-w-6 text-gray-400" >You</h2>
              <span className="text-[0.75rem] text-gray-500 ">1h ago</span>
            </div>
        </div>
        <div className="text-white">
       <MoreHorizontal className='w-5'/>
        </div>
    </div>
  
  <div className="mt-5 h-44 flex justify-center items-center   rounded-2xl " style={{ background:"linear-gradient(to top left,#00416A,#ec008c)" }}>
        
  <div className="mt-5 px-3">
          <h2 className="text-3xl font-bold" style={{ color:"white" }}><PostVoice heightVoice={30} widthVoice={300} audioUrl={'/afrobeat.mp3'} waveId={'wave4'}/></h2>
        </div>
        
    </div>
    
    <div className="flex mt-5 justify-between items-center">
     
      
    </div>
  </div>
  <div className="bg-[#363636] px-6 py-4 mb-6 rounded-3xl">
  <div className="flex justify-between">
    <div className="flex items-center justify-center gap-3 w-[6rem] ">
      <div className=''>
      <Avatar style={{ background:"url('/profile.jpg')",backgroundPosition:"center",backgroundSize:"cover" }} className='cursor-pointer w-8 h-8 rounded-xl'>
                    
                   
                    </Avatar>
      </div>
    
    
            <div className="flex  flex-col">
              <h2 className="font-bold text-sm max-w-6 text-gray-400" >You</h2>
              <span className="text-[0.75rem] text-gray-500 ">1h ago</span>
            </div>
        </div>
        <div className="text-white">
       <MoreHorizontal className='w-5'/>
        </div>
    </div>
  
  <div className="mt-5 h-44 flex justify-center items-center   rounded-2xl " style={{ background:"#000000" }}>
        
  <div className="mt-5 px-3">
          <h2 className="text-3xl font-bold" style={{ color:"white" }}><PostVoice heightVoice={30} widthVoice={300} audioUrl={'/afrobeat.mp3'} waveId={'wave5'}/></h2>
        </div>
        
    </div>
    
    <div className="flex mt-5 justify-between items-center">
     
      
    </div>
  </div>
  <div className="bg-[#363636] px-6 py-4 mb-6 rounded-3xl">
  <div className="flex justify-between">
    <div className="flex items-center justify-center gap-3 w-[6rem] ">
      <div className=''>
      <Avatar style={{ background:"url('/profile.jpg')",backgroundPosition:"center",backgroundSize:"cover" }} className='cursor-pointer w-8 h-8 rounded-xl'>
                    
                   
                    </Avatar>
      </div>
    
    
            <div className="flex  flex-col">
              <h2 className="font-bold text-sm max-w-6 text-gray-400" >You</h2>
              <span className="text-[0.75rem] text-gray-500 ">1h ago</span>
            </div>
        </div>
        <div className="text-white">
       <MoreHorizontal className='w-5'/>
        </div>
    </div>
  
  <div className="mt-5 h-44 flex justify-center items-center   rounded-2xl " style={{ background:"linear-gradient(to top left,#1488CC,#000)" }}>
        
  <div className="mt-5 px-3">
          <h2 className="text-3xl font-bold" style={{ color:"white" }}><PostVoice heightVoice={30} widthVoice={300} audioUrl={'/afrobeat.mp3'} waveId={'wave6'}/></h2>
        </div>
        
    </div>
    
    <div className="flex mt-5 justify-between items-center">
     
      
    </div>
  </div>
      </section>
     
    </>
  )
}

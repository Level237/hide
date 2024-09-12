
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

{loading && <div className="flex items-center justify-center mt-16 mb-16" role="status">
    <svg aria-hidden="true" className="inline w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-400" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span className="sr-only">Loading...</span>
    
</div>}
{!loading &&  <section className='grid grid-cols-2 gap-x-4 w-full'>
      <div className="bg-[#000] cursor-pointer flex  justify-center items-center   mb-6 rounded-3xl">
   
    <div>
    <Mic className='w-16  text-primary'/>
    </div>
    <div>
        <h2 className='text-md text-primary'>New Voice</h2>
        
    </div>
   
    <div className="flex mt-5 justify-between items-center">
     
      
    </div>
  </div>
  <div className="bg-[#363636] px-6 py-4 mb-6 rounded-3xl">
    <div className="flex justify-between">
    <div className="flex justify-between w-[6rem] ">
      <div className=''>
      <Avatar style={{ background:"url('/profile.jpg')",backgroundPosition:"center",backgroundSize:"cover" }} className='cursor-pointer w-10 h-10 rounded-xl'>
                    
                   
                    </Avatar>
      </div>
    
    
            <div className="flex  flex-col">
              <h2 className="font-bold text-sm max-w-5 text-gray-400" >You</h2>
              <span className="text-sm text-gray-500 max-h-16 ">1h ago</span>
            </div>
        </div>
        <div className="text-white">
       <MoreHorizontal/>
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
    <div className="flex justify-between w-[6rem] ">
      <div className=''>
      <Avatar style={{ background:"url('/profile.jpg')",backgroundPosition:"center",backgroundSize:"cover" }} className='cursor-pointer w-10 h-10 rounded-xl'>
                    
                   
                    </Avatar>
      </div>
    
    
            <div className="flex  flex-col">
              <h2 className="font-bold text-sm max-w-5 text-gray-400" >You</h2>
              <span className="text-sm text-gray-500 max-h-16 ">1h ago</span>
            </div>
        </div>
        <div className="text-white">
       <MoreHorizontal/>
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
    <div className="flex justify-between w-[6rem] ">
      <div className=''>
      <Avatar style={{ background:"url('/profile.jpg')",backgroundPosition:"center",backgroundSize:"cover" }} className='cursor-pointer w-10 h-10 rounded-xl'>
                    
                   
                    </Avatar>
      </div>
    
    
            <div className="flex  flex-col">
              <h2 className="font-bold text-sm max-w-5 text-gray-400" >You</h2>
              <span className="text-sm text-gray-500 max-h-16 ">1h ago</span>
            </div>
        </div>
        <div className="text-white">
       <MoreHorizontal/>
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
      </section>}
     
    </>
  )
}

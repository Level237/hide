import { PostStore } from '@/store/PostStore'
import { Mic } from 'lucide-react'
import React from 'react'

export default function MicAnimate() {
    const isRecording=PostStore((state)=>state.isRecording)
  return (
    <>
    <div className='bg-white p-2 rounded-full cursor-pointer animate-pulse'>
      <Mic className='text-primary w-8 h-8'/>
    </div>
    </>
    
  )
}

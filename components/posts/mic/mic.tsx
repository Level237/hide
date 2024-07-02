import { PostStore } from '@/store/PostStore'
import { Mic } from 'lucide-react'
import React from 'react'
import RecordMic from './RecordMic'

export default function MicAnimate() {
    
  return (
    <>
    <div className='bg-white p-2 rounded-full cursor-pointer animate-pulse'>
       
        <RecordMic>
        <Mic className='text-primary w-8 h-8'/>
        </RecordMic>
      
    </div>
    </>
    
  )
}

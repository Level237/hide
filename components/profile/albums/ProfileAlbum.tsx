"use client"
import { AlbumStore } from '@/store/AlbumStore'
import { X } from 'lucide-react'
import React from 'react'

export default function ProfileAlbum() {

  const isVisible=AlbumStore((state)=>state.isVisible)
  const close=AlbumStore((state)=>state.closeAlbum)
  return (
    <>

    {isVisible && <section className='fixed overflow-y-scroll opacity-85  h-screen bg-black w-full z-[9999999999999999999999]'>
      
      <div onClick={()=>close()} className='absolute top-5 right-5 cursor-pointer'>
        <X className='text-white w-6 h-8'/>
      </div>
      </section>}
     
    </>
   
  )
}

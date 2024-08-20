"use client"
import { AlbumStore } from '@/store/AlbumStore'
import { ChevronLeft, ChevronRight, MoveLeft, X } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function ProfileAlbum() {

  const isVisible=AlbumStore((state)=>state.isVisible)
  const close=AlbumStore((state)=>state.closeAlbum)
  return (
    <>

    {isVisible && <section  className='fixed flex justify-between items-center overflow-y-scroll   h-screen  w-full z-[9999999999999999999999]'>
      <div onClick={()=>close()} className='absolute inset-0 top-0 bottom-0 bg-black opacity-85'>

      </div>
      <div onClick={()=>close()} className='absolute top-5 right-5 cursor-pointer'>
        <X className='text-white w-6 h-8'/>
      </div>
      <section className='flex mx-8 gap-5 items-center w-full justify-between'>
          <div className='opacity-1 relative cursor-pointer'>
            <button className=' bg-slate-700 p-3'>
            <ChevronLeft className='text-white w-6 h-8' />
            </button>
          
          </div>
          <div>
          <div style={{ background:"url('/profile.jpg')",backgroundPosition:"center",backgroundSize:"cover" }} className='relative cursor-pointer w-96 opacity-1 h-[90vh]    rounded-xl '></div>
            
          </div>
          <div className='opacity-1 relative cursor-pointer'>
            <button className=' bg-slate-700 p-3'>
            <ChevronRight className='text-white w-6 h-8' />
            </button>
          
          </div>
      </section>
      </section>}
     
    </>
   
  )
}

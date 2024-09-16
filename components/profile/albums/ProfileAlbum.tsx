"use client"
import { AlbumStore } from '@/store/AlbumStore'
import { ChevronLeft, ChevronRight, MoveLeft, X } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';

export default function ProfileAlbum() {

  const isVisible=AlbumStore((state)=>state.isVisible)

  const photos=AlbumStore((state)=>state.photos)
  const currentPhoto=AlbumStore((state)=>state.currentPhoto)
  const nextPhoto=AlbumStore((state)=>state.goToNext)
  const previousPhoto=AlbumStore((state)=>state.goToPrevious)
  const close=AlbumStore((state)=>state.closeAlbum)
  const visiblePhoto=AlbumStore((state)=>state.visiblePhoto)

  const foundCurrentPhoto=photos.find((photo)=>photo.id===currentPhoto)
  console.log(currentPhoto)

  const [previousBlock,setPreviousBlock]=useState(false)
  const [nextBlock,setNextBlock]=useState(false)
  useEffect(() => {
    if(currentPhoto===1){
      setPreviousBlock(true)
    }else if(currentPhoto > 1){
      setPreviousBlock(false)
    }if(currentPhoto===photos.length){
      setNextBlock(true)
      console.log("dd")
    }else if(currentPhoto < photos.length){
      setNextBlock(false)
    }
    
  }, [currentPhoto])
  
  //console.log(nextBlock)
  return (
    <>
   
    {isVisible && <section  className='absolute flex justify-between items-center overflow-y-scroll   h-screen  w-full z-[9999999999999999999999]'>
      <div onClick={()=>close()} className='absolute inset-0 top-0 bottom-0 bg-black opacity-85'>

      </div>
      <div onClick={()=>close()} className='absolute top-5 right-5 cursor-pointer'>
        <X className='text-white w-6 h-8'/>
      </div>
      <section className='flex mx-8 gap-5 items-center w-full justify-between'>
          <div className='opacity-1 relative cursor-pointer'>
            
            <button onClick={()=>previousPhoto(currentPhoto)} className={`bg-slate-700 ${previousBlock ? "opacity-25 cursor-not-allowed" : "" }  p-3`}>
            <ChevronLeft className='text-white w-6 h-8' />
            </button>
            
            
          
          </div>
          <AnimatePresence>
          {visiblePhoto && 
          <motion.div
          initial={{ 
            opacity:0
           }}
           transition={{ 
            duration:0.5,
            
            }}
           animate={{
            opacity:1
           }}

           exit={{ 
            x:50,
            opacity:0
            }}
           className='cursor-pointer  opacity-1 h-[90vh] '>
            <Image className='relative w-full h-full' src={`${foundCurrentPhoto?.img}`} width={600} height={500} alt={''}/>
          </motion.div>
          }
           
          
         </AnimatePresence>
          <div className='opacity-1 relative cursor-pointer'>
            <button onClick={()=>nextPhoto(currentPhoto)}  className={`bg-slate-700 ${nextBlock ? "opacity-25 cursor-not-allowed" : "" }  p-3`}>
            <ChevronRight className='text-white w-6 h-8' />
            </button>
          
          </div>
      </section>
      </section>}
    </>
   
  )
}

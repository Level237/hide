"use client"
import { AlbumStore } from '@/store/AlbumStore'
import React from 'react'

export default function ProfileAlbum() {

  const isVisible=AlbumStore((state)=>state.isVisible)
  return (
    <>

    {isVisible && <section className='fixed overflow-y-scroll opacity-85  h-screen bg-black w-full z-[9999999999999999999999]'>
      
      </section>}
     
    </>
   
  )
}

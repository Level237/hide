"use client"
import { AlbumStore } from '@/store/AlbumStore'
import React from 'react'

export default function AlbumGrid() {

    const setVisible=AlbumStore((state)=>state.setVisible)
  return (
    <>
       <section className='flex flex-col gap-3'>
            <div className='grid grid-cols-2 gap-2'>
            <div onClick={()=>setVisible()} style={{ background:"url('/cover.jpg')",backgroundPosition:"center",backgroundSize:"cover" }} className='relative rounded-xl cursor-pointer w-[8.8rem] h-[8.8rem] '>

            </div>
            <div style={{ background:"url('/cover.png')",backgroundPosition:"center",backgroundSize:"cover" }} className='relative cursor-pointer rounded-xl w-[8.8rem] h-[8.8rem] '>

</div>
            </div>
            <div className='grid grid-cols-3 gap-2'>
<div style={{ background:"url('/album1.jpg')",backgroundPosition:"center",backgroundSize:"cover" }} className='relative cursor-pointer rounded-xl w-[6rem] h-[6rem] '>

</div>
<div style={{ background:"url('/tof.jpg')",backgroundPosition:"center",backgroundSize:"cover" }} className='relative cursor-pointer rounded-xl w-[6rem] h-[6rem] '>

</div>
<div style={{ background:"url('/tof2.jpg')",backgroundPosition:"center",backgroundSize:"cover" }} className='relative cursor-pointer rounded-xl w-[6rem] h-[6rem] '>

</div>
    </div>
          </section>
    </>
  )
}

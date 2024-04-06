"use client"
import React from 'react'
import NewHideSection from './NewHideSection'
import { useSession } from 'next-auth/react'
import { Button } from '../ui/button'

export default function HomeContent() {
    const session=useSession()
  return (
    <div>
        
      
    <h2 className='text-center text-black font-bold text-2xl mb-5'>Welcome in Hide,{session.data?.user?.name}</h2>
    <NewHideSection/>
    <section className='mt-20'>
     
    
    <div className='flex  justify-between mb-2 items-center'>
    <h2 className=' text-black font-bold text-xl'>Recents Activities</h2>
         <Button>More Activities</Button>         
    </div>
    <div className=' py-[5rem] flex items-center justify-center rounded-lg   hover:text-black   border-[#0000002f] border-[0.12rem]'>
                  No recents activities
    </div>
    
    </section>
    </div>
  )
}

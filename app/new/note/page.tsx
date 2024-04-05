import { Input } from '@/components/ui/input'
import React from 'react'

export default function CreateNotePage() {
  return (
    <section>
      <div className='flex '>

      </div>
<section className='container mt-[4rem]'>
      <h2 className='text-center font-bold text-2xl'>New Notes</h2>
      <form action="" className='mt-5'>
        <div>
        <Input type='text' name='title' placeholder='Title' className='h-16 font-bold text-xl'/>
        </div>
        <div className='mt-4'>
        <Input type='text' placeholder='Note' className='h-[13rem] font-bold text-xl'/>
        </div>
      </form>
    </section>
    </section>
    
  )
}

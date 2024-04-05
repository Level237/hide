import React from 'react'
import { Textarea } from '../ui/textarea'
import { Palette } from 'lucide-react'
import { Button } from '../ui/button'

export default function Post() {
  return (
    <div>
      <section className='container mt-[4rem] '>
      <h2 className='text-center font-bold text-2xl'>New Post</h2>
      <form action="" className='mt-5'>
       
        <div className='mt-4 flex justify-center'>
        <Textarea placeholder="Type your message here." className='font-bold mx-36 overflow-y-hidden placeholder:text-gray-300 placeholder:flex py-[5rem] focus:border-none text-center h-[15rem] text-white flex justify-center text-xl bg-primary' />
        
        </div>
        <section className=' mx-36 flex items-center justify-between'>
        <div className='mt-5  w-[14rem] grid grid-cols-4 gap-4'>
            <div className='h-12 cursor-pointer bg-primary rounded-sm'>

            </div>
            <div className='h-12 cursor-pointer bg-[#ff0000] rounded-sm'>

            </div>
            <div className='h-12 cursor-pointer bg-[#000] rounded-sm'>

            </div>
            <div className='h-12 flex justify-center items-center cursor-pointer bg-gray-200 border-[0.03px] border-primary rounded-sm'>
                <Palette/>
            </div>
            
        </div>
        <div>
            <Button>Publier</Button>
        </div>
        </section>
       
      </form>
    </section>
    </div>
  )
}

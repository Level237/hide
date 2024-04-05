import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { MoveLeft, Save } from 'lucide-react'
import React from 'react'

export default function CreatePostPage() {
  return (
    <section>
      <section className='h-16 flex  bg-gray-50 items-center justify-between  border-b-[0.03px] border-primary'>
        <Button className='bg-transparent text-primary mx-12 hover:bg-transparent'><MoveLeft/>Back</Button>
        <div className='flex items-center gap-2'>
        <Button className='mx-12'>Publier <Save className='w-5 ml-2'/></Button>
        </div>
        
      </section>
<section className='container mt-[4rem] '>
      <h2 className='text-center font-bold text-2xl'>New Post</h2>
      <form action="" className='mt-5'>
       
        <div className='mt-4 flex justify-center'>
        <Textarea placeholder="Type your message here." className='font-bold mx-36 overflow-y-hidden placeholder:text-gray-300 placeholder:flex py-[5rem] focus:border-none text-center h-[15rem] text-white flex justify-center text-xl bg-primary' />
        
        </div>
      </form>
    </section>
    </section>
  )
}

import paths from '@/path'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function NewHideSection() {
  return (
    <div>
      <div className='grid grid-cols-3 gap-5'>
        <Link href={paths.newPost()}>
        
  <div className='flex flex-col'>
  <div className=' py-[5rem] flex items-center justify-center rounded-lg cursor-pointer  hover:text-black hover:bg-[#00000013] duration-150  border-[#0000002f] border-[0.12rem]'>
<Plus/>
</div>
<h2 className='text-center mt-3 text-primary font-bold'>New Post</h2>
  </div>
  </Link>
  <Link href={paths.newNote()}>
  <div className='flex flex-col'>
  <div className=' py-[5rem] flex items-center justify-center rounded-lg cursor-pointer  hover:text-black hover:bg-[#00000013] duration-150  border-[#0000002f] border-[0.12rem]'>
<Plus/>
</div>
<h2 className='text-center mt-3 text-primary font-bold'>New Notes</h2>
  </div>
  </Link>
  
  <div className='flex flex-col'>
  <div className=' py-[5rem] flex items-center justify-center rounded-lg cursor-pointer  hover:text-black hover:bg-[#00000013] duration-150  border-[#0000002f] border-[0.12rem]'>
<Plus/>
</div>
<h2 className='text-center mt-3 text-primary font-bold'>New Hide response</h2>
  </div>

</div>
    </div>
  )
}

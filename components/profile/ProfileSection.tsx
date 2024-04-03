import React from 'react'
import { Avatar, AvatarFallback } from '../ui/avatar'
import { Button } from '../ui/button'
import { Eye } from 'lucide-react'

export default function ProfileSection() {
  return (
    <div>
    <div className='flex flex-col mx-3 items-start gap-y-3'>
      <div>
      <Avatar className='cursor-pointer w-[14rem] h-[14rem] '>

<AvatarFallback className='bg-slate-800 text-white'>CN</AvatarFallback>
</Avatar>
      </div>
    <div className='flex items-center'>
      <h2 className='font-bold  text-2xl mx-6'>Level  <span className="font-thin text-[1.2rem] text-gray-500"> | Anonymous</span></h2>
    </div>

    <div className='mx-5'>
      <Button className='px-[5rem] flex justify-between gap-2'>New Hide<Eye/></Button>
    </div>
    </div>
</div>
  )
}

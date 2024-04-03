import React from 'react'
import { Avatar, AvatarFallback } from '../ui/avatar'
import { Button } from '../ui/button'
import { Eye, EyeOff, NotepadText } from 'lucide-react'

export default function ProfileSection() {
  return (
    <div>
    <div className='flex flex-col mx-3 items-start gap-y-3'>
      <div>
      <Avatar className='cursor-pointer w-[14rem] h-[14rem] '>

<AvatarFallback className='bg-slate-800 text-white'>CN</AvatarFallback>
</Avatar>
      </div>
    <div className='flex flex-row items-center'>
      <h2 className='font-bold  text-2xl mx-6'>Level  <span className="font-thin text-[1.2rem] text-gray-500"> | Anonymous </span></h2>
    </div>

    <div className='mx-5'>
      <Button className='px-[5rem] flex justify-between gap-2'>New Hide<Eye/></Button>
    </div>
    <div className='flex gap-2 justify-between'>
        <div className='flex items-center'>
        <NotepadText className='w-5'/><span className="text-gray-500"><span className='font-bold text-black'>0</span> notes</span>
        </div>
        <div className='flex items-center'>
        <EyeOff className='w-5'/><span className="text-gray-500"><span className='font-bold text-black'>0</span> hide</span>
        </div>
        <div className='flex items-center'>
        <EyeOff className='w-5'/><span className="text-gray-500"><span className='font-bold text-black'>0</span> hide</span>
        </div>
    </div>
    </div>
</div>
  )
}

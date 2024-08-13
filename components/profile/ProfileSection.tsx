import React from 'react'
import { Avatar, AvatarFallback } from '../ui/avatar'
import { Button } from '../ui/button'
import { Edit, Eye, EyeOff, MoreHorizontal, NotepadText } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card'
import { Separator } from '@/components/ui/separator'

export default function ProfileSection() {
  return (
    <section  className='mt-24   bottom-0 flex justify-start w-[100%]   gap-8'>

      <section className='w-[70%] rounded-2xl bg-[#363636]'>
<section>
<Card className="w-full pb-0 max-w-full rounded-2xl bg-[#363636] border-[#363636]">
     <CardHeader className='h-44  z-[10]   relative' style={{ background:"url('/cover.jpg')",backgroundPosition:"center",backgroundSize:"cover" }}>
       
       
      
     </CardHeader>
     <Separator className='bg-[#363636]'/>
     <CardContent>
      <section className='flex gap-3 items-center'>
      <div style={{ background:"url('/profile.jpg')",backgroundPosition:"center",backgroundSize:"cover" }} className='mt-[-50px] z-[900]  relative rounded-[100%] w-[7.5rem] h-[7.5rem] '>

</div>
<div className='mt-2 flex flex-1 flex-col'>
<h2 className='text-white text-lg font-bold'>Martin lunel</h2>
<span className='text-white font-light text-sm'>250 connections</span>
</div>
<div>
  <Button className='bg-[#00ff001a]'>
    <Edit className='w-5 h-5'/>
    <span className='ml-2'>Edit profile</span>
  </Button>
</div>
<div>
<Button className='bg-[#212121]'>
    <MoreHorizontal className='w-5 h-5'/>
    
  </Button>
</div>
      </section>
     
      
     
     </CardContent>
     <CardFooter className="flex justify-between">
     <Button className='w-full bg-[#4d4b4b75]'>My Profile</Button>
     </CardFooter>
   </Card>
</section>
      </section>
      <section className='p-16 w-[30%] bg-[#363636]'>
qq
</section>
   </section>
  )
}

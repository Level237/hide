import React from 'react'
import { Avatar, AvatarFallback } from '../ui/avatar'
import { Button } from '../ui/button'
import { Edit, Eye, EyeOff, MoreHorizontal, NotepadText } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card'
import { Separator } from '@/components/ui/separator'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Badge } from '../ui/badge'
import CreateWidget from '../posts/createWidget'
import PostList from '../posts/postList'
export default function ProfileSection() {
  return (
    <section  className='mt-24    bottom-0 flex justify-start w-[100%]   gap-8'>

      <section className='w-[70%] flex flex-col gap-4'>
<section className='pb-0 rounded-2xl bg-[#363636] w-full'>
<Card className="w-full pb-0 max-w-full rounded-2xl bg-[#363636] border-[#363636]">
     <CardHeader className='h-44  z-[10]   relative' style={{ background:"url('/cover.jpg')",backgroundPosition:"center",backgroundSize:"cover" }}>
       
       
      
     </CardHeader>
     <Separator className='bg-[#363636]'/>
     <CardContent>
      <section className='flex gap-3 items-center'>
      <div style={{ background:"url('/profile.jpg')",backgroundPosition:"center",backgroundSize:"cover" }} className='mt-[-40px] z-[900]  relative rounded-[100%] w-[7.5rem] h-[7.5rem] '>

</div>
<div className='mt-2 flex flex-1 flex-col'>
<h2 className='text-white text-lg font-bold'>Martin lunel</h2>
<span className='text-white font-light text-sm'>250 connections</span>
</div>
<div>
  <Button className='bg-[#00ff001a]'>
    <Edit className='w-5 h-5 text-primary'/>
    <span className='ml-2 text-primary'>Edit profile</span>
  </Button>
</div>
<div>
<Button className='bg-[#212121]'>
    <MoreHorizontal className='w-5 h-5'/>
    
  </Button>
</div>
      </section>
     
      
     
     </CardContent>
     
     <Tabs defaultValue="account" className="w-full ">
      <TabsList className="grid w-[100%] grid-cols-7 bg-transparent ">
        <TabsTrigger value="account">Posts</TabsTrigger>
        <TabsTrigger value="password">Voice</TabsTrigger>
        <TabsTrigger value="friends">Friends <Badge className='bg-[#212121] ml-2 text-[0.65rem]'>200</Badge></TabsTrigger>
        <TabsTrigger value="story">Secret Story</TabsTrigger>
        <TabsTrigger value="media">Media</TabsTrigger>
        <TabsTrigger value="activity">Activity</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      
    </Tabs>
     
   </Card>
   
</section>
<section>
<CreateWidget/>
</section>
<section>
<PostList/>
</section>
      </section>
      <section className='p-16 w-[30%] bg-[#363636]'>
qq
</section>
   </section>
  )
}

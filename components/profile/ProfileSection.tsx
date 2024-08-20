"use client"
import React, { useEffect, useRef } from 'react'
import { Avatar, AvatarFallback } from '../ui/avatar'
import { Button } from '../ui/button'
import { Edit, Eye, EyeOff, MoreHorizontal, NotepadText, Plus } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card'
import { Separator } from '@/components/ui/separator'
import lottie from 'lottie-web';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Badge } from '../ui/badge'
import CreateWidget from '../posts/createWidget'
import PostList from '../posts/postList'
import Image from 'next/image'
import ProfileAlbum from './albums/ProfileAlbum'
import AlbumGrid from './albums/AlbumGrid'
import { AlbumStore } from '@/store/AlbumStore'
export default function ProfileSection() {

  const animationContainer = useRef(null);
  const isVisible=AlbumStore((state)=>state.isVisible)
  useEffect(() => {
    lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'https://lottie.host/4656248f-2bed-46aa-ae57-04b1dc1fe656/dEWFraveye.json'
    });
    animationContainer.current=null;
  }, []);
  return (
    <section className={`${isVisible ? "overflow-y-hidden" : ""}`}>
 <section  className='mt-24      bottom-0 flex justify-start w-[100%]   gap-8'>
      
      <section className='w-[70%] flex flex-col gap-4'>
<section className='pb-0 rounded-2xl bg-[#363636] w-full'>
<Card className="w-full pb-1 max-w-full rounded-2xl bg-[#363636] border-[#363636]">
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
     
     <Tabs defaultValue="account" className="w-full  ">
      <TabsList className="grid w-[100%] grid-cols-7 bg-transparent ">
        <TabsTrigger value="account">Posts</TabsTrigger>
        <TabsTrigger value="password">Voice</TabsTrigger>
        <TabsTrigger value="friends">Friends <Badge className='bg-[#00ff001a] text-primary ml-2 text-[0.65rem]'>200</Badge></TabsTrigger>
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
      <section className='w-[30%] flex flex-col gap-6'>
      <section className='h-[21rem] relative rounded-md px-4 py-6  bg-[#363636]'>
        <section className='flex flex-col gap-3'>
          <div className='flex items-center justify-between'>
          <h1 className='text-white text-lg font-bold'>Story Hide</h1>
          <button className='bg-[#00ff001a] py-[0.3rem] px-2 rounded-sm'>
    <Plus className='w-4 h-4 text-primary'/>
  </button>
          
          </div>
        
        <div>
          <span className='text-md text-gray-400'>
          Share your story to your friend and get their response hide
          </span>
        </div>
        <div className='absolute bottom-0 w-64 mt-12'>
        <div ref={animationContainer}></div>
        </div>
        </section>

</section>
<section className='h-[23rem] sticky top-24 rounded-md px-4 py-6  bg-[#363636]'>
        <section className='flex flex-col gap-6'>
        <div className='flex items-center justify-between'>
          <h1 className='text-white text-lg font-bold'>Photos</h1>
          <button className='bg-[#00ff001a] text-primary text-[0.8rem] py-[0.3rem] px-2 rounded-sm'>
   
    See all photos
  </button>
          
          </div>
         <AlbumGrid/>
        </section>

</section>
      </section>
   </section>
    </section>
   
  )
}

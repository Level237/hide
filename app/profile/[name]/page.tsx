
import { auth } from '@/auth';
import HeaderAuth from '@/components/header/HeaderAuth';
import HeaderProfile from '@/components/header/HeaderProfile';
import { HomeComponent } from '@/components/Home/Home';
import ProfileSection from '@/components/profile/ProfileSection';
import { Button } from '@/components/ui/button';
import getUserByName from '@/db/queries/users/getUserByName';

import { notFound, redirect } from 'next/navigation';
import React from 'react'

interface ProfileShowPageProps{
  params:{
      name:string;
  },
  searchParams:{
    tab:string
}
}
interface SearchPageProps{
  searchParams:{
      term:string
  }
}
export default async function ProfilePage({params,searchParams}:ProfileShowPageProps) {
  await new Promise((receive)=>{
    setTimeout(receive,2000)
})
  const term=searchParams.tab;
  const {name}=params;
  console.log(term);
  const session=await auth()
  const user=await getUserByName(name);
 if(!user){
  notFound()
 }else if(session?.user?.name!==name){
  redirect('/')
 }



    
  return (
    <div className='mx-[5rem]'>
      <section>
      <HeaderAuth/>
      </section>
      
       <section className="flex items-start flex-col justify-items-start   h-screen">
       <ProfileSection/>
        </section>
      
    </div>
  )
}

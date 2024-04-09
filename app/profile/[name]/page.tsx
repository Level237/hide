
import { auth } from '@/auth';
import HeaderAuth from '@/components/header/HeaderAuth';
import HeaderProfile from '@/components/header/HeaderProfile';
import { HomeComponent } from '@/components/Home/Home';
import HomeContent from '@/components/profile/HomeContent';
import NewHideSection from '@/components/profile/NewHideSection';
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
    <div>
      <HeaderProfile param={term}/>
    <HomeComponent>
   <section  className='flex mt-10 mx-10'>
    <ProfileSection/>
    <div className=' w-full py-12 rounded-lg pl-12 pr-12  border-[#00000013] border-[0.12rem]' >
      <HomeContent tab={term}/>
    </div>
   </section>
    </HomeComponent>
       
        
    </div>
  )
}

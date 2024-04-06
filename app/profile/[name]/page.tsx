
import { auth } from '@/auth';
import HeaderAuth from '@/components/header/HeaderAuth';
import { HomeComponent } from '@/components/Home/Home';
import NewHideSection from '@/components/profile/NewHideSection';
import ProfileSection from '@/components/profile/ProfileSection';
import { Button } from '@/components/ui/button';
import getUserByName from '@/db/queries/users/getUserByName';

import { notFound, redirect } from 'next/navigation';
import React from 'react'

interface ProfileShowPageProps{
  params:{
      name:string;
  }
}
export default async function ProfilePage({params}:ProfileShowPageProps) {
  const {name}=params
  const session=await auth()
  const user=await getUserByName(name);
 if(!user){
  notFound()
 }else if(session?.user?.name!==name){
  redirect('/')
 }
  const submenuNav = [
    { title: "Overview", path: "javascript:void(0)" },
    { title: "Integration", path: "javascript:void(0)" },
    { title: "Billing", path: "javascript:void(0)" },
    { title: "Transactions", path: "javascript:void(0)" },
    { title: "Plans", path: "javascript:void(0)" },
]


    
  return (
    <div>
      <div className="bg-gray-900">
    <HeaderAuth>
    <nav className="">
                <ul className="flex items-center gap-x-3 max-w-screen-xl mx-auto px-4 overflow-x-auto lg:px-8">
                    {
                        submenuNav.map((item, idx) => {
                            return (
                                // Replace [idx == 0] with [window.location.pathname == item.path]
                                <li key={idx} className={`py-1 ${idx == 0 ? "border-b-2 border-primary" : ""}`}>
                                    <a href={item.path} className="block py-2 px-3 rounded-lg text-white hover:text-white hover:bg-[#ffffff15] duration-150">
                                        {item.title}
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
      </HeaderAuth>
    
    </div>
    <HomeComponent>
   <section  className='flex mt-10 mx-10'>
    <ProfileSection/>
    <div className=' w-full py-12 rounded-lg pl-12 pr-12  border-[#00000013] border-[0.12rem]' >
      <h2 className='text-center text-black font-bold text-2xl mb-5'>Welcome in Hide,{session?.user?.name}</h2>
      <NewHideSection/>
      <section className='mt-20'>
       
      
      <div className='flex  justify-between mb-2 items-center'>
      <h2 className=' text-black font-bold text-xl'>Recents Activities</h2>
           <Button>More Activities</Button>         
      </div>
      <div className=' py-[5rem] flex items-center justify-center rounded-lg   hover:text-black   border-[#0000002f] border-[0.12rem]'>
                    No recents activities
      </div>
      </section>
      
    </div>
   </section>
    </HomeComponent>
       
        
    </div>
  )
}

"use server"
import React from 'react'
import NewHideSection from './NewHideSection'
import { useSession } from 'next-auth/react'
import { Button } from '../ui/button'
import { useSearchParams } from 'next/navigation'
import HomeProfile from './HomeProfile'
import Link from 'next/link'
import PostList from '../posts/postList'

interface SearchPageProps{
  tab:string
}
export default  async function HomeContent({tab}:any) {
  let HomeContent:React.ReactNode

  if(tab==='posts'){
    
    HomeContent=<PostList/>
  }

 if(!tab){
  HomeContent=<HomeProfile/>
 
}



  return <>
  {HomeContent}
  </>
  
  
}

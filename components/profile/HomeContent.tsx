"use client"
import React from 'react'
import NewHideSection from './NewHideSection'
import { useSession } from 'next-auth/react'
import { Button } from '../ui/button'
import { useSearchParams } from 'next/navigation'
import HomeProfile from './HomeProfile'

export default function HomeContent():React.ReactNode {
  const params=useSearchParams()
  const tab=params.get('tab')

  let HomeContent:React.ReactNode

  if(tab==='posts'){
    
    HomeContent=<p>dd</p>
  }else if(!tab){
    HomeContent=<HomeProfile/>
   
  }

  return <>
  {HomeContent}
  </>
  
  
}

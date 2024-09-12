'use client'

import React from 'react'
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"
import { Badge } from '../ui/badge'
import { useQueryState,parseAsString } from "nuqs";
export default function TabProfile() {

    const [switchProfile,setSwitchProfile]=useQueryState("t",parseAsString
     // Previous options object goes here
    .withDefault("") // Added default value 
    )

  return (
    <>
      <Tabs defaultValue="account" className="w-full">
      <TabsList className="grid w-[100%] grid-cols-7 bg-transparent ">
        <TabsTrigger onClick={()=>setSwitchProfile(null)} value="account">Posts</TabsTrigger>
        <TabsTrigger onClick={()=>setSwitchProfile("voices")} value="password">Voice</TabsTrigger>
        <TabsTrigger onClick={()=>setSwitchProfile("friends")} value="friends">Friends <Badge className='bg-[#00ff001a] text-primary ml-2 text-[0.65rem]'>200</Badge></TabsTrigger>
        <TabsTrigger onClick={()=>setSwitchProfile("secretstory")} value="story">Secret Story</TabsTrigger>
        <TabsTrigger onClick={()=>setSwitchProfile("media")} value="media">Media</TabsTrigger>
        <TabsTrigger onClick={()=>setSwitchProfile("activity")} value="activity">Activity</TabsTrigger>
        <TabsTrigger onClick={()=>setSwitchProfile("settings")} value="settings">Settings</TabsTrigger>
      </TabsList>
      
    </Tabs>
    </>
  )
}

'use client'

import {AnimatePresence, motion,useAnimate} from "framer-motion"
import React, { useRef, useState } from 'react'
import { Textarea } from '../ui/textarea'
import { AlignHorizontalDistributeCenter, Bold, BookHeart, Camera, Circle, CircleStop, CloudUpload, Edit, Eye, File, FileQuestion, GalleryHorizontal, Home, Italic, ListMusic, LucideCircleSlash2, Mic, MicOff, MicVocalIcon, MoveLeft, Pause, PencilLine, Play, Save, Send, SendIcon, ShieldClose, Smile, SmilePlus, Speech, SpeechIcon, StickyNote, StopCircle, Trash, VenetianMaskIcon, Waves, X } from 'lucide-react'
import { Button } from '../ui/button'
import { PickerExample } from '../PicExample'
import { useRouter } from 'next/navigation'
import { Input } from '../ui/input'
import CreatePost from '@/actions/post/create'
import { FormBtn } from "../common/FormBtn"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { PostStore } from "@/store/PostStore"
import Image from "next/image"
import RecordMic from "./mic/RecordMic"


type PostType={
  type:string | null
}
export default function Post() {
  const  [visible,setVisible]=useState(false)
  const [scope,animate]=useAnimate();
  const changeBgHandler=PostStore((state)=>state.changeBgHandler)
  const [image,setImage]=useState<String>("")
  const [loadImage,setLoadImage]=useState<boolean>(false)
   const bgPost=PostStore((state)=>state.bgPost)
  
   return (
    <> <div 
   className='flex mt-6 gap-8 max-h-[100%] items-stretch overflow-y-hidden'>
     {/* Sidebar */}
     <section className="w-[300px] mx-6 fixed py-8 bg-gradient-to-b from-[#363636] to-[#2a2a2a] rounded-xl shadow-xl">
      <section className="flex mx-5 flex-col gap-6">
        <div className="flex justify-center">
          <Image src="/logo.png" alt="logo" height={50} width={50} className="transition-transform hover:scale-105" />
        </div>
        
        <div className="space-y-6">
          <div>
            <h2 className="text-sm text-gray-300 font-bold mb-3">Paramètres du post</h2>
            <div className="space-y-4">
              <label className="flex items-center justify-between p-3 bg-[#2a2a2a] rounded-lg cursor-pointer group transition-colors hover:bg-[#2f2f2f]">
                <span className="text-sm font-medium text-gray-300 group-hover:text-gray-200">Masquer le post</span>
                <div className="relative w-11 h-6 bg-[#262626] rounded-full peer-focus:ring-4 peer-focus:ring-primary/20">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="absolute inset-y-1 left-1 w-4 h-4 bg-gray-400 rounded-full transition-all peer-checked:translate-x-5 peer-checked:bg-primary"></div>
                </div>
              </label>

              <label className="flex items-center justify-between p-3 bg-[#2a2a2a] rounded-lg cursor-pointer group transition-colors hover:bg-[#2f2f2f]">
                <span className="text-sm font-medium text-gray-300 group-hover:text-gray-200">Masquer les commentaires</span>
                <div className="relative w-11 h-6 bg-[#262626] rounded-full peer-focus:ring-4 peer-focus:ring-primary/20">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="absolute inset-y-1 left-1 w-4 h-4 bg-gray-400 rounded-full transition-all peer-checked:translate-x-5 peer-checked:bg-primary"></div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </section>
     </section>

     {/* Main Content */}
     <section className="overflow-y-hidden right-[350px] fixed left-[350px] bg-gradient-to-b from-[#363636] to-[#2a2a2a] rounded-2xl shadow-xl">
       <form action={CreatePost} className="p-8">
         <div className="space-y-6">
           <div className="flex items-center justify-between">
             <h2 className="text-2xl font-bold text-gray-200">Créer un nouveau post</h2>
             <div className="flex items-center space-x-3">
               <Button variant="ghost" className="text-gray-400 hover:text-gray-200">
                 <MoveLeft className="w-5 h-5 mr-2" />
                 Retour
               </Button>
               <Button type="submit" className="bg-primary hover:bg-primary/90">
                 <Save className="w-5 h-5 mr-2" />
                 Publier
               </Button>
             </div>
           </div>

           <div className="relative">
             <div className={`relative rounded-2xl ${visible ? 'filter blur-sm' : ''}`}>
               <textarea 
                 style={{ background: bgPost }} 
                 placeholder="Partagez vos pensées..." 
                 className="w-full min-h-[12rem] bg-[#282828] rounded-2xl p-6 pl-20 pr-6 text-white placeholder:text-gray-500 resize-none focus:ring-2 focus:ring-primary/50 focus:outline-none"
               />
               <div className="absolute top-6 left-6">
                 <Avatar 
                   style={{ background: "url('/profile.jpg')", backgroundPosition: "center", backgroundSize: "cover" }} 
                   className="w-10 h-10 rounded-xl ring-2 ring-gray-700"
                 />
               </div>
             </div>

             {visible && (
               <div className="absolute inset-0 z-20 bg-[#282828]/50 backdrop-blur-sm rounded-2xl">
                 <RecordMic />
               </div>
             )}
           </div>

           <div className="flex items-center justify-between p-4 bg-[#282828] rounded-xl">
             <div className="flex items-center space-x-4">
               <Button variant="ghost" className="text-gray-400 hover:text-blue-400" onClick={() => setVisible(!visible)}>
                 {visible ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
               </Button>
               <Button variant="ghost" className="text-gray-400 hover:text-green-400">
                 <GalleryHorizontal className="w-5 h-5" />
               </Button>
               <Button variant="ghost" className="text-gray-400 hover:text-yellow-400">
                 <Smile className="w-5 h-5" />
               </Button>
             </div>
           </div>
         </div>
       </form>
     </section>
   </div>
</>
   )}

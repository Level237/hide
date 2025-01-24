'use client'

import {AnimatePresence, motion, useAnimate } from "framer-motion"
import React, { useRef, useState } from 'react'
import { Textarea } from '../ui/textarea'
import { AlignHorizontalDistributeCenter, Bold, BookHeart, Camera, Circle, CircleSlash2, CloudUpload, Edit, Eye, File, FileQuestion, GalleryHorizontal, Home, Italic, ListMusic, LucideCircleSlash2, Mic, MicOff, MicVocalIcon, MoveLeft, Pause, PencilLine, Play, Save, Send, SendIcon, ShieldClose, Smile, SmilePlus, Speech, SpeechIcon, StickyNote, StopCircle, Trash, UserCircle2, VenetianMaskIcon, Waves, X } from 'lucide-react'
import { Button } from '../ui/button'
import { PickerExample } from '../PicExample'
import { useRouter } from 'next/navigation'
import { Input } from '../ui/input'

import { FormBtn } from "../common/FormBtn"
import { Avatar } from "../ui/avatar"
import { PostStore } from "@/store/PostStore"
import Image from "next/image"
import RecordMic from "./mic/RecordMic"
import { cn } from "@/lib/utils"

type PostType = 'story' | 'voice' | 'image' | null;

export default function Post() {
  const [visible, setVisible] = useState(false)
  const [scope, animate] = useAnimate()
  const changeBgHandler = PostStore((state) => state.changeBgHandler)
  const [image, setImage] = useState<string>("")
  const [loadImage, setLoadImage] = useState<boolean>(false)
  const bgPost = PostStore((state) => state.bgPost)
  const [postType, setPostType] = useState<PostType>(null)
  const [isAnonymous, setIsAnonymous] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [previewImage, setPreviewImage] = useState<string | null>(null)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreviewImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const colors = [
    { id: 1, color: "linear-gradient(45deg, #FF416C, #FF4B2B)" },
    { id: 2, color: "linear-gradient(45deg, #2dac5c, #1d8045)" },
    { id: 3, color: "linear-gradient(45deg, #000C40, #607D8B)" },
    { id: 4, color: "linear-gradient(45deg, #e65c00, #F9D423)" },
    { id: 5, color: "linear-gradient(45deg, #4801FF, #7d01ff)" },
  ]

  return (
    <div className='flex mt-6 gap-8 max-h-[100%] items-stretch overflow-y-hidden'>
      {/* Sidebar */}
      <section className="w-[300px] mx-6 fixed py-8 bg-gradient-to-b from-[#363636] to-[#2a2a2a] rounded-xl shadow-xl">
        <section className="flex mx-5 flex-col gap-6">
          <div className="flex justify-center">
            <Image src="/logo.png" alt="logo" height={50} width={50} className="transition-transform hover:scale-105" />
          </div>
          
          <div className="space-y-6">
            <div>
              <h2 className="text-sm text-gray-300 font-bold mb-3">Type de publication</h2>
              <div className="space-y-3">
                <button
                  onClick={() => setPostType('story')}
                  className={cn(
                    "w-full flex items-center space-x-3 p-3 rounded-lg transition-all",
                    postType === 'story' ? "bg-primary/20 text-primary" : "bg-[#2a2a2a] text-gray-400 hover:bg-[#2f2f2f] hover:text-gray-300"
                  )}
                >
                  <PencilLine className="w-5 h-5" />
                  <span>Story</span>
                </button>

                <button
                  onClick={() => setPostType('voice')}
                  className={cn(
                    "w-full flex items-center space-x-3 p-3 rounded-lg transition-all",
                    postType === 'voice' ? "bg-primary/20 text-primary" : "bg-[#2a2a2a] text-gray-400 hover:bg-[#2f2f2f] hover:text-gray-300"
                  )}
                >
                  <Mic className="w-5 h-5" />
                  <span>Message vocal</span>
                </button>

                <button
                  onClick={() => setPostType('image')}
                  className={cn(
                    "w-full flex items-center space-x-3 p-3 rounded-lg transition-all",
                    postType === 'image' ? "bg-primary/20 text-primary" : "bg-[#2a2a2a] text-gray-400 hover:bg-[#2f2f2f] hover:text-gray-300"
                  )}
                >
                  <GalleryHorizontal className="w-5 h-5" />
                  <span>Image + Texte</span>
                </button>
              </div>
            </div>

            <div>
              <h2 className="text-sm text-gray-300 font-bold mb-3">Paramètres</h2>
              <div className="space-y-4">
                <label className="flex items-center justify-between p-3 bg-[#2a2a2a] rounded-lg cursor-pointer group transition-colors hover:bg-[#2f2f2f]">
                  <span className="text-sm font-medium text-gray-300 group-hover:text-gray-200">Mode anonyme</span>
                  <div className="relative w-11 h-6 bg-[#262626] rounded-full peer-focus:ring-4 peer-focus:ring-primary/20">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={isAnonymous}
                      onChange={(e) => setIsAnonymous(e.target.checked)}
                    />
                    <div className={cn(
                      "absolute inset-y-1 left-1 w-4 h-4 rounded-full transition-all",
                      isAnonymous ? "translate-x-5 bg-primary" : "bg-gray-400"
                    )}></div>
                  </div>
                </label>
              </div>
            </div>

            {postType === 'story' && (
              <div>
                <h2 className="text-sm text-gray-300 font-bold mb-3">Couleur du fond</h2>
                <div className="grid grid-cols-3 gap-3">
                  {colors.map((color) => (
                    <button
                      key={color.id}
                      onClick={() => changeBgHandler(color.color)}
                      className="w-full h-12 rounded-lg transition-transform hover:scale-105 hover:shadow-lg"
                      style={{ background: color.color }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </section>

      {/* Main Content */}
      <section className="overflow-y-hidden right-[350px] fixed left-[350px] bg-gradient-to-b from-[#363636] to-[#2a2a2a] rounded-2xl shadow-xl">
        <form  className="p-8">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-200">
                {postType === 'story' ? 'Nouvelle story' :
                 postType === 'voice' ? 'Message vocal' :
                 postType === 'image' ? 'Publication avec image' :
                 'Nouvelle publication'}
              </h2>
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
              <div className={cn(
                "relative rounded-2xl",
                visible ? 'filter blur-sm' : ''
              )}>
                {postType === 'image' && (
                  <div className="mb-4">
                    <div 
                      className="w-full h-64 rounded-xl bg-[#282828] flex items-center justify-center cursor-pointer hover:bg-[#2f2f2f] transition-colors"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      {previewImage ? (
                        <div className="relative w-full h-full">
                          <Image 
                            src={previewImage} 
                            alt="Preview" 
                            layout="fill" 
                            objectFit="cover" 
                            className="rounded-xl"
                          />
                          <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                            <Camera className="w-8 h-8 text-white" />
                          </div>
                        </div>
                      ) : (
                        <div className="text-center">
                          <Camera className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-gray-400">Cliquez pour ajouter une image</p>
                        </div>
                      )}
                    </div>
                    <input
                      type="file"
                      ref={fileInputRef}
                      className="hidden"
                      accept="image/*"
                      onChange={handleImageUpload}
                    />
                  </div>
                )}

                <div className="relative">
                  <textarea 
                    style={{ background: postType === 'story' ? bgPost : '#282828' }} 
                    placeholder={
                      postType === 'story' ? "Partagez votre histoire..." :
                      postType === 'image' ? "Ajoutez une description..." :
                      "Partagez vos pensées..."
                    }
                    className={cn(
                      "w-full min-h-[12rem] rounded-2xl p-6 pl-20 pr-6 text-white placeholder:text-gray-500 resize-none focus:ring-2 focus:ring-primary/50 focus:outline-none",
                      postType === 'story' ? "text-center text-xl font-medium" : ""
                    )}
                  />
                  {!isAnonymous && (
                    <div className="absolute top-6 left-6">
                      <Avatar 
                        style={{ background: "url('/profile.jpg')", backgroundPosition: "center", backgroundSize: "cover" }} 
                        className="w-10 h-10 rounded-xl ring-2 ring-gray-700"
                      />
                    </div>
                  )}
                  {isAnonymous && (
                    <div className="absolute top-6 left-6">
                      <div className="w-10 h-10 rounded-xl ring-2 ring-gray-700 bg-gray-800 flex items-center justify-center">
                        <UserCircle2 className="w-6 h-6 text-gray-400" />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {postType === 'voice' && visible && (
                <div className="absolute inset-0 z-20 bg-[#282828]/50 backdrop-blur-sm rounded-2xl">
                  <RecordMic />
                </div>
              )}
            </div>

            {postType === 'voice' && (
              <div className="flex items-center justify-center p-4 bg-[#282828] rounded-xl">
                <Button 
                  variant="ghost" 
                  size="lg"
                  className={cn(
                    "text-gray-400 hover:text-blue-400",
                    visible && "text-red-400 hover:text-red-500"
                  )}
                  onClick={() => setVisible(!visible)}
                >
                  {visible ? (
                    <>
                      <MicOff className="w-6 h-6 mr-2" />
                      Arrêter l'enregistrement
                    </>
                  ) : (
                    <>
                      <Mic className="w-6 h-6 mr-2" />
                      Commencer l'enregistrement
                    </>
                  )}
                </Button>
              </div>
            )}
          </div>
          <Input type="hidden" name='color' value={bgPost} />
        </form>
      </section>
    </div>
  )
}

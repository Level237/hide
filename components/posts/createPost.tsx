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
    { id: 6, color: "linear-gradient(45deg, #8E2DE2, #4A00E0)" },
    { id: 7, color: "linear-gradient(45deg, #20002c, #cbb4d4)" },
    { id: 8, color: "linear-gradient(45deg, #11998e, #38ef7d)" },
    { id: 9, color: "linear-gradient(45deg, #FC466B, #3F5EFB)" },
    { id: 10, color: "linear-gradient(45deg, #1f4037, #99f2c8)" },
    { id: 11, color: "linear-gradient(45deg, #c31432, #240b36)" },
    { id: 12, color: "linear-gradient(45deg, #44A08D, #093637)" },
    { id: 13, color: "linear-gradient(45deg, #834d9b, #d04ed6)" },
    { id: 14, color: "linear-gradient(45deg, #4b6cb7, #182848)" },
    { id: 15, color: "linear-gradient(45deg, #f12711, #f5af19)" }
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
              <div className="relative">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-medium text-gray-300">Couleur du fond</h3>
                  <div className="text-xs text-gray-500">Sélectionnez une couleur</div>
                </div>
                <div className="grid grid-cols-6 gap-3">
                  {colors.map((color) => (
                    <button
                      key={color.id}
                      onClick={() => changeBgHandler(color.color)}
                      className={cn(
                        "w-8 h-8 rounded-lg transition-all hover:scale-105 hover:shadow-lg",
                        bgPost === color.color ? "ring-2 ring-primary ring-offset-2 ring-offset-[#2a2a2a]" : ""
                      )}
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
        <div  className="p-8">
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
                  <div className="flex flex-col space-y-4">
                    <div className="relative">
                      <textarea 
                        placeholder="Partagez vos pensées..." 
                        className="w-full min-h-[120px] bg-[#282828] rounded-2xl p-6 pl-20 pr-6 text-white placeholder:text-gray-500 resize-none focus:ring-2 focus:ring-primary/50 focus:outline-none"
                      />
                      {!isAnonymous ? (
                        <div className="absolute top-6 left-6">
                          <Avatar 
                            style={{ background: "url('/profile.jpg')", backgroundPosition: "center", backgroundSize: "cover" }} 
                            className="w-10 h-10 rounded-xl ring-2 ring-gray-700"
                          />
                        </div>
                      ) : (
                        <div className="absolute top-6 left-6">
                          <div className="w-10 h-10 rounded-xl ring-2 ring-gray-700 bg-gray-800 flex items-center justify-center">
                            <UserCircle2 className="w-6 h-6 text-gray-400" />
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div 
                      onClick={() => fileInputRef.current?.click()}
                      className={cn(
                        "relative w-full h-40 rounded-xl bg-[#282828] flex items-center justify-center cursor-pointer hover:bg-[#2f2f2f] transition-colors overflow-hidden group",
                      )}
                    >
                      {previewImage ? (
                        <>
                          <Image 
                            src={previewImage} 
                            alt="Preview" 
                            layout="fill" 
                            objectFit="cover"
                            className="rounded-xl group-hover:opacity-75 transition-opacity"
                          />
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 gap-4">
                            <button className="bg-white/20 hover:bg-white/30 transition-colors p-2 rounded-lg backdrop-blur-sm">
                              <Camera className="w-5 h-5 text-white" />
                            </button>
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                // Logique pour supprimer l'image
                              }} 
                              className="bg-white/20 hover:bg-white/30 transition-colors p-2 rounded-lg backdrop-blur-sm"
                            >
                              <Trash className="w-5 h-5 text-white" />
                            </button>
                          </div>
                        </>
                      ) : (
                        <div className="flex flex-col items-center justify-center gap-2 p-4 text-center">
                          <div className="p-3 rounded-lg bg-[#363636]">
                            <Camera className="w-6 h-6 text-gray-400" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-300">Glissez une image ou cliquez pour ajouter</p>
                            <p className="text-xs text-gray-500 mt-1">PNG, JPG jusqu'à 10MB</p>
                          </div>
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

                {postType !== 'image' && (
                  <div className="relative">
                    {postType === 'story' && (
                      <div className="relative">
                        <textarea 
                          style={{ background: bgPost }} 
                          placeholder="Partagez votre histoire..."
                          className="w-full min-h-[12rem] rounded-2xl p-6 pl-20 pr-6 text-white placeholder:text-gray-500 resize-none focus:ring-2 focus:ring-primary/50 focus:outline-none text-center text-xl font-medium"
                        />
                        {!isAnonymous ? (
                          <div className="absolute top-6 left-6">
                            <Avatar 
                              style={{ background: "url('/profile.jpg')", backgroundPosition: "center", backgroundSize: "cover" }} 
                              className="w-10 h-10 rounded-xl ring-2 ring-gray-700"
                            />
                          </div>
                        ) : (
                          <div className="absolute top-6 left-6">
                            <div className="w-10 h-10 rounded-xl ring-2 ring-gray-700 bg-gray-800 flex items-center justify-center">
                              <UserCircle2 className="w-6 h-6 text-gray-400" />
                            </div>
                          </div>
                        )}
                        <div className="mt-4 p-4 bg-[#2a2a2a] rounded-xl">
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="text-sm font-medium text-gray-300">Couleur du fond</h3>
                            <div className="text-xs text-gray-500">Sélectionnez une couleur</div>
                          </div>
                          <div className="grid grid-cols-12 gap-y-5">
                            {colors.map((color) => (
                              <button
                                key={color.id}
                                onClick={() => changeBgHandler(color.color)}
                                className={cn(
                                  "w-8 h-8 rounded-lg transition-all hover:scale-105 hover:shadow-lg",
                                  bgPost === color.color ? "ring-2 ring-primary ring-offset-2 ring-offset-[#2a2a2a]" : ""
                                )}
                                style={{ background: color.color }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                    {postType !== 'story' && (
                      <textarea 
                        style={{ background: '#282828' }} 
                        placeholder={
                          postType === 'story' ? "Partagez votre histoire..." :
                          "Partagez vos pensées..."
                        }
                        className={cn(
                          "w-full min-h-[12rem] rounded-2xl p-6 pl-20 pr-6 text-white placeholder:text-gray-500 resize-none focus:ring-2 focus:ring-primary/50 focus:outline-none",
                          postType === 'story' ? "text-center text-xl font-medium" : ""
                        )}
                      />
                    )}
                    {!isAnonymous ? (
                      <div className="absolute top-6 left-6">
                        <Avatar 
                          style={{ background: "url('/profile.jpg')", backgroundPosition: "center", backgroundSize: "cover" }} 
                          className="w-10 h-10 rounded-xl ring-2 ring-gray-700"
                        />
                      </div>
                    ) : (
                      <div className="absolute top-6 left-6">
                        <div className="w-10 h-10 rounded-xl ring-2 ring-gray-700 bg-gray-800 flex items-center justify-center">
                          <UserCircle2 className="w-6 h-6 text-gray-400" />
                        </div>
                      </div>
                    )}
                  </div>
                )}
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
        </div>
      </section>
    </div>
  )
}

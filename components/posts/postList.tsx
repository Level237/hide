'use client'
import { Heart, LucideMessageSquare, MoreHorizontal, SendIcon, Share } from 'lucide-react'
import React from 'react'
import { Textarea } from '../ui/textarea'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import PostVoice from './PostVoice'
import { PostCard } from './post-card'
import { PostStore } from '@/store/PostStore'
import { Post } from '@/types/Post'

export default function PostList() {
  const {posts}=PostStore((state)=>state)
  return (
    <div className="mt-5 mb-32 flex flex-col gap-3">

    {posts.map((post:Post)=>(
       <PostCard key={post.id}  post={post} />
    ))}

 
  
  
  
</div>
  )
}

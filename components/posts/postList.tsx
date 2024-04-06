
import fetchPostCurrentUser from '@/db/queries/posts/fetchPostCurrentUser'
import { BookAudio, LucideMessageSquare } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default async function PostList() {
    const posts=await fetchPostCurrentUser()
    
  return (
    <div className='grid grid-cols-3 gap-5'>
        {posts.map((post)=><div key={post.id}>
                <Link href={`/posts/${post.id}`}>
    
    <div className='flex flex-col'>
    <div style={{ background:`${post.bgColor}` }} className={`relative h-[200px]  flex items-center justify-center rounded-lg cursor-pointer  hover:text-black hover:bg-[#00000013] duration-150  border-[#0000002f] border-[0.12rem]`}>
    <p className='text-center text-white p-3'>{post.content}</p>
    </div>
    <div className='flex mt-3'>
      <div className='flex'>
      <LucideMessageSquare/> <span className='text-[0.8rem]'>0 commentaire</span> 
      </div>
    <div>
      <BookAudio/>
    </div>
    </div>
    
    </div>
    </Link>
            </div>)}

</div>
  )
}


import fetchPostCurrentUser from '@/db/queries/posts/fetchPostCurrentUser'
import Link from 'next/link'
import React from 'react'

export default async function PostList() {
    const posts=await fetchPostCurrentUser()
    
  return (
    <div className='grid grid-cols-3 gap-5'>
        {posts.map((post)=><div key={post.id}>
                <Link href="">
    
    <div className='flex flex-col'>
    <div className=' py-[5rem] flex items-center justify-center rounded-lg cursor-pointer  hover:text-black hover:bg-[#00000013] duration-150  border-[#0000002f] border-[0.12rem]'>
    
    </div>
    <h2 className='text-center mt-3 text-primary font-bold'>New Post</h2>
    </div>
    </Link>
            </div>)}

</div>
  )
}

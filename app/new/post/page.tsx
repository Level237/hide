import Post from '@/components/posts/createPost'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { MoveLeft, Save } from 'lucide-react'

import React from 'react'

export default async function CreatePostPage() {
    await new Promise((receive)=>{
      setTimeout(receive,2000)
  })
  return (
    <section>
      
      <div className='relative overflow-y-hidden overflow-x-hidden'>
        <Post/>
      </div>
    </section>
  )
}

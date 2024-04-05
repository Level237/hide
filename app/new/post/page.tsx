import Post from '@/components/posts/Post'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { MoveLeft, Save } from 'lucide-react'
import React from 'react'

export default function CreatePostPage() {
  return (
    <section>
      <section className='h-16 flex  bg-gray-50 items-center justify-between  border-b-[0.03px] border-primary'>
        <Button className='bg-transparent text-primary mx-12 hover:bg-transparent'><MoveLeft/>Back</Button>
        <div className='flex items-center gap-2'>
        <Button className='mx-12'>Publier <Save className='w-5 ml-2'/></Button>
        </div>
        
      </section>
      <div>
        <Post/>
      </div>
    </section>
  )
}

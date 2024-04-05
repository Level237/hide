import Post from '@/components/posts/Post'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { MoveLeft, Save } from 'lucide-react'

import React from 'react'

export default function CreatePostPage() {

  return (
    <section>
      
      <div>
        <Post/>
      </div>
    </section>
  )
}

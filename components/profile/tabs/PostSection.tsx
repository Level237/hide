'use client'

import CreateWidget from '@/components/posts/createWidget'
import PostList from '@/components/posts/postList'
import React from 'react'

export default function PostSection() {
  return (
    <>
      <section>
<CreateWidget/>
</section>
<section>
<PostList/>
</section>
    </>
  )
}

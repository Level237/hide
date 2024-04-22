import Post from '@/components/posts/createPost'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { MoveLeft, Save } from 'lucide-react'
import {createSearchParamsCache, parseAsString} from "nuqs/server"
import React from 'react'


const searchParamsCache=createSearchParamsCache({
  type:parseAsString.withDefault("")
})
export default async function CreatePostPage(props:any) {

  const searchParams=searchParamsCache.parse(props.searchParams);

  console.log(props.searchParams,searchParams);
    await new Promise((receive)=>{
      setTimeout(receive,1000)
  })
  return (
    <section>
      
      <div className='relative overflow-y-hidden overflow-x-hidden'>
        <Post type={searchParams.type}/>
      </div>
    </section>
  )
}

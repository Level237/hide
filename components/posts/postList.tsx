import { Heart, LucideMessageSquare, MoreHorizontal, SendIcon, Share } from 'lucide-react'
import React from 'react'
import { Textarea } from '../ui/textarea'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import PostVoice from './PostVoice'
import { PostCard } from './post-card'

export default function PostList() {
  return (
    <div className="mt-5 mb-32 flex flex-col gap-3">

      <PostCard  content={'-😄😄😄Tu trouve le bon mais il est toujours devant sa machine..'} background='#000000' likes={10} type={"story"} comments={[]}  author={{ name: "Zed Camara", image: "/profile2.jpg", anonymous: false }} createdAt={'1h ago'} id={'post1'} shares={0}  />
  
  <PostCard content={"Depuis la je suis bloqué mais je n'arrive pas à trouvé la solution 😄😄😄.."} image={`/cover.png`} likes={2} type={"image"} comments={[]}  author={{ name: 'Zed Camara', image: "/profile2.jpg", anonymous: false }} createdAt={'30 min ago'} id={'post2'} shares={0}/>
  <PostCard comments={[]} content={''} likes={3} type={"voice"} audio='/afrobeat.mp3' background='#000000' author={{ name: 'Ibrahima Djamilatou', image: "/profile1.jpg", anonymous: false }} id='' audioId={'dhhh'} createdAt={'1h ago'} shares={0} />

 
  
  
  
</div>
  )
}

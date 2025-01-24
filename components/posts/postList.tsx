import { Heart, LucideMessageSquare, MoreHorizontal, SendIcon, Share } from 'lucide-react'
import React from 'react'
import { Textarea } from '../ui/textarea'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import PostVoice from './PostVoice'
import { PostCard } from './post-card'

export default function PostList() {
  return (
    <div className="mt-5 mb-32 flex flex-col gap-3">

      <PostCard content={'-😄😄😄Tu trouve le bon mais il est toujours devant sa machine..'} color='#000000' timestamp={''} likes={0} type={0} comments={0} author={'Zed Camara'} profile={'/profile2.jpg'} since={'1h ago'}  />
  
  <PostCard content={"Depuis la je suis bloqué mais je n'arrive pas à trouvé la solution 😄😄😄.."} image={`/cover.png`} timestamp={''} likes={2} type={1} comments={0} author={'Zed Camara'} profile={'/profile2.jpg'} since={'30 min ago'}/>
  <PostCard content={''} timestamp={''} likes={3} type={2} url='/afrobeat.mp3' color='#000000' comments={0} author={'Ibrahima Djamilatou'} id='wave1' profile={'/profile1.jpg'} since={'1h ago'} />
  <PostCard content={"🚀Les Barcelonais vous etes à la place? faites du bruit"} color='#000080' timestamp={''} likes={100} type={0} comments={0} author={'Ibrahima Djamilatou'} profile={'/profile1.jpg'} since={'1h ago'}  />
 
  <PostCard content={''} timestamp={''} likes={3} type={2} url='/afrobeat.mp3' color='#3D348B' comments={0} author={'Ibrahima Djamilatou'} id='wave2' profile={'/profile1.jpg'} since={'1h ago'} />
  
  
</div>
  )
}

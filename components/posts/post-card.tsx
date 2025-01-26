import { Heart, LucideMessageSquare, MessageCircle, MoreHorizontal, SendIcon, Share, Share2, Mic } from "lucide-react"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"

import { Avatar } from "../ui/avatar"
import PostVoice from "./PostVoice"
import { Post } from "@/types/Post"



export function PostCard({ 
  content, 
  image, 
  audio, 
  createdAt,
  type,
  likes,
  comments,
  audioDuration,
  author,
  background,
  audioId,
  id
}: Post) {
  return (
    <div className="bg-[#363636] px-6 py-4 mb-6 rounded-3xl">
    <div className="flex justify-between">
    <div className="flex justify-between w-13">
      <div className=''>
      <Avatar style={{ background:`url(${author.image})`,backgroundPosition:"center",backgroundSize:"cover" }} className='cursor-pointer w-10 h-10 rounded-xl'>
                    
                   
                    </Avatar>
      </div>
    
    
            <div className="flex flex-1  flex-col max-w-full ml-2">
              <h2 className="font-bold text-sm text-gray-400" >{author.name}</h2>
              <span className="text-sm text-gray-500 ">{createdAt}</span>
            </div>
        </div>
        <div className="text-white">
       <MoreHorizontal/>
        </div>
    </div>
  
  {
    type=="story" &&  <div className="mt-5 h-96 flex justify-center items-center  p-10 px-8 rounded-2xl " style={{ background:`${background}` }}>
        
                  <div className="mt-5">
                    <h2 className="text-2xl text-center font-bold" style={{ color:"white" }}>{content}</h2>
                  </div>
    
              </div>
  }

  {
    type=="image" && <section>
                    <div className='mt-4 text-white'>
                        {content}
                    </div>
                    <div className="mt-5 h-96 flex justify-center items-center  p-10 px-8 rounded-2xl " style={{ background:`url(${image})`,backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat: "no-repeat" }}>
                  </div>
              </section>
  }

  {
    type=="voice" &&  
    <div className="mt-5 rounded-2xl p-6 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-3 text-gray-400">
          <Mic className="w-5 h-5" />
          <span className="text-sm font-medium">Message vocal</span>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-xl blur-xl"></div>
          <div className="relative bg-gray-800/50 rounded-xl p-4 backdrop-blur-sm">
            <PostVoice 
              heightVoice={50} 
              widthVoice={500} 
              audioUrl={`${audio}`} 
              waveId={`${audioId}`}
            />
          </div>
        </div>
      </div>
    </div>
  }
 
    
    <div className="flex flex-col mt-5 space-y-4">
      {/* Section des statistiques */}
      <div className='flex justify-between items-center px-2'>
        <div className='flex items-center space-x-6'>
          <button className='group flex items-center space-x-2 transition-all'>
            <Heart className={`w-6 h-6 transition-colors ${likes > 0 ? "fill-primary text-primary" : "text-gray-400 group-hover:text-primary"}`}/>
            <span className={`text-sm transition-colors ${likes > 0 ? "text-primary font-medium" : "text-gray-400 group-hover:text-primary"}`}>
              {likes} likes
            </span>
          </button>
          
          <button className='group flex items-center space-x-2'>
            <LucideMessageSquare className="w-6 h-6 text-gray-400 group-hover:text-blue-400"/>
            <span className='text-sm text-gray-400 group-hover:text-blue-400'>
              {comments.length} replies
            </span>
          </button>
        </div>

        <button className='group hover:bg-transparent flex items-center space-x-2'>
          <Share className='w-6 h-6 text-gray-400 '/>
          <span className='text-sm text-gray-400 '>Partager</span>
        </button>
      </div>

      {/* Section des commentaires */}
      <div className="flex items-center space-x-3 bg-[#282828] rounded-2xl p-2">
        <Avatar 
          style={{ background:"url('/profile.jpg')", backgroundPosition:"center", backgroundSize:"cover" }} 
          className='w-8 h-8 rounded-xl shrink-0'
        />
        <div className="flex-1 relative">
          <textarea 
            placeholder='Ajouter un commentaire...' 
            className="w-full bg-transparent resize-none max-h-12 outline-none border-none text-white text-sm placeholder:text-gray-500 py-2 pr-10"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-700/50 rounded-full transition-colors">
            <SendIcon className="w-5 h-5 text-gray-400 hover:text-primary transition-colors"/> 
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

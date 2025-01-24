import { Heart, LucideMessageSquare, MessageCircle, MoreHorizontal, SendIcon, Share, Share2 } from "lucide-react"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"
import { PostCardProps } from "@/types/Post"
import { Avatar } from "../ui/avatar"
import PostVoice from "./PostVoice"



export function PostCard({ 
  content, 
  image, 
  audioUrl, 
  timestamp,
  type,
  likes, 
  comments,
  profile,
  author,
  color,
  since,
  id,
  url
}: PostCardProps) {
  return (
    <div className="bg-[#363636] px-6 py-4 mb-6 rounded-3xl">
    <div className="flex justify-between">
    <div className="flex justify-between w-13">
      <div className=''>
      <Avatar style={{ background:`url(${profile})`,backgroundPosition:"center",backgroundSize:"cover" }} className='cursor-pointer w-10 h-10 rounded-xl'>
                    
                   
                    </Avatar>
      </div>
    
    
            <div className="flex flex-1  flex-col max-w-full ml-2">
              <h2 className="font-bold text-sm text-gray-400" >{author}</h2>
              <span className="text-sm text-gray-500 ">{since}</span>
            </div>
        </div>
        <div className="text-white">
       <MoreHorizontal/>
        </div>
    </div>
  
  {
    type==0 &&  <div className="mt-5 h-96 flex justify-center items-center  p-10 px-8 rounded-2xl " style={{ background:`${color}` }}>
        
                  <div className="mt-5">
                    <h2 className="text-2xl text-center font-bold" style={{ color:"white" }}>{content}</h2>
                  </div>
    
              </div>
  }

  {
    type==1 && <section>
                    <div className='mt-4 text-white'>
                        {content}
                    </div>
                    <div className="mt-5 h-96 flex justify-center items-center  p-10 px-8 rounded-2xl " style={{ background:`url(${image})`,backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat: "no-repeat" }}>
                  </div>
              </section>
  }

  {
    type==2 &&  <div className="mt-5 h-96 flex justify-center items-center  p-10 px-8 rounded-2xl " style={{ background:`${color}` }}>
        
    <div className="mt-5">
            <h2 className="text-3xl font-bold" style={{ color:"white" }}><PostVoice heightVoice={50} widthVoice={500} audioUrl={`${url}`} waveId={`${id}`}/></h2>
          </div>
          
      </div>
  }
 
    
    <div className="flex mt-5 justify-between items-center">
      <div className="flex items-center gap-3 flex-1">
        
      <Avatar style={{ background:"url('/profile.jpg')",backgroundPosition:"center",backgroundSize:"cover" }} className='cursor-pointer w-8 h-8 rounded-xl'>
            </Avatar>
            <div className="w-full relative">
            <textarea name="" id="" placeholder='Enter your comment' className={`font-bold placeholder:text-sm  w-full bg-[#282828] resize-none max-h-12 flex justify-center relative overflow-y-hidden border-[#00000041] rounded-2xl placeholder:text-[#ffffff21] py-4 px-3 cursor-pointer        text-white  text-sm`} ></textarea>
            <div className="absolute bottom-2  right-4">
            <SendIcon className="w-6 h-6 text-gray-400"/> 
            </div>
            </div>
            
      </div>
      <div className='flex w-[12rem]  justify-around text-black mt-5'>
          <div className='flex items-center gap-1'>
          <Heart className={` text-gray-300 ${likes>0 && "fill-current text-primary"}  text-md w-6 h-6`}/><span className={`text-[0.8rem] text-gray-300 ${likes>0 && "font-bold text-primary"}`}>{likes}</span> 
          
          </div>
          <div className='flex items-center gap-1 text-gray-300'>
          <LucideMessageSquare className="w-6 h-6"/> <span className='text-[0.8rem]'>{comments}</span> 
        </div>
        <div className='flex items-center gap-1 text-gray-300'>
          <Share className='w-6 h-6'/><span className='text-[0.8rem]'>0</span> 
        </div>
       
        
        </div>
    </div>
  </div>
  )
}

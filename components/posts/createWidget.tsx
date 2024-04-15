import React from 'react'
import { Textarea } from '../ui/textarea'
import { CirclePlus, Mic, Send } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../ui/button'

export default function CreateWidget() {
  return (
    <div className="bg-white relative rounded-3xl w-[90vw] py-[5rem] mt-3 flex justify-center">
  <div className="w-[90%] relative">
  <Textarea name='content' placeholder="Type your message here." className={`font-bold w-full py-[5rem] flex justify-center relative overflow-y-hidden border-[#00000041] rounded-2xl placeholder:text-gray-300         text-black  text-xl`}  />
  <div className="flex justify-end absolute bottom-4 w-[100vw]">
  <div className="flex flex-1  items-center gap-3 mx-4 ">
      <div className="bg-black p-4 rounded-full cursor-pointer">

      </div>
      <div className="bg-primary p-4 rounded-full cursor-pointer">

      </div>
      <div className=" p-4 rounded-full cursor-pointer" style={{ background:"linear-gradient(to top left,#fcc5e4,#fda34b,#ff7882,#c8699e,#7046aa,#0c1db8,#020f75)" }}>

      </div>
      <div className=" p-4 rounded-full cursor-pointer" style={{ background:"linear-gradient(to top left,#000000,#434343)" }}>

      </div>
      <div className="cursor-pointer" >
        <Mic className="w-[2rem]"/>
      </div>
      <div className="cursor-pointer">
        <Link href="/new/post">
        <CirclePlus/>
        </Link>
        
      </div>
  </div>
  <div className="w-[28%]">
    <Button>Publier<Send className="w-5 ml-1"/></Button>
  </div>
  </div>
  
  </div>


 


</div>
  )
}



import Hero from "@/components/Hero";
import Header from "@/components/ui/Header";
import {HomeComponent} from "@/components/Home/Home";
import Sidebar from "@/components/sidebar";
import HomeAuth from "@/components/Home/HomeAuth";
import HeaderProfile from "@/components/header/HeaderProfile";
import { Textarea } from "@/components/ui/textarea";
import { CirclePlus, Heart, LucideMessageSquare, Mic, MoreHorizontal, Send, Share, ThumbsDown, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CreateWidget from "@/components/posts/createWidget";
import HeaderAuth from "@/components/header/HeaderAuth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import RecentPost from '../components/posts/recentPost';

export default function Home() {
  return (
    <section>

<div className="bg-gray-900">
    
   
    
    </div>

    <HomeComponent>

    <HeaderProfile param="posts"/>

<section className="flex">
<section className="w-[20rem]">
zz
</section>
<section className="flex-1  flex flex-col gap-10 justify-center">
<CreateWidget/>

<section>
<div>
<h2 className="font-bold text-gray-700 text-xl">Recents posts</h2>
<RecentPost/>
</div>
<section>
<h2 className="font-bold text-gray-700 text-xl">Mon Mur</h2>
<div className="mt-5 flex flex-col gap-3">
  <div className="bg-white px-12 py-12 rounded-3xl">
    <div className="flex justify-between">
    <div className="flex justify-between w-[5rem] gap-3 ">
        <Avatar className='cursor-pointer'>
                    <AvatarImage src="/hidd.jpg" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
            </Avatar>
    
            <div className="flex flex-col">
              <h2 className="font-bold text-md " style={{ color:"black" }}>#uizog234</h2>
              <span className="text-sm text-gray-500 ">1h ago</span>
            </div>
        </div>
        <div className="">
       <MoreHorizontal/>
        </div>
    </div>
  
  <div className="mt-5 h-96 flex justify-center items-center  p-10 px-8 rounded-2xl " style={{ background:"linear-gradient(to top left,#000000,#434343)" }}>
        
        <div className="mt-5">
          <h2 className="text-3xl font-bold" style={{ color:"white" }}>-How create post in Hide ,Please..I have forget that...</h2>
        </div>
        
    </div>
    
    <div className="flex mt-5 justify-between items-center">
      <div className="flex items-center gap-3 flex-1">
        
      <Avatar className='cursor-pointer'>
                    <AvatarImage src="/hidd.jpg" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="w-full">
            <Textarea className="" placeholder="Enter your comment" />
            </div>
            
      </div>
      <div className='flex w-[12rem]  justify-around text-black mt-5'>
          <div className='flex items-center gap-1'>
          <Heart className="font-bold text-primary text-xl"/><span className='text-[0.8rem] text-primary font-bold'>3</span> 
          
          </div>
        <div className='flex items-center gap-1'>
          <Share/><span className='text-[0.8rem]'>0</span> 
        </div>
       
        
        </div>
    </div>
  </div>
</div>

</section>

</section>
</section>
<section className="w-[6rem]">

</section>
</section>

    </HomeComponent>
  </section>
  );
}

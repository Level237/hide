import Hero from "@/components/Hero";
import Header from "@/components/ui/Header";
import {HomeComponent} from "@/components/Home/Home";
import Sidebar from "@/components/sidebar";
import HomeAuth from "@/components/Home/HomeAuth";
import HeaderProfile from "@/components/header/HeaderProfile";
import { Textarea } from "@/components/ui/textarea";
import { CirclePlus, Heart, LucideMessageSquare, Mic, MoreHorizontal, Send, SendIcon, Share, ThumbsDown, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CreateWidget from "@/components/posts/createWidget";
import HeaderAuth from "@/components/header/HeaderAuth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import RecentPost from '../components/posts/recentPost';
import PostList from "@/components/posts/postList";

export default function Home() {
  return (
    <section>

<div className="bg-gray-900">
    
   
    
    </div>

    <HomeComponent>

    <HeaderProfile param="posts"/>

<section className="flex justify-between">
<section className="w-[90rem]">
SideBar Section
</section>
<section className=" flex flex-col max-w-full min-w-[50rem]  gap-10 justify-center">
<CreateWidget/>

<section>
<div>
<h2 className="font-bold text-gray-700 text-xl">Recents posts</h2>
<RecentPost/>
</div>
<section>
<h2 className="font-bold text-gray-700 text-xl">Mon Mur</h2>
<PostList/>

</section>

</section>
</section>
<section className="w-[6rem]">

</section>
<section className="w-[70rem]">
SideBar Section
</section>
</section>

    </HomeComponent>
  </section>
  );
}

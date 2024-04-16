import Hero from "@/components/Hero";
import Header from "@/components/ui/Header";
import {HomeComponent} from "@/components/Home/Home";
import Sidebar from "@/components/sidebar";
import HomeAuth from "@/components/Home/HomeAuth";
import HeaderProfile from "@/components/header/HeaderProfile";
import { Textarea } from "@/components/ui/textarea";
import { CirclePlus, LucideMessageSquare, Mic, Send, Share, ThumbsDown, ThumbsUp } from "lucide-react";
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

<section className="flex flex-col mx-10 gap-10 justify-center">
<CreateWidget/>

<section>
<div>
<h2 className="font-bold text-gray-700 text-xl">Recents posts</h2>
<RecentPost/>
</div>
</section>
</section>
    </HomeComponent>
  </section>
  );
}

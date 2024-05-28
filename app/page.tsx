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
import HomeSidebar from "@/components/sidebar/home/HomeSidebar";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import HomeRightSidebar from "@/components/sidebar/home/HomeRightSidebar";

export default function Home() {
  return (
    <section>



    <HomeComponent>

    <HeaderAuth/>
  <section className="flex items-center flex-col justify-items-start  w-[100%]  h-screen">
  
  <HomeSidebar/>
  <section className=" fixed left-[350px] h-screen top-0 bottom-0 right-[350px] overflow-y-scroll scroll-m-0  my-24">
    <CreateWidget/>
  <PostList/>
  </section>
  <HomeRightSidebar/>
 
  </section>
    
      
    
 
 




    </HomeComponent>
  </section>
  );
}

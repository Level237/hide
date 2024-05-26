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



    <HomeComponent>

    <HeaderProfile param="posts"/>

<section className="flex justify-between">
<section className="w-[130rem]">
SideBar Section
</section>
<section className=" flex flex-col max-w-full min-w-[45rem]  gap-3 justify-center">
<CreateWidget/>

<section>

<section>

<PostList/>

</section>

</section>
</section>
<section className="w-[6rem]">

</section>
<section className="w-[90rem]">
SideBar Section
</section>
</section>

    </HomeComponent>
  </section>
  );
}

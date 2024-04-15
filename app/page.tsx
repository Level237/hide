import Hero from "@/components/Hero";
import Header from "@/components/ui/Header";
import {HomeComponent} from "@/components/Home/Home";
import Sidebar from "@/components/sidebar";
import HomeAuth from "@/components/Home/HomeAuth";
import HeaderProfile from "@/components/header/HeaderProfile";
import { Textarea } from "@/components/ui/textarea";
import { CirclePlus, Mic, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CreateWidget from "@/components/posts/createWidget";
import HeaderAuth from "@/components/header/HeaderAuth";

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
<h2 className="font-bold text-gray-700 text-xl">Post Récents</h2>
<div className="grid grid-cols-3 gap-3 mb-6 mt-5">
<div className="p-[8rem] rounded-2xl bg-white">

</div>
<div className="p-[8rem] rounded-2xl bg-white">

</div>
<div className="p-[8rem] rounded-2xl bg-white">

</div>
</div>
</div>
</section>
</section>
    </HomeComponent>
  </section>
  );
}

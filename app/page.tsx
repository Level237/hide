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

export default function Home() {
  return (
    <section>
    <HeaderProfile param="posts"/>

    <section className="flex flex-col mx-10 gap-10 justify-center">
<CreateWidget/>

<section>
  <div>
    <h2 className="font-bold text-gray-700 text-xl">Post Récents</h2>
  </div>
</section>
    </section>
  </section>
  );
}

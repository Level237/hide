import {HomeComponent} from "@/components/Home/Home";
import Link from "next/link";
import CreateWidget from "@/components/posts/createWidget";
import HeaderAuth from "@/components/header/HeaderAuth";
import PostList from "@/components/posts/postList";
import HomeSidebar from "@/components/sidebar/home/HomeSidebar";
import HomeRightSidebar from "@/components/sidebar/home/HomeRightSidebar";
import HomeNotification from "@/components/Home/HomeNotification";
export default function Notification(){

    return (
        <section>



        <HomeComponent>
    
        <HeaderAuth/>
      <section className="flex items-center flex-col justify-items-start  w-[100%]  h-screen">
      
      <HomeSidebar/>
      <section className=" fixed left-[350px] overflow-hidden h-screen top-0 bottom-0  right-[350px] overflow-y-scroll scroll-me-72  my-24">
      <HomeNotification/>
      </section>
      <HomeRightSidebar/>
     
      </section>
        
          
        
     
     
    
    
    
    
        </HomeComponent>
      </section>
    )
}
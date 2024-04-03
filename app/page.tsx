import Hero from "@/components/Hero";
import Header from "@/components/ui/Header";
import {HomeComponent} from "@/components/Home/Home";
import Sidebar from "@/components/sidebar";
import HomeAuth from "@/components/Home/HomeAuth";

export default function Home() {
  return (
   <section>
    <div className="bg-gray-900">
    <Header/>
   
    
    </div>
    <HomeComponent>
    <HomeAuth/>
    </HomeComponent>
   </section>
  );
}

import Hero from "@/components/Hero";
import Header from "@/components/ui/Header";
import {HomeComponent} from "@/components/Home/Home";
import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
   <section>
    <div className="bg-gray-900">
    <Header/>
   
    
    </div>
    <HomeComponent>
    <div className="bg-gray-800 w-[20rem] h-[100vh]">

    </div>
    </HomeComponent>
   </section>
  );
}

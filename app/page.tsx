import Hero from "@/components/Hero";
import Header from "@/components/ui/Header";
import Image from "next/image";

export default function Home() {
  return (
   <section>
    <div className="bg-gray-900">
    <Header/>
    <Hero/>
    </div>
    
   </section>
  );
}

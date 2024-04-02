import Hero from "@/components/Hero";
import Header from "@/components/ui/Header";
import HomeComponent from "@/components/Home/Home";

export default function Home() {
  return (
   <section>
    <div className="bg-gray-900">
    <Header/>
    <HomeComponent/>
    </div>
    
   </section>
  );
}

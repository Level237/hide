
import RegisterForm from "@/components/register"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"


export default async function RegisterPage(){

    return (
        <>
        <section className="flex gap-24 flex-row items-center">
        <section className='h-[100vh] flex-1 z-[10]   relative' style={{ background:"url('/cover.jpg')",backgroundPosition:"center",backgroundSize:"cover" }}>

        </section>
        <section className="flex-1 flex items-start flex-col justify-center">
            <div className="flex items-center">
            <Image src="/logo.png" alt="logo" height={80} width={80} className="mx-auto" />
            <h1 className="text-3xl text-white font-bold text-center">Register</h1>
            </div>
        
   <RegisterForm/>
        </section>
        </section>
        
       
        </>
    )
} 

import RegisterForm from "@/components/register"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


export default async function RegisterPage(){

    return (
        <>
        <section className="container mt-36 flex items-center flex-col justify-center">
            <h1 className="text-2xl font-bold text-center">Register</h1>
   <RegisterForm/>
        </section>
       
        </>
    )
} 
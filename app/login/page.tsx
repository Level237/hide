
import LoginForm from "@/components/Login"
import RegisterForm from "@/components/register"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { db } from "@/db"


export default async function LoginPage(){

  const users=await db.user.findMany()
    return (
        <>
        <section className="container mt-36 flex items-center flex-col justify-center">
            <h1 className="text-2xl font-bold text-center">Login</h1>
            {users.map(u=>u.password)}
   <LoginForm/>
        </section>
       
        </>
    )
} 
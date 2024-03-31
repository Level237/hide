import { register } from "@/actions/auth/register"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


export default async function RegisterPage(){

    return (
        <>
        <section className="container mt-36 flex items-center flex-col justify-center">
            <h1 className="text-2xl font-bold text-center">Register</h1>
            <form action={register}>
                <Input type="text" name="name" placeholder="Enter your Name" className="w-96 mt-5"/>
<Input type="email" name="email" placeholder="Enter your email" className="w-96 mt-5"/>
<Input type="text" name="phone" placeholder="Enter your phone number" className="w-96 mt-5"/>
<Input type="password" name="password" placeholder="Enter your password" className="w-96 mt-5"/>

<Button type="submit" className="mt-5">Register</Button>
</form>
        </section>
       
        </>
    )
} 
'use client'
import { registerAction } from "@/actions/auth/register"
import { useFormState } from "react-dom"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import FormBtn from "./common/FormBtn"
import LoginAction from "@/actions/auth/login"

export default function LoginForm() {

    
  return (
    <>
               <form action={LoginAction}>
<Input type="email" name="email" placeholder="Enter your email" className={`w-96 mt-5`}/>

<Input type="password" name="password" placeholder="Enter your password" className="w-96 mt-5"/>

<FormBtn>Register</FormBtn>
</form>
    </>
  )
}

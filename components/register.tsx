'use client'
import { registerAction } from "@/actions/auth/register"
import { useFormState } from "react-dom"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import {FormBtn} from "./common/FormBtn"

export default function RegisterForm() {

    const [formState,action]=useFormState(registerAction,{errors:{}})
   let errorName:any;
    formState.errors.name ? errorName="border-red-400 placeholder:text-[red]" : null
    formState.errors.email ? errorName="border-red-400 placeholder:text-[red]" : null
    
    return (
    <>
               <form action={action}>
                <Input   type="text" name="name" placeholder="Enter your Name" className={`w-96 mt-5 ${errorName}`}/>
                {formState.errors.name ? <div className='text-[red] w-96'>{formState.errors.name.join(', ')}</div> : null}
<Input type="email" name="email" placeholder="Enter your email" className={`w-96 mt-5 ${errorName}`}/>
{formState.errors.email ? <div className='text-[red] w-96'>{formState.errors.email.join(', ')}</div> : null}
<Input type="text" name="phone" placeholder="Enter your phone number" className="w-96 mt-5"/>
<Input type="password" name="password" placeholder="Enter your password" className="w-96 mt-5"/>

<FormBtn className="w-full px-4 py-2 text-white font-medium">  Sign in</FormBtn>
</form>
    </>
  )
}

"use client"
import React from 'react'
import { Button } from '../ui/button'
import { useFormStatus } from 'react-dom'
import { Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  }
const FormBtn=React.forwardRef<HTMLInputElement,InputProps>(({ className,children }) =>{
  const {pending}=useFormStatus()

  return (
    <div>
      {
        !pending ?  <Button  type="submit"  className={cn(
          "mt-5",
          className
        )} variant="default"  >{children}</Button> : <Button className={cn(
          "mt-5",
          className
        )} disabled>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Please wait
      </Button>
      }
 
    </div>
  )
})

FormBtn.displayName = "FormBtn"

export { FormBtn }

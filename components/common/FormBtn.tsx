import React from 'react'
import { Button } from '../ui/button'
import { useFormStatus } from 'react-dom'
import { Loader2 } from 'lucide-react'

interface FormButtonProps{
  children:React.ReactNode
}
export default function FormBtn({children}:FormButtonProps) {
  const {pending}=useFormStatus()

  return (
    <div>
      {
        !pending ?  <Button type="submit" className="mt-5"  >{children}</Button> : <Button className="mt-5" disabled>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Please wait
      </Button>
      }
     
    </div>
  )
}

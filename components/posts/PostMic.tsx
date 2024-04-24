import { Circle, Mic, Pause, StopCircle } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import { animate } from 'framer-motion'

export default function PostMic() {

    const handleAnimation=async()=>{
        await animate('#target',{x:0})
       await animate('#target',{y:100},{duration:0.5})
       await animate('#target',{opacity:"0"},{duration:0.5})
      animate('#target2',{display:"block"},{duration:0.5})
        animate('#target4',{scale:1,display:"flex"})
        animate('#target3',{scale:1,display:"flex"})
    }
  return (
    <div>
      <Circle id="target2" className="text-[#f33] hidden fill-current mx-[-1rem] mb-12  animate-pulse w-[8rem] h-[8rem] border-gray-600"/>
<Mic id='target'onClick={()=>handleAnimation()} className="w-16 h-16 z-[99999] cursor-pointer"/>
<div className="flex justify-center mx-[-2rem] items-center mt-5 w-full gap-5">
<div >
  <Button type="button" id='target4' variant="outline" className="text-primary p-5 hidden">Pause<Pause/></Button>
</div>

<div >
  <Button id="target3" type="button" variant="outline" className="text-primary p-5 hidden">Stop<StopCircle/></Button>
</div>

</div>
    </div>
  )
}

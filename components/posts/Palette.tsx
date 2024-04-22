import { PostStore } from '@/store/PostStore'
import React from 'react'
import { PickerExample } from '../PicExample'

export default function Palette() {
    const changeBgHandler=PostStore((state)=>state.changeBgHandler)
    const bgPost=PostStore((state)=>state.bgPost)
    return (
    <div className=' w-[14rem] grid grid-cols-4 gap-4 z-20' >
    <div  onClick={()=>changeBgHandler("#2cac5c")} className='h-10 cursor-pointer bg-primary rounded-sm'>

    </div>
    <div onClick={()=>changeBgHandler("#ff0000")} className='h-10 cursor-pointer bg-[#ff0000] rounded-sm'>

    </div>
    <div onClick={()=>changeBgHandler("#000")} className='h-10 cursor-pointer bg-[#000] rounded-sm'>

    </div>
    <div style={{ background:`${bgPost}` }} className='h-10 relative flex flex-row justify-center items-center cursor-pointer   rounded-sm'>
        <Palette/>
        <PickerExample changeBgHandler={changeBgHandler}/>
        
    </div>
  
</div>
  )
}

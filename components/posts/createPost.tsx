'use client'

import {motion,useAnimate} from "framer-motion"
import React, { useEffect, useRef, useState } from 'react'
import { Textarea } from '../ui/textarea'
import { AlignHorizontalDistributeCenter, Bold, BookHeart, Camera, Circle, CircleStop, CloudUpload, Edit, Eye, File, FileQuestion, GalleryHorizontal, Home, Italic, ListMusic, LucideCircleSlash2, Mic, MicOff, MicVocalIcon, MoveLeft, Pause, PencilLine, Play, Save, Send, SendIcon, ShieldClose, Smile, SmilePlus, Speech, SpeechIcon, StickyNote, StopCircle, Trash, VenetianMaskIcon, Waves, X } from 'lucide-react'
import { Button } from '../ui/button'
import { PickerExample } from '../PicExample'
import { useRouter } from 'next/navigation'
import { Input } from '../ui/input'
import CreatePost from '@/actions/post/create'
import { FormBtn } from "../common/FormBtn"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import {parseAsString, useQueryState} from "nuqs"
import { PostStore } from "@/store/PostStore"
import WaveSurfer from 'wavesurfer.js';
import RegionsPlugin from 'wavesurfer.js/dist/plugins/regions.js';
import RecordPlugin from 'wavesurfer.js/dist/plugins/record.js';
import TimelinePlugin from 'wavesurfer.js/dist/plugins/timeline.js';
import paths from "@/path"

import PostMic from "./mic/PostMic"
import Image from "next/image"
import { Separator } from "../ui/separator"
import Palette from "./Palette"
import { Record } from "./mic/record"
import RecordMic from "./mic/RecordMic"
import MicAnimate from "./mic/mic"


type PostType={
  type:string | null
}
export default function Post() {
  const searchParams=useQueryState('type',)
  const  [visible,setVisible]=useState(false)
  const [query,setQuery]=useQueryState("type",{defaultValue:""})
  const [scope,animate]=useAnimate();
  const changeBgHandler=PostStore((state)=>state.changeBgHandler)
  const [image,setImage]=useState<String>("")
  const [loadImage,setLoadImage]=useState<boolean>(false)
  const router=useRouter()
   const bgPost=PostStore((state)=>state.bgPost)
   const record=PostStore((state)=>state.playRecord)
   const isRecording=PostStore((state)=>state.isRecording)
   const waveformRef = useRef(null);
   const wavesurfer = useRef<any>(null);
   const [audioURL, setAudioURL] = useState<any>('');
   const mediaRecorder = useRef<any>(null);
   const [recordingTime, setRecordingTime] = useState(0);
   const timelineRef = useRef<any>(null);
     
     let time :any;
     useEffect(() => {
       if (waveformRef.current) {
         wavesurfer.current = WaveSurfer.create({
           container: waveformRef.current,
           waveColor: 'white',
           progressColor: 'white',
           backend: 'WebAudio',
           height: 50,
           normalize: true,
           hideScrollbar: true,
           plugins: [
            
             RecordPlugin.create({}),
             
           ],
         });
   
         wavesurfer.current.on('ready', () => {
           const timeline = Object.create(TimelinePlugin);
           
         });
   
         wavesurfer.current.on('audioprocess', (time:number) => {
           if (isRecording) {
             // Throttle updates to avoid performance issues
             requestAnimationFrame(() => {
               const duration = wavesurfer.current.getDuration();
               
               wavesurfer.current.clearRegions();
               wavesurfer.current.addRegion({
                 start: 0,
                 end: time,
                 color: 'rgba(0, 123, 255, 0.1)',
               });
             });
           }
         });
       }
   
       let timer:any;
       console.log(isRecording);
       
         timer = setTimeout(() => {
           mediaRecorder.current?.stop();
           record(false)
         }, 15000); // 30000 ms = 30 secondes
       
       return () => {
         clearTimeout(timer);
         if (wavesurfer.current) {
           wavesurfer.current.destroy();
         }
       };
     }, []);
     const startRecording = async () => {
       if (!navigator.mediaDevices) {
         console.error('Enregistrement non pris en charge par ce navigateur');
         return;
       }
   
       const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
       mediaRecorder.current = new MediaRecorder(stream);
   
       mediaRecorder.current.onstart = () => {
         record(true)
         time = setInterval(() => {
           setRecordingTime((prevTime) => prevTime + 1);
         }, 1000);
         wavesurfer.current.empty();
         
       };
   
       mediaRecorder.current.onstop = () => {
         record(false)
         clearInterval(time)
       };
   
       mediaRecorder.current.ondataavailable = (event:any) => {
         const audioBlob = new Blob([event.data], { type: 'audio/wav' });
         const audioUrl = URL.createObjectURL(audioBlob);
         setAudioURL(audioUrl);
         wavesurfer.current.loadBlob(audioBlob);
       };
   
       mediaRecorder.current.start();
     };
   
     const stopRecording = () => {
       mediaRecorder.current?.stop();
     };
   
     const handleRecordClick = () => {
       if (isRecording) {
         stopRecording();
       } else {
        setVisible(true)
         setRecordingTime(0)
         startRecording();
        record(true)
       }
     };
   
     const handlePlay = () => {
       wavesurfer.current?.playPause();
     };
   const destroy=()=>{
    wavesurfer.current.destroy()
    setVisible(false)
   }
     const formatTime = (time:any) => {
       const minutes = Math.floor(time / 60);
       const seconds = time % 60;
       return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
     };
   const PostInit=<> <div 
 
   className='  flex mt-6 gap-5 max-h-[100%]  items-stretch  overflow-y-hidden'>
     <section className="w-[25rem] max-w-[300px]  fixed  py-8  bg-[#363636]  rounded-xl ">
      <section className="flex mx-5 flex-col gap-3">
        <div>
        <Image src="/logo.png" alt="logo" height={50} width={50} className="mx-auto" />
        </div>
        
        <div className="flex flex-col">
          <h2 className="text-sm text-gray-300 font-bold">Background Post</h2>
          </div>
        {query!=="media-post" &&  <div className="flex flex-col gap-4">
          

          <div>

<label className="inline-flex items-center cursor-pointer">
  <input type="checkbox" value="" className="sr-only peer" />
  <div className="relative w-11 h-6 bg-[#262626] rounded-full peer peer-focus:ring-4 peer-focus:ring-[#262626] dark:peer-focus:ring-[#262626] dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
  <span className="ms-3 text-sm font-medium text-gray-300 dark:text-gray-300">Hide Post</span>
</label>

<label className="inline-flex mt-3 items-center cursor-pointer">
  <input type="checkbox" value="" className="sr-only peer" />
  <div className="relative w-11 h-6 bg-[#262626] rounded-full peer peer-focus:ring-4 peer-focus:ring-[#262626] dark:peer-focus:ring-[#262626] dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
  <span className="ms-3 text-sm font-medium text-gray-300 dark:text-gray-300">Hide Comment</span>
</label>

          </div>

          </div>}
       {query==="media-post" &&  <div className="flex flex-col gap-4">
          <h2 className="text-sm">Media</h2>


          <div className="  w-full h-12  bg-grey-lighter">

            {!image && <label className="flex flex-col items-center px-4 py-6   text-blue cursor-pointer border rounded-lg shadow-lg bg-gray-500">

{loadImage &&   
<div className="flex flex-col items-center justify-center gap-2">
<div role="status">
<svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-pink-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
</svg>
<span className="sr-only">Loading...</span>

</div>
<div>
  <span className="text-white">Loading...</span>
</div>
</div>
}
{!loadImage && <><svg width="20" height="20" viewBox="0 -0.5 18 18" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#ffffff" fill-rule="evenodd" d="M474.188327,259.775909 L480.842912,259.775909 L477.549999,256.482996 L474.375904,259.65709 C474.321124,259.71187 474.256777,259.751373 474.188327,259.775909 Z M474,258.618781 L474,247.775909 L486,247.775909 L486,254.968826 L483.657827,252.626653 C483.470927,252.439753 483.148791,252.4342 482.953529,252.629462 C482.940375,252.642616 482.928101,252.656403 482.916711,252.670736 C482.913161,252.674075 482.909651,252.677479 482.906183,252.680947 L479.034173,256.552957 L477.918719,255.437503 C477.808988,255.327771 477.655516,255.279359 477.507786,255.29536 C477.387162,255.302309 477.267535,255.351246 477.17513,255.44365 L474,258.618781 Z M482.257125,259.775909 L486,259.775909 L486,256.377007 L485.996984,256.380023 L483.309152,253.692192 L479.74128,257.260064 L482.257125,259.775909 Z M487,259.406871 L487.960593,259.541874 C488.51207,259.619379 489.020377,259.235606 489.097766,258.684953 L490.765938,246.815293 C490.843443,246.263816 490.459671,245.75551 489.909017,245.678121 L478.039358,244.009949 C477.487881,243.932444 476.979574,244.316216 476.902185,244.86687 L476.633887,246.775909 L474.006845,246.775909 C473.449949,246.775909 473,247.226689 473,247.782754 L473,259.769063 C473,260.32596 473.45078,260.775909 474.006845,260.775909 L485.993155,260.775909 C486.550051,260.775909 487,260.325128 487,259.769063 L487,259.406871 Z M487,258.397037 L488.10657,258.552556 L489.776647,246.669339 L477.89343,244.999262 L477.643739,246.775909 L485.993155,246.775909 C486.54922,246.775909 487,247.225857 487,247.782754 L487,258.397037 Z" transform="translate(-473 -244)"></path> </g></svg>
<span className="mt-2 text-white text-sm">Upload your Media</span></>}

<input onChange={(e)=>{
  setLoadImage(true)
    setTimeout(()=>{
      if(e.target.files?.length===1){
      setImage(URL.createObjectURL(e.target.files[0]));
      setLoadImage(false)
    }
    },[2000])
    
 
}} type='file' className="hidden"/>

</label>}
  
</div>

          </div>}
          {image && query==="media-post" && <>
          <div className="flex flex-col mt-[-5rem]">
            <div className="flex mb-5 items-center justify-between">
            <div  className='p-2 flex items-center gap-2 bg-gray-600 mt-5 cursor-pointer  rounded-lg'>
              <div className="text-[0.7rem] text-white" ><h2>Edit</h2></div>
           <Edit className="h-4 w-4 text-white" onClick={()=>setQuery(c=> "recording")}/>
           
           </div>
           <div  className='p-2  flex items-center gap-2 bg-red-600 mt-5 cursor-pointer  rounded-lg'>
              <div className="text-[0.7rem] text-white" ><h2>Delete</h2></div>
           <Trash className="h-4 w-4 text-white" onClick={()=>setQuery(c=> "recording")}/>
           
           </div>
            </div>
            <div>
            <Image src={image} className="w-full h-[10rem]" width="100" height="100" alt="dd"/>
            </div>
          
          </div>
          </>}
          
      </section>
     </section>
     <section className="  right-[350px] fixed left-[350px]  bg-[#363636] rounded-2xl py-3 px-8">
     
     <form action={CreatePost} className=''>
      
       <div className='' >
        {query==="recording" && <div style={{ background:`${bgPost}` }} className={`font-bold overflow-y-hidden placeholder:text-gray-300     top-0 h-full py-[18rem]  text-center  text-white   text-xl`}>
          <motion.div
          ref={scope} 
          
          >

          <PostMic/>

          </motion.div>
          
          
          </div>}
          <>
          <div  className={`  overflow-y-hidden placeholder:text-gray-300 `}>
          

          <h2 className="text-2xl text-gray-300">Post</h2>
          <div className="flex relative justify-center items-center w-[100%]">
            <div className="absolute bottom-20 left-64 z-30 flex justify-center">
             <MicAnimate/>
            </div>
          <textarea name="" id="" style={{ background:bgPost }} placeholder='Tell your hide post to your friend' className={`font-bold peer-focus:ring-[#262626] peer-focus:ring-4 mt-5 placeholder:text-sm px-24  w-full bg-[#282828] resize-none h-[12rem] flex justify-center relative overflow-y-hidden border-[#00000041] rounded-2xl placeholder:text-[#ffffff21] py-12  cursor-pointer        text-white  text-sm`} ></textarea>
          <div className="absolute top-12 left-8">
          <Avatar style={{ background:"url('/profile.jpg')",backgroundPosition:"center",backgroundSize:"cover" }} className='cursor-pointer w-9 h-9 rounded-xl'>
            </Avatar>
          </div>
          <div className="absolute right-4 top-8 left-24">
         {visible && <div className="text-sm text-white" id='timeline' ref={timelineRef}>{formatTime(recordingTime)}</div>}
          
          <div ref={waveformRef} className='waveform w-full h-12'></div>
{visible && <div className="flex flex-col items-start gap-3" >


  

<div className="flex flex-row justify-center" >
<Button onClick={handlePlay} disabled={!audioURL}  type="button"  className="text-white bg-transparent p-0 hover:bg-transparent"><Play className="w-8"/></Button>
  <Button onClick={handleRecordClick} type="button"   className="text-white bg-transparent p-0 hover:bg-transparent">
  {isRecording ? <><div className='flex gap-2 items-center'><StopCircle className="w-8"/></div></> : <><div className='flex gap-2 items-center'><SpeechIcon/></div></>}
    </Button>
    <div onClick={destroy} className='flex gap-2 items-center cursor-pointer'><X className="w-8 text-white"/></div>
    
</div>
</div>}




          </div>
          
          </div>
          <section className="flex items-center mt-12">
          <div className="grid grid-cols-8 flex-1 gap-8 ">
          <div onClick={()=>changeBgHandler("")} className="bg-[#262626]  cursor-pointer  w-8  flex items-center justify-center rounded-md">
<LucideCircleSlash2 className="text-red-500"/>
</div>
          <div onClick={()=>changeBgHandler("#2dac5c")} className="bg-primary cursor-pointer p-4 rounded-md">

          </div>
          <div onClick={()=>changeBgHandler("#000C40")} className="bg-[#000C40] cursor-pointer p-4 rounded-md">

          </div>
          <div  onClick={()=>changeBgHandler("#e65c00")} className="bg-[#e65c00] cursor-pointer p-4 rounded-md">

          </div>
          <div onClick={()=>changeBgHandler("#4801FF")} className="bg-[#4801FF] cursor-pointer p-4 rounded-md">

</div>
<div className="bg-[#262626]  cursor-pointer  w-8  flex items-center justify-center rounded-md">
<Image width="20" height="20" src='/palette.png' alt={'photo icon'}/>
</div>
          </div>
          <div className="flex flex-1 justify-end items-center gap-5">
         
          <div className="cursor-pointer">
          <Image width="32" height="32" src='/smile.png' alt={'photo icon'}/>
          </div>
          <div className="cursor-pointer">
          <Image width="26" height="26" src='/photo.png' alt={'photo icon'}/>
          </div>
          <RecordMic>
            
            <Image className="cursor-pointer" width="26" height="26" src='/mic.png' alt={'photo icon'}/>
            
          
          </RecordMic>
          <div className="">
            <Button className="bg-primary hover:bg-[#363636] flex items-center gap-2 px-8 py-3 rounded-lg">
            <h2 className="text-gray-200 text-sm">Send</h2>
            <SendIcon className="text-gray-200  w-5 h-5 cursor-pointer"/>
            </Button>
           
          </div>
         
         
          </div>
          </section>
         
          
          </div>
         
          </>
          {!query || query=="simple-post"  &&
          
          
          <Textarea name='content' placeholder="Type your message here." className={`font-bold overflow-y-hidden placeholder:text-gray-300     top-0 h-full py-[18rem]  text-center  text-white   text-xl`} style={{ background:`${bgPost}` }} />}
       
       
       </div>
       <Input type="hidden" name='color' value={bgPost} />
       <section className='  bottom-0 mx-5  w-[95vw] my-5 flex items-center justify-between absolute'>
      
       
       </section>
      
     </form>
   </section>
  
   </div></>
   let containerPost:React.ReactNode;

   if(query==="recording"){
    containerPost=PostInit
   }else if(!query || query==="simple-post"){
    containerPost=PostInit
   }else if(query==="media-post"){
    containerPost=PostInit
   }
  return containerPost
}


const PostContainer=({children}:{children:React.ReactNode})=>{
  
}



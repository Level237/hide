import { create } from "zustand";

interface PostStoreState{
    bgPost:string,
    changeBgHandler:(color:string)=>void,
    isRecording:boolean,
    audioUrl:string,
    audioBlob:any,
    setAudioUrl:(audioUrl:string)=>void,
    setAudioBlob:(audioBlob:any)=>void,
    playRecord:(isPlay:boolean)=>void
}
export const PostStore=create<PostStoreState>((set)=>({
    bgPost:"",
    isRecording:false,
    audioUrl:"",
    audioBlob:null,
changeBgHandler:(color:string)=>{
set({bgPost:color})
},
playRecord:(isPlay:boolean)=>{
    set({isRecording:true})
    
},
setAudioUrl:(audioUrl:string)=>{
    set({audioUrl:audioUrl})
},
setAudioBlob:(audioBlob:string)=>{
    set({audioBlob:audioBlob})
},
}))
import { create } from "zustand";

interface PostStoreState{
    bgPost:string,
    changeBgHandler:(color:string)=>void,
    isRecording:boolean,
    audioUrl:string,
    audioBlob:Blob,
    setAudioUrl:(audioUrl:string)=>void,
    setAudioBlob:(audioBlob:any)=>void,
    playRecord:()=>void
}
export const PostStore=create<PostStoreState>((set)=>({
    bgPost:"#000000",
    isRecording:false,
    audioUrl:"",
    audioBlob:new Blob(),
changeBgHandler:(color:string)=>{
set({bgPost:color})
},
playRecord:()=>{
    set((state) => ({ isRecording: !state.isRecording }));  
    
},
setAudioUrl:(audioUrl:string)=>{
    set({audioUrl:audioUrl})
},
setAudioBlob:(audioBlob:Blob)=>{
    set({audioBlob:audioBlob})
},
}))
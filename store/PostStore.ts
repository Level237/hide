import { create } from "zustand";

interface PostStoreState{
    bgPost:string,
    changeBgHandler:(color:string)=>void,
    isRecording:boolean,
    playRecord:(isPlay:boolean)=>void
}
export const PostStore=create<PostStoreState>((set)=>({
    bgPost:"",
    isRecording:false,
changeBgHandler:(color:string)=>{
set({bgPost:color})
},
playRecord:(isPlay:boolean)=>{
    set({isRecording:true})
    
}
}))
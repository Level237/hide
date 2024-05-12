import { create } from "zustand";

interface PostStoreState{
    bgPost:string,
    changeBgHandler:(color:string)=>void
}
export const PostStore=create<PostStoreState>((set)=>({
    bgPost:"#2dac5c",
changeBgHandler:(color:string)=>{
    console.log("leve");
set({bgPost:color})
}
}))
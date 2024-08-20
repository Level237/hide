import { create } from "zustand";

interface AlbumState{
    isVisible:boolean
    setVisible:()=>void,
    closeAlbum:()=>void
}

export const AlbumStore=create<AlbumState>((set)=>({
    isVisible:false,
    setVisible:()=>{
        set({isVisible:true})
    },
    closeAlbum:()=>{
        set({isVisible:false})
    }
}))
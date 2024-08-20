import { galeries } from "@/data/galeries/profile";
import { GaleryPhotoType } from "@/types/GaleryPhotoType";
import { create } from "zustand";

interface AlbumState{
    isVisible:boolean,
    photos:GaleryPhotoType[],
    currentPhoto:Number,
    setVisible:()=>void,
    closeAlbum:()=>void;
    goToNext:(currentNumber:number)=>boolean,
    goToPrevious:(currentNumber:number)=>void,
}

export const AlbumStore=create<AlbumState>((set)=>({
    isVisible:false,
    photos:galeries,
    currentPhoto:1,
    setVisible:()=>{
        set({isVisible:true})
    },
    closeAlbum:()=>{
        set({isVisible:false})
    },
    goToNext:(currentNumber:number)=>{
        if(currentNumber===galeries.length){
            return false;
        }
        set({currentPhoto:currentNumber+1})
        return true;
    },
    goToPrevious:(currentNumber:number)=>{
        if(currentNumber===1){
            return false
        }
        set({currentPhoto:currentNumber-1})
        return true;
    }
}))
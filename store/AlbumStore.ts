import { galeries } from "@/data/galeries/profile";
import { GaleryPhotoType } from "@/types/GaleryPhotoType";
import { create } from "zustand";

interface AlbumState{
    isVisible:boolean,
    photos:GaleryPhotoType[],
    currentPhoto:number,
    setVisible:()=>void,
    blockedPrevious:boolean,
    blockedNext:boolean,
    closeAlbum:()=>void;
    goToNext:(currentNumber:number)=>boolean,
    goToPrevious:(currentNumber:number)=>boolean,
}

export const AlbumStore=create<AlbumState>((set)=>({
    isVisible:false,
    photos:galeries,
    blockedNext:true,
    blockedPrevious:false,
    currentPhoto:1,
    setVisible:()=>{
        set({isVisible:true})
    },
    closeAlbum:()=>{
        set({isVisible:false})
    },
    goToNext:(currentNumber:number)=>{
        if(currentNumber===galeries.length){
            set({blockedNext:true})
            set({blockedPrevious:false})
            return true;
        }
        set({currentPhoto:currentNumber+1})
        set({blockedNext:false})
        return false
    },
    goToPrevious:(currentNumber:number)=>{
        if(currentNumber===1){
            set({blockedPrevious:true})
            set({blockedNext:false})
            return true;
        }
        set({currentPhoto:currentNumber-1})
        set({blockedPrevious:false})
        return false
    }
}))
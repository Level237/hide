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
    visiblePhoto:boolean;
    goToNext:(currentNumber:number)=>boolean,
    goToPrevious:(currentNumber:number)=>boolean,
}

export const AlbumStore=create<AlbumState>((set)=>({
    isVisible:false,
    photos:galeries,
    blockedNext:true,
    visiblePhoto:true,
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
            return true;
        }
        set((state)=>({currentPhoto:state.currentPhoto+1}))
        set({blockedNext:false})
        return false
    },
    goToPrevious:(currentNumber:number)=>{
        if(currentNumber===1){
            return true;
        }
       
        set((state)=>({currentPhoto:state.currentPhoto-1}))
        //console.log(currentNumber)
        set({blockedPrevious:false})
        return false
    }
}))
import { PostStore } from '@/store/PostStore'
import { PauseCircle, PlayCircle } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react'
import WaveSurfer from 'wavesurfer.js';
export default function Voice() {
    const waveformRef = useRef<any>(null);
    const isRecording=PostStore((state)=>state.isRecording)
    const playRecord=PostStore((state)=>state.playRecord)
    const audioUrl=PostStore((state)=>state.audioUrl)
    const audioBlob=PostStore((state)=>state.audioBlob)
    const setAudioUrl=PostStore((state)=>state.setAudioUrl)
    const setAudioBlob=PostStore((state)=>state.setAudioBlob)
    const mediaRecorder = useRef<any>(null);
    const wavesurfer = useRef<any>(null);
    const timelineRef = useRef<any>(null);
    const [isPlay, setIsPlay] = useState<boolean>(false);
    console.log(audioUrl)
    useEffect(() => {
        if (!waveformRef.current) {
            waveformRef.current = WaveSurfer.create({
                container: "#wavesurfer",
                waveColor: '#fff',
                progressColor: '#2CAC5DB9',
                height: 50,
                normalize: false,
                hideScrollbar: false,
                  backend: 'WebAudio',
                  width:500
              });
          console.log("lld")
         //const url=URL.createObjectURL(audioBlob)
          //waveformRef.current.load(url)
          waveformRef.current.loadBlob(audioBlob);
        }
      }, [audioBlob]);

      const handlePlay = () => {
        waveformRef.current?.playPause();
        setIsPlay(!isPlay)
      };
  return (
    <div className='relative flex gap-5 justify-center items-center' >
        
  <button className='' >{isPlay ?  <PauseCircle onClick={handlePlay} className='w-[2rem] h-[2rem]'/>   :   <PlayCircle onClick={handlePlay} className='w-[2rem] h-[2rem] '/>}</button>
  
  <div id="wavesurfer" />

  
  </div>
  )
}

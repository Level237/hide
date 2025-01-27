'use client'
import { Pause, PauseCircle, Play, PlayCircle } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';

const PostVoice: React.FC<{ audioUrl: string,waveId:string,widthVoice:number,heightVoice:number }> = ({ audioUrl,waveId,widthVoice,heightVoice }) => {
  const waveformRef = useRef<any>(null);
const [isPlay, setIsPlay] = useState<boolean>(false);
const [isVisible, setIsVisible] = useState<boolean>(true);
  useEffect(() => {
    if (!waveformRef.current) {
        waveformRef.current = WaveSurfer.create({
            container: `#${waveId}`,
            waveColor: '#FFFFFF',
            progressColor: '#2CAC5D',
            height: heightVoice,
            normalize: false,
            hideScrollbar: false,
              backend: 'WebAudio',
              width:widthVoice,
              cursorColor:"transparent",
              barWidth:2,
              barGap:4,
          });
          waveformRef.current.load(audioUrl);

    // Optional: Add event listeners or controls (play, pause, etc.)
   
    }
   
   
    
    
  }, [audioUrl]);
 
  const handlePlay = () => {
    waveformRef.current?.playPause();
    setIsPlay(!isPlay)
    setIsVisible(!isVisible)
  };
  return <>
  <div className='relative flex gap-2 justify-center items-center' >
  <button className='' >{isPlay ?  <PauseCircle onClick={handlePlay} className='w-[2rem] text-white h-[2rem]'/>   :   <PlayCircle onClick={handlePlay} className='text-white w-[2rem] h-[2rem] '/>}</button>
  
  <div id={waveId} />

  
  </div>

  </>;
};

export default PostVoice;

'use client'
import { Pause, PauseCircle, Play, PlayCircle } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';

const PostVoice: React.FC<{ audioUrl: string,waveId:string }> = ({ audioUrl,waveId }) => {
  const waveformRef = useRef<any>(null);
const [isPlay, setIsPlay] = useState<boolean>(false);
const [isVisible, setIsVisible] = useState<boolean>(true);
  useEffect(() => {
    if (!waveformRef.current) {
        waveformRef.current = WaveSurfer.create({
            container: `#${waveId}`,
            waveColor: '#fff',
            progressColor: '#2CAC5DB9',
            height: 50,
            normalize: false,
            hideScrollbar: false,
              backend: 'WebAudio',
              width:500
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
  <div className='relative flex gap-5 justify-center items-center' >
  <button className='' >{isPlay ?  <PauseCircle onClick={handlePlay} className='w-[2rem] h-[2rem]'/>   :   <PlayCircle onClick={handlePlay} className='w-[2rem] h-[2rem] '/>}</button>
  
  <div id={waveId} />

  
  </div>

  </>;
};

export default PostVoice;

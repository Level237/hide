'use client'
import { Pause, PauseCircle, Play, PlayCircle } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';

const PostVoice: React.FC<{ audioUrl: string }> = ({ audioUrl }) => {
  const waveformRef = useRef<any>(null);
const [isPlay, setIsPlay] = useState<boolean>(false);
  useEffect(() => {
    if (!waveformRef.current) {
        waveformRef.current = WaveSurfer.create({
            container: '#waveform',
            waveColor: '#fff',
            progressColor: '#2CAC5DB9',
            height: 100,
            normalize: false,
            hideScrollbar: true,
              backend: 'WebAudio',
              width:600
          });
          waveformRef.current.load(audioUrl);

    // Optional: Add event listeners or controls (play, pause, etc.)
    waveformRef.current.on('ready', () => {
      waveformRef.current?.play();
     
    });
    }
   
   
    
    
  }, [audioUrl]);
 
  const handlePlay = () => {
    waveformRef.current?.playPause();
    setIsPlay(!isPlay)
  };
  return <>
  <div className='relative absolute' onClick={handlePlay}>
  <div id="waveform" />

  <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[999]' >{isPlay ?  <PlayCircle className='w-56 h-56'/> :  <PauseCircle className='w-56 h-56'/>}</button>
  </div>
  

  
  </>;
};

export default PostVoice;

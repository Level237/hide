'use client'
import React, { useEffect, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';

const PostVoice: React.FC<{ audioUrl: string }> = ({ audioUrl }) => {
  const waveformRef = useRef<any>(null);

  useEffect(() => {
    if (!waveformRef.current) {
        waveformRef.current = WaveSurfer.create({
            container: '#waveform',
            waveColor: '#fff',
            progressColor: '#2cac5c',
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
 
  return <div id="waveform" />;
};

export default PostVoice;

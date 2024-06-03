import { PostStore } from '@/store/PostStore';
import React, { Component, useEffect, useRef,useState } from 'react'
import WaveSurfer from 'wavesurfer.js';
import RecordPlugin from 'wavesurfer.js/dist/plugins/record.js';
import TimelinePlugin from 'wavesurfer.js/dist/plugins/timeline.js';

type ButtonProps = React.HTMLProps<HTMLButtonElement>
export const Record=React.forwardRef<React.LegacyRef<HTMLDivElement>,ButtonProps>((props,ref)=>{
  
  const wavesurfer = useRef<any>(null);
  const isRecording=PostStore((state)=>state.isRecording)
  const record=PostStore((state)=>state.playRecord)
  const [audioURL, setAudioURL] = useState<any>('');
  const mediaRecorder = useRef<any>(null);
  const [recordingTime, setRecordingTime] = useState(0);
  const timelineRef = useRef<any>(null);
  console.log(ref)
  let time :any;
  useEffect(() => {
    if (ref) {
      ref = WaveSurfer.create({
        container: ref,
        waveColor: 'white',
        progressColor: 'purple',
        backend: 'WebAudio',
        height: 100,
        normalize: true,
        hideScrollbar: true,
        plugins: [
         
          RecordPlugin.create({}),
          
        ],
      });

     ref.on('ready', () => {
        const timeline = Object.create(TimelinePlugin);
        
      });

      ref.on('audioprocess', (time:number) => {
        if (isRecording) {
          // Throttle updates to avoid performance issues
          requestAnimationFrame(() => {
            const duration = ref.getDuration();
            
            ref.clearRegions();
            ref.addRegion({
              start: 0,
              end: time,
              color: 'rgba(0, 123, 255, 0.1)',
            });
          });
        }
      });
    }

    let timer:any;
    console.log(isRecording);
    
      timer = setTimeout(() => {
        mediaRecorder.current?.stop();
        record(false)
      }, 15000); // 30000 ms = 30 secondes
    
    return () => {
      clearTimeout(timer);
      if (ref) {
        ref.destroy();
      }
    };
  }, []);
  const startRecording = async () => {
    if (!navigator.mediaDevices) {
      console.error('Enregistrement non pris en charge par ce navigateur');
      return;
    }

    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorder.current = new MediaRecorder(stream);

    mediaRecorder.current.onstart = () => {
      record(true)
      time = setInterval(() => {
        setRecordingTime((prevTime) => prevTime + 1);
      }, 1000);
      ref.empty();
    };

    mediaRecorder.current.onstop = () => {
      record(false)
      clearInterval(time)
    };

    mediaRecorder.current.ondataavailable = (event:any) => {
      const audioBlob = new Blob([event.data], { type: 'audio/wav' });
      const audioUrl = URL.createObjectURL(audioBlob);
      setAudioURL(audioUrl);
      ref.loadBlob(audioBlob);
    };

    mediaRecorder.current.start();
  };

  const stopRecording = () => {
    mediaRecorder.current?.stop();
  };

  const handleRecordClick = () => {
    if (isRecording) {
      stopRecording();
    } else {
      setRecordingTime(0)
      startRecording();
    }
  };

  const handlePlay = () => {
    ref?.playPause();
  };

  const formatTime = (time:any) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };
  return (
    <>
    <div ref={ref} className='waveform w-full '></div>
    <div onClick={handleRecordClick}>
      {props.children}
    </div>
    </>
   
  )
})
Record.displayName='Record'


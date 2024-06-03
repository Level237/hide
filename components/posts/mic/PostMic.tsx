import { Circle, Mic, Pause, PlayCircle, Speech, StopCircle } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import { Button } from '../../ui/button'
import { animate } from 'framer-motion'
import WaveSurfer from 'wavesurfer.js';
import RegionsPlugin from 'wavesurfer.js/dist/plugins/regions.js';
import RecordPlugin from 'wavesurfer.js/dist/plugins/record.js';
import TimelinePlugin from 'wavesurfer.js/dist/plugins/timeline.js';
import { PostStore } from '@/store/PostStore';
import { Record } from '@/components/posts/mic/record';

export default function PostMic({children}:any,type:boolean) {

 
  const waveformRef = useRef(null);
  const wavesurfer = useRef<any>(null);
  const isRecording=PostStore((state)=>state.isRecording)
  const record=PostStore((state)=>state.playRecord)
  const [audioURL, setAudioURL] = useState<any>('');
  const mediaRecorder = useRef<any>(null);
  const [recordingTime, setRecordingTime] = useState(0);
  const timelineRef = useRef<any>(null);
    
    let time :any;
    useEffect(() => {
      if (waveformRef.current) {
        wavesurfer.current = WaveSurfer.create({
          container: waveformRef.current,
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
  
        wavesurfer.current.on('ready', () => {
          const timeline = Object.create(TimelinePlugin);
          
        });
  
        wavesurfer.current.on('audioprocess', (time:number) => {
          if (isRecording) {
            // Throttle updates to avoid performance issues
            requestAnimationFrame(() => {
              const duration = wavesurfer.current.getDuration();
              
              wavesurfer.current.clearRegions();
              wavesurfer.current.addRegion({
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
        if (wavesurfer.current) {
          wavesurfer.current.destroy();
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
        wavesurfer.current.empty();
      };
  
      mediaRecorder.current.onstop = () => {
        record(false)
        clearInterval(time)
      };
  
      mediaRecorder.current.ondataavailable = (event:any) => {
        const audioBlob = new Blob([event.data], { type: 'audio/wav' });
        const audioUrl = URL.createObjectURL(audioBlob);
        setAudioURL(audioUrl);
        wavesurfer.current.loadBlob(audioBlob);
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
      wavesurfer.current?.playPause();
    };
  
    const formatTime = (time:any) => {
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };
  return (
    <div >
      <Circle id="target2" className="text-[#f33] hidden fill-current mx-[-1rem] mb-12  animate-pulse w-[8rem] h-[8rem] border-gray-600"/>
      

<div id='timeline' ref={timelineRef}>{formatTime(recordingTime)}</div>
<div className="flex justify-center mx-[-2rem] items-center mt-5 w-full gap-5">


<div >
  <Button onClick={handlePlay} disabled={!audioURL}  type="button" variant="outline" className="text-primary p-5">Play/Pause</Button>
</div>
<div >
  <Button onClick={handleRecordClick} type="button"  variant="outline" className="text-primary p-5">
  {isRecording ? <><div className='flex gap-2 items-center'>Stop<StopCircle/></div></> : <><div className='flex gap-2 items-center'>Vocal<Speech/></div></>}
    </Button>
</div>
</div>
<div ref={waveformRef} className='waveform w-full '></div>
    </div>
  )
}

import { Circle, Mic, Pause, PlayCircle, Speech, StopCircle } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import { Button } from '../../ui/button'
import { animate } from 'framer-motion'
import WaveSurfer from 'wavesurfer.js';
import RegionsPlugin from 'wavesurfer.js/dist/plugins/regions.js';
import RecordPlugin from 'wavesurfer.js/dist/plugins/record.esm.js'
import TimelinePlugin from 'wavesurfer.js/dist/plugins/timeline.js';
import { PostStore } from '@/store/PostStore';
import { Record } from '@/components/posts/mic/record';

export default function PostMic({children}:any,type:boolean) {

  let record1:any;
  let scrollingWaveform = false
  const waveformRef = useRef(null);
  const waveRefMic = useRef(null);
  const wavesurfer = useRef<any>(null);
  const wavesMic = useRef<any>(null);
  const isRecording=PostStore((state)=>state.isRecording)
  const record=PostStore((state)=>state.playRecord)
  const [audioURL, setAudioURL] = useState<any>('');
  const mediaRecorder = useRef<any>(null);
  const [recordingTime, setRecordingTime] = useState(0);
  const timelineRef = useRef<any>(null);
  const [currentTime,setCurrentTime]=useState(0)
    let time :any;
    const handleRecordClick = () => {
      if (record1.isRecording() || record1.isPaused()) {

        record1.stopRecording()
        record(false)
      }else{
     record1.startRecording()
      }
    };
    useEffect(() => {
      if(waveRefMic.current){
        wavesMic.current = WaveSurfer.create({
          container: waveRefMic.current,
          waveColor: 'white',
          progressColor: 'purple',
          backend: 'WebAudio',
          cursorColor:"transparent",
          normalize:true,
          height:50,
              barWidth:2,
              barGap:4,
              plugins: [TimelinePlugin.create()]
        });
        record1= wavesMic.current.registerPlugin(RecordPlugin.create({ scrollingWaveform, renderRecordedAudio: false }))
        wavesMic.current.on('audioprocess',()=>{
          console.log("process")
      })
        record1.on('record-end',(blob:any)=>{
          const recordedUrl = URL.createObjectURL(blob)
          if (wavesMic.current) {
            wavesMic.current.destroy();
          }
          
          if (waveformRef.current) {
            wavesurfer.current = WaveSurfer.create({
              container: waveformRef.current,
              waveColor: 'white',
              progressColor: 'purple',
              backend: 'WebAudio',
              cursorColor:"transparent",
              normalize:true,
              hideScrollbar: true,
              barWidth:2,
              barGap:4,
             url:recordedUrl
            });
            
            wavesurfer.current.on('interaction', () => {
              wavesurfer.current.play()
            })
            
            wavesurfer.current.on('ready', () => {
              const timeline = Object.create(TimelinePlugin);
              //setAudioURL(recordedUrl)
            });
      
            wavesurfer.current.on('audioprocess',()=>{
              setCurrentTime(wavesurfer.current.getCurrentTime())
          })
          }
        })
      }
      
     
  
      return () => {
        //wavesurfer.current.un('audioprocess');
      };
    }, [handleRecordClick]);

    const handlePlay = () => {
      wavesurfer.current?.playPause();
    };
  
    const formatTime = (time:any) => {
      let date=new Date(0)
      date.setSeconds(time)
      return date.toISOString().substr(11,8)
    };
  return (
    <div >
      <Circle id="target2" className="text-[#f33] hidden fill-current mx-[-1rem] mb-12  animate-pulse w-[8rem] h-[8rem] border-gray-600"/>
      

<div id='timeline'>
                    {formatTime(currentTime)} </div>
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
<div ref={waveRefMic}></div>
    </div>
  )
}

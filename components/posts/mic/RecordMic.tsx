import { Circle, Mic, Pause, Play, PlayCircle, Speech, StopCircle } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import { Button } from '../../ui/button'
import { animate } from 'framer-motion'
import WaveSurfer from 'wavesurfer.js';
import RegionsPlugin from 'wavesurfer.js/dist/plugins/regions.js';
import RecordPlugin from 'wavesurfer.js/dist/plugins/record.esm.js'
import TimelinePlugin from 'wavesurfer.js/dist/plugins/timeline.js';
import { PostStore } from '@/store/PostStore';



export default function RecordMic() {
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
  const [visibleMic,setVisibleMic]=useState(true)
    let time :any;

    const handleRecordClick = () => {
      if (record1.isRecording() || record1.isPaused()) {

        record1.stopRecording()
       
      }
      else{
       
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
          height:20,
              barWidth:2,
              barGap:4,
             
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
          setVisibleMic(false)
          if (waveformRef.current) {
            wavesurfer.current = WaveSurfer.create({
              container: waveformRef.current,
              waveColor: 'green',
              progressColor: 'white',
              backend: 'WebAudio',
              cursorColor:"transparent",
              normalize:true,
              height:20,
              barWidth:2,
              barGap:4,
             url:recordedUrl
            });
            
            wavesurfer.current.on('interaction', () => {
              wavesurfer.current.play()
            })
            
            wavesurfer.current.on('ready', () => {
              const timeline = Object.create(TimelinePlugin);
              setAudioURL(recordedUrl)
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
    <div className='w-full' >
    <div ref={waveformRef} className={`mx-24 ${visibleMic ? '' : 'mt-6'}  overscroll-none`}></div>
{visibleMic && <div  ref={waveRefMic} className='mx-24'></div>}
      


<div className="flex mt-12  justify-center mx-[-2rem] items-center gap-5">


<div >
  <Button onClick={handlePlay} disabled={!audioURL}  type="button"  className="text-white bg-red-400 px-5 py-2"><Play className='w-3'/> </Button>
</div>
<div >
  <Button onClick={handleRecordClick} type="button"  variant="outline" className="bg-[#313131] border-none hover:bg-[#313131]">
  {isRecording ? <><div className='flex gap-2 items-center'>Stop<StopCircle/></div></> : <><div className=' text-[#9c9c9c] text-sm'><Mic className='w-4'/></div></>}
    </Button>
</div>
</div>

    </div>
  )
}

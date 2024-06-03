import { PostStore } from '@/store/PostStore';
import { useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';

export default function RecordMic({children}:any) {
    const isRecording=PostStore((state)=>state.isRecording)
    const playRecord=PostStore((state)=>state.playRecord)
    const setAudioUrl=PostStore((state)=>state.setAudioUrl)
    const setAudioBlob=PostStore((state)=>state.setAudioBlob)
    const mediaRecorder = useRef<any>(null);
    const timelineRef = useRef<any>(null);
    const startRecording = async () => {
        if (!navigator.mediaDevices) {
          console.error('Enregistrement non pris en charge par ce navigateur');
          return;
        }
    
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorder.current = new MediaRecorder(stream);
    
        mediaRecorder.current.onstart = () => {
          playRecord(true)
        };
    
        mediaRecorder.current.onstop = () => {
         playRecord(false)
          //clearInterval(time)
        };
    
        mediaRecorder.current.ondataavailable = (event:any) => {
          const audioBlob = new Blob([event.data], { type: 'audio/wav' });
          const audioUrl = URL.createObjectURL(audioBlob);
          setAudioUrl(audioUrl);
          setAudioBlob(audioBlob)
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
          startRecording();
        }
      };
  return (
    <div onClick={handleRecordClick}>
      {children}
    </div>
  )
}

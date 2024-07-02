"use client"
import RecordMic from '@/components/posts/mic/RecordMic';
import AudioVisualizer from '../../components/RecordingView';
import VoicePlayer from '@/components/posts/mic/VoicePlayer';
import "@/styles/App.css"
export default function Home() {
    
  return (
    <div className='flex flex-col min-h-screen justify-between p-24'>
      <VoicePlayer audioFile={"afrobeat.mp3"}/>
    </div>
  );
}

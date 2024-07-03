"use client"
import RecordMic from '@/components/posts/mic/RecordMic';
import AudioVisualizer from '../../components/RecordingView';
import VoicePlayer from '@/components/posts/mic/VoicePlayer';
import "@/styles/App.css"
import PostMic from '@/components/posts/mic/PostMic';
export default function Home() {
    
  return (
    <div className='flex flex-col min-h-screen justify-between p-24'>
      <PostMic/>
    </div>
  );
}

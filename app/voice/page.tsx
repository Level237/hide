"use client"
import AudioVisualizer from '../../components/RecordingView';

export default function Home() {
    
  return (
    <div className='flex flex-col min-h-screen justify-between p-24'>
      <AudioVisualizer/>
    </div>
  );
}

import React, { useRef, useState, useEffect } from 'react';
import WaveSurfer from 'wavesurfer.js';
import RegionsPlugin from 'wavesurfer.js/dist/plugins/regions.js';
import RecordPlugin from 'wavesurfer.js/dist/plugins/record.js';
import TimelinePlugin from 'wavesurfer.js/dist/plugins/timeline.js';

const AudioVisualizer = () => {
  const waveformRef = useRef<any>(null);
  const wavesurfer = useRef<any>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState('');
  const mediaRecorder = useRef<any>(null);

  useEffect(() => {
    if (waveformRef.current) {
      wavesurfer.current = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: 'violet',
        progressColor: 'purple',
        backend: 'WebAudio',
        height: 100,
        normalize: true,
        hideScrollbar: true,
        plugins: [
          RegionsPlugin.create(),
          RecordPlugin.create({}),
          TimelinePlugin.create({
            container: '#timeline',
          }),
        ],
      });

      wavesurfer.current.on('audioprocess', (time:number) => {
        if (isRecording) {
          const duration = wavesurfer.current.getDuration();
          wavesurfer.current.clearRegions();
          wavesurfer.current.addRegion({
            start: 0,
            end: time,
            color: 'rgba(0, 123, 255, 0.1)',
          });
        }
      });
    }

    return () => wavesurfer.current?.destroy();
  }, []);

  const startRecording = async () => {
    if (!navigator.mediaDevices) {
      console.error('Enregistrement non pris en charge par ce navigateur');
      return;
    }

    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorder.current = new MediaRecorder(stream);

    mediaRecorder.current.onstart = () => {
      setIsRecording(true);
      
    };

    mediaRecorder.current.onstop = () => {
      setIsRecording(false);
    };

    mediaRecorder.current.ondataavailable = (event:any) => {
      const audioBlob = new Blob([event.data], { type: 'audio/wav' });
      const audioUrl = URL.createObjectURL(audioBlob);
      setAudioURL(audioUrl);
      wavesurfer.current.load(audioUrl);
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

  const handlePlay = () => {
    wavesurfer.current?.playPause();
  };

  return (
    <div>
      <div id='timeline'></div>
      <button onClick={handleRecordClick}>
        {isRecording ? 'Arrêter' : 'Enregistrer'}
      </button>
      <button onClick={handlePlay} disabled={!audioURL}>
        Lire/Pause
      </button>
      <div ref={waveformRef} className='waveform'></div>
    </div>
  );
};

export default AudioVisualizer;

import React, { useRef, useState, useEffect } from 'react';
import WaveSurfer from 'wavesurfer.js';
import RegionsPlugin from 'wavesurfer.js/dist/plugins/regions.js';
import RecordPlugin from 'wavesurfer.js/dist/plugins/record.js';
import TimelinePlugin from 'wavesurfer.js/dist/plugins/timeline.js';

const AudioVisualizer = () => {
  const waveformRef = useRef(null);
  const wavesurfer = useRef<any>(null);
  const [isRecording, setIsRecording] = useState<any>(false);
  const [audioURL, setAudioURL] = useState<any>('');
  const mediaRecorder = useRef<any>(null);
  const [recordingTime, setRecordingTime] = useState(0);
  const timelineRef = useRef<any>(null);

  let time :any;
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
            container: timelineRef.current,
          }),
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
        
        setIsRecording(false);
        console.log("stoping");
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
      setIsRecording(true);
      time = setInterval(() => {
        setRecordingTime((prevTime) => prevTime + 1);
      }, 1000);
      wavesurfer.current.empty();
    };

    mediaRecorder.current.onstop = () => {
      setIsRecording(false);
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
    <div>
      <div id='timeline' ref={timelineRef}>{formatTime(recordingTime)}</div>
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

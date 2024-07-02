import { BellOff, MoveDown, MoveUp, Pause, Play, VolumeX } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import WaveSurfer from "wavesurfer.js"


const formWaveSurferOptions=(ref:any)=>({
    container:ref,
    waveColor:'#ccc',
    progressColor:"#0178ff",
    cursorColor:"transparent",
    responsive:true,
    height:80,
    normalize:true,
    backend:"WebAudio",
    barWidth:2,
    barGap:3,
})
function formatTime(duration: number) {
    let date=new Date(0)
    date.setSeconds(duration)
    return date.toISOString().substr(11,8)
}


const VoicePlayer: React.FC<{ audioFile: string }>=({ audioFile }) =>{
    console.log(audioFile)
    const waveformRef=useRef(null)
    const wavesurfer=useRef<any>(null)
    const [playing,setPlaying]=useState(false)
    const [volume,setVolume]=useState(0.5)
    const [muted,setMuted]=useState(false);
    const [duration,setDuration]=useState(0);
    const [currentTime,setCurrentTime]=useState(0)
    const [audioFileName,setaudioFileName]=useState('')
    
    useEffect(()=>{
        const options:any=formWaveSurferOptions(waveformRef.current)
        wavesurfer.current=WaveSurfer.create(options)
        wavesurfer.current.load(audioFile)

        wavesurfer.current.on('ready',()=>{
            setVolume(wavesurfer.current.getVolume());
            setDuration(wavesurfer.current.getDuration());
            //setaudioFileName(audioFile.split('/').pop())
        })

        wavesurfer.current.on('audioprocess',()=>{
            setCurrentTime(wavesurfer.current.getCurrentTime())
        })

        return ()=>{
            wavesurfer.current.un('audioprocess');
            wavesurfer.current.un('ready');
            wavesurfer.current.destroy()
        }
    },[audioFile])

    const handlePlayPause=()=>{
        setPlaying(!playing)
        wavesurfer.current.playPause()
    }

    const handleVolumeChange=(newVolume:any)=>{
        setVolume(newVolume)
        wavesurfer.current.setVolume(newVolume)
        setMuted(newVolume === 0)
    }

    const handleMute=()=>{
        setMuted(!muted)
        wavesurfer.current.setVolume(muted ? volume : 0)
    }

    const handleVolumeUp=()=>{
       handleVolumeChange(Math.min(volume + 0.1,1))
    }
    const handleVolumeDown=()=>{
        handleVolumeChange(Math.max(volume - 0.1,0))
     }
    return(
        <div id="waveform" ref={waveformRef} style={{ width:'100%' }}>
           <div className="controls">
                <button onClick={handlePlayPause}>
                    {playing ? <Pause/> : <Play/>}
                </button>

                <button onClick={handleMute}>
                {muted ? <BellOff/> : <VolumeX/>}
                </button>

                <input 
                type="range"
                id="volume"
                name="volume"
                min="0"
                max="1"
                step="0.05"
                value="0"
                onChange={(e)=>handleVolumeChange(parseFloat(e.target.value))}
                />

                <button onClick={handleVolumeDown}>
               <MoveDown/>
                </button>
                <button onClick={handleVolumeUp}>
               <MoveUp/>
                </button>

                <div className="audio-info">
                <span>
                    Playing:{audioFileName} <br />
                </span>
                <span>
                    Duration:{formatTime(duration)} | Current time:{' '}
                    {formatTime(currentTime)}   <br />
                </span>
                </div>

                <span>Volume:{Math.round(volume *   100)}%</span>
           </div>
        </div>
    )
}

export default VoicePlayer
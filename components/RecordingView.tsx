import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const formWaveSurferOptions = (ref:any) => ({
  container: ref,
  waveColor: "#eee",
  progressColor: "#2cac5c",
  cursorColor: "OrangeRed",
  barWidth: 3,
  barRadius: 3,
  responsive: true,
  height: 150,
  normalize: true,
  partialRender: true
});

export default function AudioVisualizer() {
  const waveformRef = useRef(null);
  const wavesurfer = useRef<any>(null);
  const [playing, setPlaying] = useState(false);

  const url =
    "hide.mp3";

  useEffect(() => {
    create();

    return () => {
      if (wavesurfer.current) {
        wavesurfer.current.destroy();
      }
    };
  }, []);

  const create = async () => {
    const WaveSurfer = (await import("wavesurfer.js")).default;

    const options = formWaveSurferOptions(waveformRef.current);
    wavesurfer.current = WaveSurfer.create(options);

    wavesurfer.current.load(url);
  };

  const handlePlayPause = () => {
    setPlaying(!playing);
    wavesurfer.current.playPause();
  };

  return (
    <div>
      <div id="waveform" ref={waveformRef} />
      <div className="controls">
        <div onClick={handlePlayPause}>{!playing ? "Слушать" : "Пауза"}</div>
      </div>
      <Link href={{ pathname: "/about" }}>xxx</Link>
    </div>
  );
}

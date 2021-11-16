import React, { useEffect, useRef, useState } from "react";

import WaveSurfer from "wavesurfer.js";

const formWaveSurferOptions = ref => ({
  container: ref,
  waveColor: "grey",
  progressColor: "lightPink",
  cursorColor: "lightPink",
  barWidth: 3,
  barRadius: 3,
  responsive: true,
  height: 400,
  // If true, normalize by the maximum peak instead of 1.0.
  normalize: true,
  // Use the PeakCache to improve rendering speed of large waveforms.
  partialRender: true
});

export default function Waveform({ url }) {
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const [playing, setPlay] = useState(false);
  // const [volume, setVolume] = useState(0.5);

  // create new WaveSurfer instance
  // On component mount and when url changes
  useEffect(() => {
    setPlay(false);

    const options = formWaveSurferOptions(waveformRef.current);
    wavesurfer.current = WaveSurfer.create(options);

    wavesurfer.current.load(url);

    wavesurfer.current.on("ready", function() {
      
    });

    // Removes events, elements and disconnects Web Audio nodes.
    // when component unmount
    return () => wavesurfer.current.destroy();
  }, [url]);

  const handlePlayPause = () => {
    setPlay(!playing);
    wavesurfer.current.playPause();
  };

  return (
    <div>
      <div id="waveform" ref={waveformRef} />
      <div className="controls">
        <button onClick={handlePlayPause}>{!playing ? "Play" : "Pause"}</button>
      </div>
    </div>
  );
}

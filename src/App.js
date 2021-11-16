import React, { useState } from "react";
import "./styles.css";

import Waveform from "./Waveform";
import PlayList from "./PlayList";

// const url = "https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3";

const tracks = [
  {
    id: 0,
    url:
      "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_5MG.mp3"
      
  }
];

export default function App() {
  const [selectedTrack, setSelectedTrack] = useState(tracks[0]);

  return (
    <div className="App">
      <Waveform url={selectedTrack.url} />
      {/* <PlayList
        tracks={tracks}
        selectedTrack={selectedTrack}
        setSelectedTrack={setSelectedTrack}
      /> */}
      <br />
      {/* <p>Wavesurfer.js with React.JS</p> */}
    </div>
  );
}

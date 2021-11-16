import React, { useState } from "react";
import "./styles.css";

import Waveform from "./Waveform";


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
    
    </div>
  );
}

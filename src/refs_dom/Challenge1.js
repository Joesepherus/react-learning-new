import { useState, useRef } from "react";
import Layout from "../Layout";

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef();

  function handlePlay() {
    videoRef.current.play();
    setIsPlaying(true);
  }

  function handlePause() {
    videoRef.current.pause();
    setIsPlaying(false);
  }

  return (
    <Layout>
      <button onClick={isPlaying ? handlePause : handlePlay}>
        {isPlaying ? "Pause" : "Play"}
      </button>
      <video
        width="250"
        ref={videoRef}
        controls
        onPlay={handlePlay}
        onPause={handlePause}
      >
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </Layout>
  );
}

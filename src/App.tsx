import React, { useEffect, useState } from "react";

function Button(props: any) {
  return (
    <button
      onClick={props.onClick}
      style={{ backgroundColor: "green", borderRadius: "25%", color: "white" }}
    >
      {props.children}
    </button>
  );
}

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  const audio = new Audio(
    "https://file-examples.com/storage/fe63e96e0365c0e1e99a842/2017/11/file_example_MP3_5MG.mp3"
  );

  useEffect(() => {
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }

    return () => audio.pause();
  }, [isPlaying]);

  function play() {
    setIsPlaying(true);
  }

  function pause() {
    setIsPlaying(false);
  }

  return (
    <>
      <h1>Hello world!</h1>
      <Button>Previous</Button>
      {isPlaying ? (
        <Button onClick={pause}>Pause</Button>
      ) : (
        <Button onClick={play}>Play</Button>
      )}
      <Button>Next</Button>
    </>
  );
}

import React, { useState } from "react";

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
      <Button>Play / Pause</Button>
      <Button>Next</Button>
    </>
  );
}

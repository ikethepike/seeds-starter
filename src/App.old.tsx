import React, { useState, useEffect } from "react";
import "./App.css";

// import Song from "./song.mp3";

function App() {
  const [color, setColor] = useState("red");
  const [greeting, setGreeting] = useState("u r purrfect");
  const [src, setSrc] = useState("https://placekitten.com/500/501");

  function colorValue() {
    return Math.floor(Math.random() * 255);
  }

  function createColor() {
    setColor(`rgb(${colorValue()}, ${colorValue()}, ${colorValue()})`);
  }

  useEffect(() => {
    if (greeting.includes("bear")) {
      setSrc("https://placebear.com/500/501");
    }

    if (greeting.includes("kitten")) {
      setSrc("https://placekitten.com/500/501");
    }

    if (greeting.includes("dog")) {
      setSrc("https://place.dog/500/501");
    }
  }, [greeting]);

  return (
    <div
      className="App"
      onClick={createColor}
      style={{ background: color, height: "100vh" }}
    >
      <img src={src} alt="" />
      <h1>{greeting}</h1>
      <input
        type="text"
        onChange={(event) => setGreeting(event.target.value)}
        value={greeting}
      />
    </div>
  );
}

export default App;

import React, { useEffect, useRef, useState } from "react";
import AlbumArt from "../AlbumArt";
import ProgressBar from "../ProgressBar";

import "./_NowPlaying.css";
import { Song } from "../../types";

export default function NowPlaying(props: { song: Song }) {
  const [progress, setProgress] = useState(0);
  const audio = useRef(new Audio(props.song.src));

  useEffect(() => {
    audio.current.addEventListener("timeupdate", () => {
      const progress = audio.current.currentTime / audio.current.duration;
      setProgress(progress * 100);
    });
  }, []);

  return (
    <section className="now-playing">
      <AlbumArt src={props.song.cover} alt="Kitty cat" />
      <ProgressBar progressPercent={progress} />

      <button
        onClick={() => {
          audio.current.play();
        }}
      >
        Play
      </button>
    </section>
  );
}

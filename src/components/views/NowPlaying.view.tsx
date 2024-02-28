import React, { useEffect, useRef, useState } from "react";
import AlbumArt from "../AlbumArt";
import ProgressBar from "../ProgressBar";

import "./_NowPlaying.css";

export default function NowPlaying() {
  const [progress, setProgress] = useState(0);
  const audio = useRef(
    new Audio("http://localhost:3000/music/public-domain/pop.mp3")
  );

  return (
    <section className="now-playing">
      <AlbumArt
        src="https://f4.bcbits.com/img/a4058062868_5.jpg"
        alt="Kitty cat"
      />
      <ProgressBar progressPercent={50} />
    </section>
  );
}

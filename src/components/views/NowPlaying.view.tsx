import React, { useEffect, useState } from "react";
import AlbumArt from "../AlbumArt";
import ProgressBar from "../ProgressBar";

let cheat = 0;

export default function NowPlaying() {
  const [progress, setProgress] = useState(0);

  return (
    <section className="now-playing">
      <AlbumArt src="https://placebear.com/500/500" alt="Kitty cat" />
      <ProgressBar progressPercent={50} />
    </section>
  );
}

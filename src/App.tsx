import React, { useEffect, useState } from "react";
import "./App.css";
import "./Reset.css";
import NowPlaying from "./components/views/NowPlaying.view";

import Axios from "axios";
import { Song } from "./types";

const api = Axios.create({
  baseURL: "https://seeds-music-api.fly.dev",
  params: {
    auth: "midsommar",
  },
});

function App() {
  const [song, setSong] = useState<Song>();

  const fetchMusic = async () => {
    const response = await api.get("/api/music");

    const artist = response.data[3];
    const album = artist.albums[0];
    const song = album.songs[0];

    setSong({
      artist: artist.name,
      album: album.name,
      title: album.name,
      cover: `https://seeds-music-api.fly.dev/${album.coverArt}?auth=midsommar`,
      src: `https://seeds-music-api.fly.dev/${song}?auth=midsommar`,
    });
  };

  useEffect(() => {
    fetchMusic();
  }, []);

  return (
    <div className="App">
      {song ? (
        <NowPlaying song={song} />
      ) : (
        <p style={{ color: "white" }}>Loading...</p>
      )}
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import "./App.css";
import "./Reset.css";
import NowPlaying from "./components/views/NowPlaying.view";

import Axios from "axios";
import { Artist, Song } from "./types";

const api = Axios.create({
  baseURL: "https://seeds-music-api.fly.dev",
  params: {
    auth: "midsommar",
  },
});

function App() {
  const [song, setSong] = useState<Song>();
  const [artists, setArtists] = useState<Artist[]>([]);

  const fetchMusic = async () => {
    const response = await api.get("/api/music");

    const artists: Artist[] = [];
    for (const artistItem of response.data) {
      const artist: Artist = {
        name: artistItem.name,
        albums: [],
      };

      artist.albums = artistItem.albums.map((album: any) => {
        return {
          name: album.name,
          coverArt: `https://seeds-music-api.fly.dev/${album.coverArt}?auth=midsommar`,
          songs: [],
        };
      });

      artists.push(artist);
    }
    setArtists(artists);

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
      <section className="artists">
        <ol>
          {artists.map((artist) => (
            <li key={artist.name}>{artist.name}</li>
          ))}
        </ol>
      </section>
      <section className="albums">
        <ol>
          {artists
            .flatMap((artist) => artist.albums)
            .map((album) => (
              <li key={album.name}>
                <img src={album.coverArt} alt="" />
              </li>
            ))}
        </ol>
      </section>
      <section className="songs"></section>
      <footer className="playback"></footer>
    </div>
  );
}

export default App;

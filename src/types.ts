export type Song = {
  artist: string;
  album: string;
  title: string;
  cover: string;
  src: string;
};

export type Artist = {
  picture?: string;
  name: string;
  albums: Album[];
};

export type Album = {
  name: string;
  coverArt: string;
  songs: Song[];
};

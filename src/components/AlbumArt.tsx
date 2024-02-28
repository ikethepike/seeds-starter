import React from "react";

type AlbumArtProps = {
  src: string;
  alt: string;
};

export default function AlbumArt(props: AlbumArtProps) {
  return <img src={props.src} alt={props.alt} />;
}

"use client";
import React, { useState } from "react";
import TopTitle from "./TopTitle";
import MusicCard from "./MusicCard";
import Player from "./Player";

export default function NewReleases({ musics }) {
  const [currentMusic, setCurrentMusic] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = (link) => {
    if (currentMusic === link) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentMusic(link);
      setIsPlaying(true);
    }
  };

  return (
    <div className="mt-16">
      <p className="text-gray-500 text-sm ">NEW TO LISTEN</p>
      <TopTitle title="Releases" />

      <div className="flex flex-wrap justify-between gap-8">
        {musics.slice(0, 8).map((music) => (
          <MusicCard
            key={music.name}
            music={music}
            onPlay={handlePlay}
            isPlaying={currentMusic === music.link && isPlaying}
          />
        ))}
      </div>

      {currentMusic && <Player src={currentMusic} />}
    </div>
  );
}

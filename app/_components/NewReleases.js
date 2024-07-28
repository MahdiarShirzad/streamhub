"use client";
import React, { useState } from "react";
import TopTitle from "./TopTitle";
import MusicCard from "./MusicCard";
import Player from "./Player";

export default function NewReleases({ musics }) {
  const [currentMusic, setCurrentMusic] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = (music) => {
    if (currentMusic && currentMusic.link === music.link) {
      setIsPlaying(!isPlaying);
      console.log(music.link);
    } else {
      setCurrentMusic(music);
      setIsPlaying(true);
    }
  };

  return (
    <div className="mt-16">
      <p className="text-gray-500 text-sm ">NEW TO LISTEN</p>
      <TopTitle title="Releases" adj={"New"} />

      <div className="flex flex-wrap justify-between gap-8">
        {musics.slice(0, 8).map((music) => (
          <MusicCard
            key={music.id}
            music={music}
            onPlay={() => handlePlay(music)}
            isPlaying={
              currentMusic && currentMusic.link === music.link && isPlaying
            }
          />
        ))}
      </div>

      {currentMusic && <Player music={currentMusic} />}
    </div>
  );
}

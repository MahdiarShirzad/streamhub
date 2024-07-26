import React, { useState } from "react";
import MusicCard from "./MusicCard";
import Player from "./Player";

export default function MusicSection({ musics }) {
  const [currentMusic, setCurrentMusic] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = (music) => {
    if (currentMusic && currentMusic.link === music.link) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentMusic(music);
      setIsPlaying(true);
    }
  };

  return (
    <div>
      <div className="flex flex-wrap justify-between gap-8">
        {musics.map((music) => (
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

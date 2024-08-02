"use client";

import { useState } from "react";
import MusicCard from "../../_components/MusicCard";
import Player from "../../_components/Player";

export default function ArtistMusics({ musics }) {
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

  if (!musics || musics.length == 0) {
    return null;
  }

  return (
    <>
      {musics && musics.length > 0 && (
        <div className="mt-20">
          <p className=" text-golden text-2xl font-bold">Artist{`'`}s Musics</p>
          <div className="music-section grid justify-center xl:gap-20 lg:gap-12 md:gap-8 max-md:px-10 mt-8 max-md:gap-y-6">
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

            {currentMusic && <Player music={currentMusic} />}
          </div>
        </div>
      )}
    </>
  );
}

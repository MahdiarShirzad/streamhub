import { useState } from "react";
import MusicCard from "../../_components/MusicCard";
import Player from "../../_components/Player";

export default function AlbumsMusics({ songs }) {
  //   console.log(songs);

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
    <div className="music-section grid justify-center xl:gap-20 lg:gap-12 md:gap-8 max-md:px-10 mt-8 max-md:gap-y-6">
      {songs.map((music) => (
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
  );
}

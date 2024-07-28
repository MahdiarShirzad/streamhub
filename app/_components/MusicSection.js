"use client";
import React, { useEffect, useState } from "react";
import MusicCard from "./MusicCard";
import Player from "./Player";
import { getMusics } from "../_lib/data-service";
import { useRouter, useSearchParams } from "next/navigation";

export default function MusicSection({ initialMusics, initialSort }) {
  const [musics, setMusics] = useState(initialMusics);
  const [currentMusic, setCurrentMusic] = useState(null);
  const [hasMore, setHasMore] = useState(initialMusics.length === 20);
  const [offset, setOffset] = useState(20);
  const [isLoading, setIsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const searchParams = useSearchParams();
  const sort = searchParams.get("sort") || initialSort;

  useEffect(() => {
    const fetchMusics = async () => {
      const newMusics = await getMusics(20, 0, sort);
      setMusics(newMusics);
      setHasMore(newMusics.length === 20);
      setOffset(20);
    };

    fetchMusics();
  }, [sort]);

  const handlePlay = (music) => {
    if (currentMusic && currentMusic.link === music.link) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentMusic(music);
      setIsPlaying(true);
    }
  };

  const loadMoreMusics = async () => {
    setIsLoading(true);
    const moreMusics = await getMusics(20, offset, sort);

    if (moreMusics.length < 20) {
      setHasMore(false);
    }

    setMusics((prevMusics) => [...prevMusics, ...moreMusics]);
    setOffset(offset + moreMusics.length);
    setIsLoading(false);
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

      {hasMore && musics.length > 0 && (
        <button
          onClick={loadMoreMusics}
          className={`load-more-button w-32  bg-golden flex items-center py-3 justify-center rounded-lg mx-auto gap-1 mt-6 text-center ${
            isLoading ? "cursor-not-allowed" : ""
          }`}
          disabled={isLoading}
        >
          {isLoading ? (
            <span>Loading...</span>
          ) : (
            <>
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="remixicon"
              >
                <path d="M3.05469 13H5.07065C5.55588 16.3923 8.47329 19 11.9998 19C15.5262 19 18.4436 16.3923 18.9289 13H20.9448C20.4474 17.5 16.6323 21 11.9998 21C7.36721 21 3.55213 17.5 3.05469 13ZM3.05469 11C3.55213 6.50005 7.36721 3 11.9998 3C16.6323 3 20.4474 6.50005 20.9448 11H18.9289C18.4436 7.60771 15.5262 5 11.9998 5C8.47329 5 5.55588 7.60771 5.07065 11H3.05469Z"></path>
              </svg>
              Load More
            </>
          )}
        </button>
      )}

      {currentMusic && <Player music={currentMusic} />}
    </div>
  );
}

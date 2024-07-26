"use client";
import { useState, useEffect } from "react";
import { getMusics } from "../_lib/data-service";
import MusicSection from "../_components/MusicSection";
import { supabase } from "../_lib/supabase";

const Page = () => {
  const [totalMusics, setTotalMusics] = useState([]);
  const [musics, setMusics] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getMusics() {
      const { data: musics, error } = await supabase
        .from("musics")
        .select("id, created_at, name, link, artist, album, poster, chart");

      if (error) {
        console.error("Error fetching musics:", error);
        return [];
      }

      setTotalMusics(musics);
    }

    getMusics();
  }, []);

  useEffect(() => {
    const fetchInitialMusics = async () => {
      const initialMusics = await getMusics();
      setMusics(initialMusics);
      setOffset(initialMusics.length);
      if (initialMusics.length < 20) {
        setHasMore(false);
      }
    };

    fetchInitialMusics();
  }, []);

  const loadMoreMusics = async () => {
    setIsLoading(true);
    const moreMusics = await getMusics(20, offset);
    setMusics((prevMusics) => [...prevMusics, ...moreMusics]);
    setOffset(offset + moreMusics.length);
    if (moreMusics.length < 20) {
      setHasMore(false);
    }
    setIsLoading(false);
  };

  return (
    <div className="pt-10 min-h-[700px]">
      {totalMusics && totalMusics.length > 0 && (
        <div className="flex items-center gap-1 mb-10">
          <p className="text-purple-500 text-lg font-semibold">
            {totalMusics.length}
          </p>
          <p className="text-white">Songs in the list</p>
        </div>
      )}
      <MusicSection musics={musics} />
      {hasMore && totalMusics && totalMusics.length > 0 && (
        <button
          onClick={loadMoreMusics}
          className={`load-more-button w-32 text-white bg-purple-700 flex items-center py-3 justify-center rounded-lg mx-auto gap-1  mt-6 text-center ${
            isLoading && "cursor-not-allowed"
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
    </div>
  );
};

export default Page;

// _components/AlbumSection.js
"use client";

import React, { useEffect, useState } from "react";
import AlbumCard from "./AlbumCard";
import { getAlbums } from "../_lib/data-service";
import { useRouter, useSearchParams } from "next/navigation";

export default function AlbumSection({ initialAlbums, initialSort }) {
  const [albums, setAlbums] = useState(initialAlbums);
  const searchParams = useSearchParams();
  const sort = searchParams.get("sort") || initialSort;

  useEffect(() => {
    const fetchAlbums = async () => {
      const sortedAlbums = await getAlbums(sort);
      setAlbums(sortedAlbums);
    };

    fetchAlbums();
  }, [sort]);

  return (
    <div className="w-full">
      <div className="albums-section grid justify-center  gap-10 px-4">
        {albums &&
          albums.length > 0 &&
          albums.map((album) => <AlbumCard album={album} key={album.id} />)}
      </div>
    </div>
  );
}

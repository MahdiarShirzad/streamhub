"use client";

import React, { useEffect, useState } from "react";
import ArtistsCard from "./ArtistsCard";
import { getArtists } from "../_lib/data-service";
import { useRouter, useSearchParams } from "next/navigation";

export default function ArtistsSection({ initialArtists, initialSort }) {
  const [artists, setArtists] = useState(initialArtists);
  const searchParams = useSearchParams();
  const sort = searchParams.get("sort") || initialSort;

  useEffect(() => {
    const fetchArtists = async () => {
      const sortedArtists = await getArtists(sort);
      setArtists(sortedArtists);
    };

    fetchArtists();
  }, [sort]);

  return (
    <div>
      <div className="flex justify-start flex-wrap gap-36 px-4">
        {artists.map((artist) => (
          <ArtistsCard artist={artist} key={artist.id} />
        ))}
      </div>
    </div>
  );
}

import React, { Suspense } from "react";
import ArtistsCard from "./ArtistsCard";

export default function ArtistsSection({ displayedArtists }) {
  return (
    <div>
      <div className="artist-section px-4 justify-center grid gap-12	gap-y-20 ">
        <Suspense>
          {displayedArtists.map((artist) => (
            <ArtistsCard artist={artist} key={artist.id} />
          ))}
        </Suspense>
      </div>
    </div>
  );
}

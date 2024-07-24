import React from "react";
import TopTitle from "./TopTitle";
import ArtistsCard from "./ArtistsCard";

export default function FeaturedArtists({ artists }) {
  return (
    <div className="mt-16">
      <p className="text-gray-500 text-sm ">Best to listen</p>
      <TopTitle title="Artists" adj="Featured" />
      <div className=" flex justify-between px-4">
        {artists.slice(-5).map((artist) => (
          <ArtistsCard artist={artist} key={artist.id} />
        ))}
      </div>
    </div>
  );
}

import Image from "next/image";
import React from "react";

export default function ArtistsCard({ artist }) {
  return (
    <div className="text-white">
      <div className=" relative w-32 h-32">
        <Image
          className="rounded-full"
          fill
          src={artist.image}
          alt={artist.name}
        />
      </div>
      <h3 className=" text-center mt-3 text-xl font-bold">{artist.name}</h3>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ArtistsCard({ artist }) {
  return (
    <Link href={`/artists/${artist.id}`} className="group text-white block  ">
      <div className="relative w-32 h-32 overflow-hidden mx-auto rounded-full">
        <Image
          className="rounded-full transition-transform  duration-300 ease-in-out group-hover:scale-95"
          fill
          src={artist.image}
          alt={artist.name}
        />
      </div>
      <h3 className="text-center mt-3 text-xl font-bold">{artist.name}</h3>
    </Link>
  );
}

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AlbumCard({ album }) {
  return (
    <Link
      href={`/albums/${album.id}`}
      className="text-white flex justify-between items-center hover:-mt-2 transition-all duration-200 shadow-sm shadow-gray-500 px-3 py-4 w-80 h-36 rounded-lg"
    >
      <div className="relative h-32 w-32">
        <Image
          className="rounded-xl"
          src={album.poster}
          alt={album.name}
          fill
        />
      </div>
      <div className="w-1/2">
        <h2 className="text-center mt-2 text-lg font-semibold capitalize">
          {album.name}
        </h2>
        <h6 className="text-center mt-2 text-sm text-gray-400">
          {album.artist}
        </h6>
      </div>
    </Link>
  );
}

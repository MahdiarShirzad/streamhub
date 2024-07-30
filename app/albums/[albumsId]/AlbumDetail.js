// _components/AlbumDetail.js
"use client";

import Image from "next/image";
import React from "react";

export default function AlbumDetail({ album }) {
  return (
    <div className="pt-8 min-h-[700px]">
      <h1 className="text-golden text-3xl font-bold">{album.name}</h1>
      <p className="text-gray-300 mt-3 mb-8 text-lg">{album.artist}</p>
      <div className="relative h-64 w-64">
        <Image
          className="rounded-xl"
          src={album.poster}
          alt={album.name}
          fill
        />
      </div>
      {/* Display more album details as needed */}
    </div>
  );
}

import Image from "next/image";
import React from "react";

export default function AlbumCard({ album }) {
  return (
    <div className="text-white flex justify-between items-center shadow-sm shadow-gray-500 px-3 py-4 w-80 h-36 rounded-lg">
      <div className="relative h-32 w-32 ">
        <Image
          className="rounded-xl"
          src={album.poster}
          alt={album.name}
          fill
        />
      </div>
      <div className=" w-1/2">
        <h2 className="text-center mt-2 text-lg font-semibold capitalize">
          {album.name}
        </h2>
        <h6 className="text-center mt-2 text-sm text-gray-400">
          {album.artist}
        </h6>
      </div>
    </div>
  );
}

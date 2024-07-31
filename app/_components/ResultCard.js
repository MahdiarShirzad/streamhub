import Image from "next/image";
import React from "react";

export default function ResultCard({ music, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer flex items-start gap-5 px-4 py-2 my-1 border-b border-black"
    >
      <div className="relative w-12 h-12">
        <Image
          className="rounded-lg"
          src={music.poster}
          alt={music.name}
          fill
        />
      </div>
      <div>
        <p className="text-xl font-semibold">{music.name}</p>
        <p>{music.artist}</p>
      </div>
    </div>
  );
}

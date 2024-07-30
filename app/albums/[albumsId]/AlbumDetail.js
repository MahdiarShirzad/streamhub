"use client";

import Image from "next/image";
import AlbumsMusics from "./AlbumsMusics";
import Link from "next/link";

export default function AlbumDetail({ album, songs, artist }) {
  const artistId = Array.isArray(artist) ? artist[0].id : artist.id;

  return (
    <div className="pt-8 min-h-[700px]">
      <div className="flex items-start gap-20">
        <div className="relative h-64 w-64">
          <Image
            className="rounded-xl"
            src={album.poster}
            alt={album.name}
            fill
          />
        </div>
        <div>
          <h1 className="text-golden text-4xl font-extrabold">{album.name}</h1>
          <Link
            href={`/artists/${artistId}`}
            className="text-gray-300 mt-3 block text-lg hover:underline"
          >
            {album.artist}
          </Link>
        </div>
      </div>
      <AlbumsMusics songs={songs} />
    </div>
  );
}

import React from "react";
import AlbumCard from "../../_components/AlbumCard";

export default function ArtistAlbums({ albums }) {
  return (
    <div className="mt-20">
      <p className=" text-golden text-2xl font-bold">Artist{`'`}s Albums</p>
      <div className="flex justify-start  gap-28  mt-5">
        {albums &&
          albums.length > 0 &&
          albums.map((album) => <AlbumCard album={album} key={album.id} />)}
      </div>
    </div>
  );
}

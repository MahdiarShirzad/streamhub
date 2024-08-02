import React from "react";
import AlbumCard from "../../_components/AlbumCard";

export default function ArtistAlbums({ albums }) {
  return (
    <>
      {albums && albums.length > 0 && (
        <div className="mt-20">
          <p className=" text-golden text-2xl font-bold">Artist{`'`}s Albums</p>
          <div className="albums-section grid justify-center mt-8 gap-10 px-4">
            {albums.map((album) => (
              <AlbumCard album={album} key={album.id} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

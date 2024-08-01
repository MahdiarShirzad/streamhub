import React from "react";
import TopTitle from "./TopTitle";
import AlbumCard from "./AlbumCard";

export default function TopAlbums({ albums }) {
  return (
    <div className=" mt-12">
      <p className="text-gray-500 text-sm ">Trending to listen</p>
      <TopTitle title="Albums" adj={"Top"} />
      <div className=" top-albums grid justify-center max-lg:gap-y-10">
        {albums.map((album) => (
          <AlbumCard album={album} key={album.id} />
        ))}
      </div>
    </div>
  );
}

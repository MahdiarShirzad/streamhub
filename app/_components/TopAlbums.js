import React from "react";
import TopTitle from "./TopTitle";
import AlbumCard from "./AlbumCard";

export default function TopAlbums({ albums }) {
  console.log(albums);

  return (
    <div className=" mt-12">
      <p className="text-gray-500 text-sm ">Trending to listen</p>
      <TopTitle title="Albums" adj={"Top"} />
      <div className=" flex justify-between">
        {albums.map((album) => (
          <AlbumCard album={album} key={album.id} />
        ))}
      </div>
    </div>
  );
}

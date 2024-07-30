// [albumsId]/page.js
import {
  getAlbumById,
  getArtistsByAlbum,
  getSongsByAlbum,
} from "../../_lib/data-service";
import AlbumDetail from "./AlbumDetail";
import React from "react";

export default async function AlbumDetailPage({ params }) {
  const { albumsId } = params;

  const album = await getAlbumById(albumsId);
  const songs = await getSongsByAlbum(album.name);
  const artist = await getArtistsByAlbum(album.name);

  if (!album) {
    return <div>Album not found</div>;
  }

  return <AlbumDetail album={album} songs={songs} artist={artist} />;
}

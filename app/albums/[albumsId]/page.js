// [albumsId]/page.js
import { getAlbumById } from "../../_lib/data-service";
import AlbumDetail from "./AlbumDetail";
import React from "react";

export default async function AlbumDetailPage({ params }) {
  const { albumsId } = params;

  const album = await getAlbumById(albumsId);

  if (!album) {
    return <div>Album not found</div>;
  }

  return <AlbumDetail album={album} />;
}

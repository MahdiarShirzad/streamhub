import React, { Suspense } from "react";
import {
  getAlbumsByArtist,
  getArtistById,
  getMusicsByArtist,
} from "../../_lib/data-service";
import ArtistDetail from "./ArtistDetail";
import Spinner from "../../_components/Spinner";

export default async function Page({ params }) {
  const { artistId } = params;

  console.log(artistId);

  const artist = await getArtistById(artistId);
  const musics = await getMusicsByArtist(artist.name);
  const albums = await getAlbumsByArtist(artist.name);

  return (
    <Suspense fallback={<Spinner />}>
      <div className=" text-white ">
        {artist ? (
          <ArtistDetail artist={artist} musics={musics} albums={albums} />
        ) : (
          <p>Artist not found</p>
        )}
      </div>
    </Suspense>
  );
}

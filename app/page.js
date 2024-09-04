import React, { Suspense } from "react";
import TopCharts from "./_components/TopCharts";
import {
  getAlbums,
  getArtists,
  getCharts,
  getMusics,
  getTotalMusics,
} from "./_lib/data-service";
import NewReleases from "./_components/NewReleases";
import FeaturedArtists from "./_components/FeaturedArtists";
import TopAlbums from "./_components/TopAlbums";
import Spinner from "./_components/Spinner";

const Page = async () => {
  const charts = await getCharts();
  const musics = await getTotalMusics();
  const artists = await getArtists();
  const albums = await getAlbums();

  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <TopCharts charts={charts} />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <NewReleases musics={musics} />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <FeaturedArtists artists={artists} />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <TopAlbums albums={albums} />
      </Suspense>
    </div>
  );
};

export default Page;

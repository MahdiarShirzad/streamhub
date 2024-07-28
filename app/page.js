import React from "react";
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

const Page = async () => {
  const charts = await getCharts();
  const musics = await getTotalMusics();
  const artists = await getArtists();
  const albums = await getAlbums();

  return (
    <div>
      <TopCharts charts={charts} />
      <NewReleases musics={musics} />
      <FeaturedArtists artists={artists} />
      <TopAlbums albums={albums} />
    </div>
  );
};

export default Page;

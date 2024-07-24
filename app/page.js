import React from "react";
import TopCharts from "./_components/TopCharts";
import { getCharts, getMusics } from "./_lib/data-service";
import NewReleases from "./_components/NewReleases";

const Page = async () => {
  const charts = await getCharts();
  const musics = await getMusics();

  return (
    <div>
      <TopCharts charts={charts} />
      <NewReleases musics={musics} />
    </div>
  );
};

export default Page;

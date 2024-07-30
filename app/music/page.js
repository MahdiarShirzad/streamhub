import { Suspense } from "react";
import MusicSection from "../_components/MusicSection";
import SortBar from "../_components/SortBar";
import { getMusics, getTotalMusics } from "../_lib/data-service";
import Spinner from "../_components/Spinner";

const Page = async ({ searchParams }) => {
  const sort = searchParams.sort || "default";
  const initialMusics = await getMusics(20, 0, sort);
  const totalMusics = await getTotalMusics();

  const sortOptions = [
    { value: "default", label: "Default" },
    { value: "A - Z", label: "A - Z" },
    { value: "Z - A", label: "Z - A" },
  ];

  return (
    <div className="pt-10 min-h-[700px]">
      <p className="text-golden text-3xl font-bold">Top Hits</p>
      <p className=" text-gray-300 mt-3 mb-8 text-lg">
        Dive into the hottest tracks of the moment, curated just for you{" "}
      </p>

      <SortBar
        totalItems={totalMusics.length}
        initialSort={sort}
        options={sortOptions}
        items="musics"
      />
      <Suspense fallback={<Spinner />}>
        <MusicSection initialMusics={initialMusics} initialSort={sort} />
      </Suspense>
    </div>
  );
};

export default Page;

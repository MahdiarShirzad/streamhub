import MusicSection from "../_components/MusicSection";
import SortBar from "../_components/SortBar";
import { getMusics, getTotalMusics } from "../_lib/data-service";

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
      <SortBar
        totalItems={totalMusics.length}
        initialSort={sort}
        options={sortOptions}
        items="musics"
      />
      <MusicSection initialMusics={initialMusics} initialSort={sort} />
    </div>
  );
};

export default Page;

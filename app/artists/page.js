import ArtistsSection from "../_components/ArtistsSection";
import SortBar from "../_components/SortBar";
import { getArtists } from "../_lib/data-service";

const Page = async ({ searchParams }) => {
  const sort = searchParams.sort || "default";
  const artists = await getArtists(sort);

  const sortOptions = [
    { value: "default", label: "Default" },
    { value: "A - Z", label: "A - Z" },
    { value: "Z - A", label: "Z - A" },
  ];

  return (
    <div className="pt-10 min-h-[700px]">
      <SortBar
        totalItems={artists.length}
        initialSort={sort}
        options={sortOptions}
        items="artists"
      />
      <ArtistsSection initialArtists={artists} initialSort={sort} />
    </div>
  );
};

export default Page;

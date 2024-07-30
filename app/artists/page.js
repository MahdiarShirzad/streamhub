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
      <p className="text-golden text-3xl font-bold">Artist Spotlight</p>
      <p className=" text-gray-300 mt-3 mb-8 text-lg">
        Uncover new talent and explore diverse musical styles
      </p>

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

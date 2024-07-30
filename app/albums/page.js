import AlbumSection from "../_components/AlbumSection";
import SortBar from "../_components/SortBar";
import { getAlbums } from "../_lib/data-service";

const Page = async ({ searchParams }) => {
  const sort = searchParams.sort || "default";
  const albums = await getAlbums(sort);

  const sortOptions = [
    { value: "default", label: "Default" },
    { value: "A - Z", label: "A - Z" },
    { value: "Z - A", label: "Z - A" },
  ];

  return (
    <div className="pt-8 min-h-[700px]">
      <p className="text-golden text-3xl font-bold">Must-Listen Albums</p>
      <p className=" text-gray-300 mt-3 mb-8 text-lg">
        Discover the albums that are topping the charts right now
      </p>

      <SortBar
        totalItems={albums.length}
        initialSort={sort}
        options={sortOptions}
      />
      <AlbumSection initialAlbums={albums} initialSort={sort} />
    </div>
  );
};

export default Page;

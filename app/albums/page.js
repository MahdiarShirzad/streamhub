import AlbumCard from "../_components/AlbumCard";
import { getAlbums } from "../_lib/data-service";

export default async function page() {
  const albums = await getAlbums();

  return (
    <div className="pt-8 min-h-[700px]">
      <div className="flex items-center gap-1 mb-10">
        <p className="text-purple-500 text-lg font-semibold">{albums.length}</p>
        <p className="text-white">Albums in the list</p>
      </div>
      <div className="flex justify-between">
        {albums.map((album) => (
          <AlbumCard album={album} key={album.id} />
        ))}
      </div>
    </div>
  );
}

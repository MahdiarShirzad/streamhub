import React from "react";
import AlbumCard from "./AlbumCard";
// import { getAlbums } from "../_lib/data-service";
// import { useRouter, useSearchParams } from "next/navigation";

export default function AlbumSection({ albums }) {
  // const [albums, setAlbums] = useState(initialAlbums);
  // const searchParams = useSearchParams();
  // const sort = searchParams.get("sort") || initialSort;

  return (
    <div className="w-full">
      <div className="albums-section grid justify-center  gap-10 px-4">
        {albums &&
          albums.length > 0 &&
          albums.map((album) => <AlbumCard album={album} key={album.id} />)}
      </div>
    </div>
  );
}

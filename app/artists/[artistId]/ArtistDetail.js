import Image from "next/image";
import ArtistMusics from "./ArtistMusics";
import ArtistAlbums from "./ArtistAlbums";

export default function ArtistDetail({ artist, musics, albums }) {
  console.log("artist: ", artist);
  return (
    <div className="pt-8 min-h-[700px]">
      <div className="flex items-start gap-20">
        <div className="relative h-64 w-64">
          <Image
            className="rounded-xl"
            src={("artist: ", artist.image)}
            alt={artist.name}
            fill
          />
        </div>
        <div className=" w-1/2">
          <h1 className="text-golden text-4xl font-extrabold">{artist.name}</h1>
          <p className=" mt-4 text-gray-300 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
            aspernatur at debitis eligendi et, laborum nesciunt, placeat, quia
            repellat reprehenderit sunt tempore vitae voluptatem. Adipisci
            debitis eos labore nihil sapiente? Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Accusantium consequuntur dolorum,
            eveniet expedita illum vero voluptates! Corporis, distinctio est
            fuga iure obcaecati quasi repellendus, reprehenderit rerum sit unde
            voluptatem voluptates. 164
          </p>
        </div>
      </div>
      <ArtistMusics musics={musics} />
      <ArtistAlbums albums={albums} />
    </div>
  );
}

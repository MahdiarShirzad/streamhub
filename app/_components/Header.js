import SearchBox from "./SearchBox";

export default function Header() {
  return (
    <div className="bg-[#e2a020] absolute w-full top-5 flex px-7 py-4 rounded-lg items-center gap-8">
      <SearchBox />
      <div>mahdiar</div>
    </div>
  );
}

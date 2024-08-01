import SearchBox from "./SearchBox";

export default function Header() {
  return (
    <div className="bg-[#e2a020] absolute right-2 w-full max-lg:w-3/4 xl:w-11/12 top-5 flex px-7 py-4 rounded-lg items-center gap-8 max-sm:gap-3 max-sm:px-2">
      <SearchBox />
      <div>mahdiar</div>
    </div>
  );
}

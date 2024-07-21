export default function Header() {
  return (
    <div className="bg-purple-600 absolute w-full top-5 flex px-7 py-4 rounded-lg items-center gap-8">
      <svg
        className="w-6"
        fill="#fff"
        viewBox="0 0 96 96"
        xmlns="http://www.w3.org/2000/svg"
        transform="matrix(-1, 0, 0, 1, 0, 0)"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <title></title>
          <path d="M54,0A42.051,42.051,0,0,0,12,42a41.5989,41.5989,0,0,0,8.48,25.0356L1.7578,85.7578a5.9994,5.9994,0,1,0,8.4844,8.4844L28.9644,75.52A41.5989,41.5989,0,0,0,54,84,42,42,0,0,0,54,0Zm0,72A30,30,0,1,1,84,42,30.0353,30.0353,0,0,1,54,72Z"></path>
        </g>
      </svg>
      <input
        className="bg-transparent w-full focus:outline-none text-white placeholder:text-gray-100 text-sm"
        placeholder="Type anything to get result..."
      />
      <div>mahdiar</div>
    </div>
  );
}

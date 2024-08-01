"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { searchMusics } from "../_lib/data-service";
import ResultCard from "./ResultCard";

export default function SearchBox() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (query.trim().length > 0) {
      const fetchResults = async () => {
        const musics = await searchMusics(query);
        setResults(musics);
      };
      fetchResults();
    } else {
      setResults([]);
    }
  }, [query]);

  const handleSearch = () => {
    if (query.trim()) {
      router.push(`/music?search=${query}`);
      setQuery("");
      setResults([]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && query.trim()) {
      handleSearch();
    }
  };

  const handleResultClick = (musicName) => {
    router.push(`/music?search=${musicName}`);
    setQuery("");
    setResults([]);
  };

  return (
    <div className="w-full relative">
      <div className="flex items-center gap-10 max-sm:gap-3">
        <button onClick={handleSearch} className="ml-2">
          <svg
            className="w-6"
            fill="#000"
            viewBox="0 0 96 96"
            xmlns="http://www.w3.org/2000/svg"
            transform="matrix(-1, 0, 0, 1, 0, 0)"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <title></title>
              <path d="M54,0A42.051,42.051,0,0,0,12,42a41.5989,41.5989,0,0,0,8.48,25.0356L1.7578,85.7578a5.9994,5.9994,0,1,0,8.4844,8.4844L28.9644,75.52A41.5989,41.5989,0,0,0,54,84,42,42,0,0,0,54,0Zm0,72A30,30,0,1,1,84,42,30.0353,30.0353,0,0,1,54,72Z"></path>
            </g>
          </svg>
        </button>
        <input
          className="bg-transparent w-full focus:outline-none placeholder:text-black text-sm"
          placeholder="Type anything..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      {results.length > 0 && (
        <ul className="bg-golden absolute w-full top-10 z-40 text-black mt-2 rounded-lg shadow-lg">
          {results.map((music) => (
            <ResultCard
              key={music.id}
              music={music}
              onClick={() => handleResultClick(music.name)}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

// _components/SortBar.js
"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

const SortBar = ({ totalItems, initialSort, options, items }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [sortOption, setSortOption] = useState(initialSort);

  useEffect(() => {
    setSortOption(initialSort);
  }, [initialSort]);

  const handleSortChange = (event) => {
    const selectedSort = event.target.value;
    setSortOption(selectedSort);

    const params = new URLSearchParams(searchParams);
    params.set("sort", selectedSort);

    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex items-center gap-12 mb-12">
      <div className="text-white">
        <span className="text-lg font-semibold text-golden mr-2">
          {totalItems}
        </span>
        {items} in the list
      </div>
      <div className="flex gap-2 items-center">
        <p className="text-white">Sort By: </p>
        <select
          className="bg-zinc-700 text-white px-2 py-1 rounded"
          value={sortOption}
          onChange={handleSortChange}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SortBar;

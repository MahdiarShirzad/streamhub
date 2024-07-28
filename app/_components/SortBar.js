"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const SortBar = ({ totalItems, initialSort, options, items }) => {
  const router = useRouter();
  const [sortOption, setSortOption] = useState(initialSort);

  const handleSortChange = (event) => {
    const newSort = event.target.value;
    setSortOption(newSort);
    router.push(`?sort=${newSort}`);
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

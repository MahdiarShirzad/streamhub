import Image from "next/image";
import React from "react";

export default function ChartsCard({ chart }) {
  return (
    <div className="w-52 px-5">
      <div className="w-full relative h-32">
        <Image
          className="rounded-lg"
          fill
          src={chart.poster}
          alt={chart.name}
        />
      </div>

      <h3 className="text-gray-200 font-bold text-lg text-center mt-3">
        {chart.name}
      </h3>
    </div>
  );
}

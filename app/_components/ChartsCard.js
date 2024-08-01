import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ChartsCard({ chart }) {
  return (
    <Link href={`/charts/${chart.id}`} className="group w-full px-5">
      <div className="w-full relative h-32 overflow-hidden transition-transform duration-300 ease-in-out group-hover:-translate-y-1">
        <Image
          className="rounded-lg "
          fill
          src={chart.poster}
          alt={chart.name}
        />
      </div>

      <h3 className="text-gray-200 font-bold text-lg text-center mt-3">
        {chart.name}
      </h3>
    </Link>
  );
}

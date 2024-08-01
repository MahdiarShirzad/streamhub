import React from "react";
import ChartsCard from "./ChartsCard";
import TopTitle from "./TopTitle";

export default function TopCharts({ charts }) {
  return (
    <div className="pt-6">
      <p className="text-gray-500 text-sm ">LISTEN TOP CHARTS</p>
      <TopTitle title="Charts" adj={"Top"} />
      <div className="top-charts grid justify-center gap-12 mt-3">
        {charts.map((chart) => (
          <ChartsCard key={chart.id} chart={chart} />
        ))}
      </div>
    </div>
  );
}

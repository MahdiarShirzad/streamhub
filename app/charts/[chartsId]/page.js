import { getChartsById, getMusicsByCharts } from "../../_lib/data-service";
import ChartsMusic from "./ChartsMusics";

export default async function Page({ params }) {
  const { chartsId } = params;

  const chart = await getChartsById(chartsId);
  const musics = await getMusicsByCharts(chart.name);

  console.log(chart);
  console.log("musics: ", musics);

  return (
    <div className="text-white min-h-[700px] pt-10">
      <p className="text-golden text-4xl font-bold">{chart.name}</p>
      <ChartsMusic musics={musics} />
    </div>
  );
}

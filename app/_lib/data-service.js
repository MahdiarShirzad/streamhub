import { supabase } from "./supabase";

export async function getMusics() {
  const { data: musics, error } = await supabase
    .from("musics")
    .select("id, created_at, name, link, artist, album, poster, chart");

  if (error) {
    console.error("Error fetching musics:", error);
    return [];
  }

  return musics;
}

export async function getAlbums() {
  const { data: albums, error } = await supabase.from("albums").select("*");

  if (error) {
    console.error(error);
    return [];
  }

  return albums;
}

export async function getCharts() {
  const { data: charts, error } = await supabase.from("charts").select("*");

  if (error) {
    console.error(error);
    return [];
  }

  return charts;
}

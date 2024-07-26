import { supabase } from "./supabase";

export async function getMusics(limit = 20, offset = 0) {
  const { data: musics, error } = await supabase
    .from("musics")
    .select("id, created_at, name, link, artist, album, poster, chart")
    .range(offset, offset + limit - 1);

  if (error) {
    console.error("Error fetching musics:", error);
    return [];
  }

  return musics;
}

export async function getAlbums() {
  const { data: albums, error } = await supabase
    .from("albums")
    .select("name, artist, id , poster , created_at");

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

export async function getArtists() {
  const { data: artists, error } = await supabase.from("artist").select("*");

  if (error) {
    console.error(error);
    return [];
  }

  return artists;
}

import { supabase } from "./supabase";

export async function getMusics(limit = 20, offset = 0, sort = "default") {
  let query = supabase
    .from("musics")
    .select("id, created_at, name, link, artist, album, poster, chart")
    .range(offset, offset + limit - 1);

  if (sort === "A - Z") {
    query = query.order("name", { ascending: true });
  } else if (sort === "Z - A") {
    query = query.order("name", { ascending: false });
  }

  const { data: musics, error } = await query;

  if (error) {
    console.error("Error fetching musics:", error);
    return [];
  }

  return musics;
}

export async function getTotalMusics() {
  const { data: musics, error } = await supabase
    .from("musics")
    .select("id, created_at, name, link, artist, album, poster, chart");

  if (error) {
    console.error("Error fetching total musics:", error);
    return [];
  }

  return musics;
}

export async function getAlbums(sort = "default") {
  let query = supabase.from("albums").select("*");

  if (sort === "A - Z") {
    query = query.order("name", { ascending: true });
  } else if (sort === "Z - A") {
    query = query.order("name", { ascending: false });
  }

  const { data: albums, error } = await query;

  if (error) {
    console.error("Error fetching albums:", error);
    return [];
  }

  if (albums === null) {
    console.error("No data returned for albums");
    return [];
  }

  console.log(albums);
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

export async function getArtists(sort = "default") {
  let query = supabase.from("artist").select("*");

  if (sort === "A - Z") {
    query = query.order("name", { ascending: true });
  } else if (sort === "Z - A") {
    query = query.order("name", { ascending: false });
  }

  const { data: artists, error } = await query;

  if (error) {
    console.error("Error fetching artists:", error);
    return [];
  }

  if (artists === null) {
    console.error("No data returned for artists");
    return [];
  }

  return artists;
}

export async function getAlbumById(albumId) {
  const { data: album, error } = await supabase
    .from("albums")
    .select("*")
    .eq("id", albumId)
    .single();

  if (error) {
    console.error("Error fetching album:", error);
    return null;
  }

  return album;
}

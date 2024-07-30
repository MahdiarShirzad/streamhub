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

export async function getArtistById(artistId) {
  const { data: artist, error } = await supabase
    .from("artist")
    .select("*")
    .eq("id", artistId)
    .single();

  if (error) {
    console.error("Error fetching artist:", error);
    return null;
  }

  return artist;
}

export async function getChartsById(chartsId) {
  const { data: chart, error } = await supabase
    .from("charts")
    .select("*")
    .eq("id", chartsId)
    .single();

  if (error) {
    console.error(error);
    return null;
  }

  return chart;
}

export async function getMusicsByCharts(chartName) {
  const { data: musics, error } = await supabase
    .from("musics")
    .select("id, created_at, name, link, artist, album, poster, chart")
    .eq("chart", chartName);

  if (error) {
    console.error(error);
    return null;
  }

  return musics;
}

export async function getSongsByAlbum(albumName) {
  const { data: songs, error } = await supabase
    .from("musics")
    .select("id, created_at, name, link, artist, album, poster, chart")
    .eq("album", albumName);

  if (error) {
    console.error("Error fetching songs by album:", error);
    return [];
  }

  // console.log(songs);
  return songs;
}

export async function getArtistsByAlbum(albumName) {
  const { data: musics, error: musicError } = await supabase
    .from("musics")
    .select("artist")
    .eq("album", albumName);

  if (musicError) {
    console.error("Error fetching musics for album:", musicError);
    return [];
  }

  if (!musics || musics.length === 0) {
    console.error("No musics found for the given album");
    return [];
  }

  const uniqueArtists = [...new Set(musics.map((music) => music.artist))];

  const { data: artists, error: artistError } = await supabase
    .from("artist")
    .select("*")
    .in("name", uniqueArtists);

  if (artistError) {
    console.error("Error fetching artists:", artistError);
    return [];
  }

  if (!artists || artists.length === 0) {
    console.error("No artists found for the given album");
    return [];
  }

  return artists;
}

export async function getMusicsByArtist(artistName) {
  const { data: musics, error: musicError } = await supabase
    .from("musics")
    .select("*")
    .eq("artist", artistName);

  if (musicError) {
    console.error(musicError);
    return null;
  }

  return musics;
}

export async function getAlbumsByArtist(artistName) {
  const { data: albums, error: musicError } = await supabase
    .from("albums")
    .select("*")
    .eq("artist", artistName);

  if (musicError) {
    console.error(musicError);
    return null;
  }

  return albums;
}

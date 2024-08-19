import { allPlaylists, songs as allSongs } from "../../data/data";

export async function GET({ params, request }) {
  const { url } = request;
  const urlObject = new URL(url);
  const id = urlObject.searchParams.get("id");
  const playlist = allPlaylists.find((playlist) => playlist.id === id);

  if (!playlist) {
    // Manejar el caso en el que la playlist no se encuentra
    return new Response(JSON.stringify({ error: "Playlist not found" }), {
      status: 404,
      headers: { "content-type": "application/json" },
    });
  }

  const songs = allSongs.filter((song) => song?.albumId === playlist?.albumId);

  return new Response(JSON.stringify({ playlist, songs }), {
    headers: { "content-type": "application/json" },
  });
}

import { playlists, getPlaylistWithSongs } from '../../data/data';

export async function GET({ params, request }) {
  const { url } = request;
  const urlObject = new URL(url);
  const id = urlObject.searchParams.get('id');

  const playlistId = parseInt(id, 10);  // Convertir el ID a número si es necesario
  if (isNaN(playlistId)) {
    return new Response(JSON.stringify({ error: 'Invalid playlist ID' }), {
      status: 400,
      headers: { "content-type": "application/json" },
    });
  }

  try {
    const playlistWithSongs = await getPlaylistWithSongs(playlistId);
    return new Response(JSON.stringify(playlistWithSongs), {
      headers: { "content-type": "application/json" },
    });
  } catch (error) {
    console.error('Error al obtener la playlist:', error);
    return new Response(JSON.stringify({ error: 'Playlist not found' }), {
      status: 404,
      headers: { "content-type": "application/json" },
    });
  }
}


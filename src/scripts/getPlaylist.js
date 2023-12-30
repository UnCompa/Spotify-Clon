// Playlist-Script
import { promises as fsPromises } from 'fs';
import { readdirSync, statSync } from 'fs';
import { join } from 'path';

const musicFolder = 'public/music/'; // Ruta a tu carpeta de música

async function readPlaylists() {
  try {
    const playlists = [];

    const playlistFolders = readdirSync(musicFolder);

    for (const playlistFolder of playlistFolders) {
      const playlistFolderPath = join(musicFolder, playlistFolder);

      if (statSync(playlistFolderPath).isDirectory()) {
        const playlist = {
          id: String(playlists.length + 1),
          albumId: playlists.length + 1,
          title: playlistFolder,
          color: 'colors.blue',
          cover: '',
          artists: [],
        };

        playlists.push(playlist);
      }
    }

    const jsonOutput = `${JSON.stringify(playlists, null, 2)};\n`;

    await fsPromises.writeFile('src/data/playlists.js', jsonOutput);

    console.log('Playlists guardadas en playlists.js');
  } catch (error) {
    console.error('Error al leer/playlists:', error.message);
  }
}

readPlaylists();

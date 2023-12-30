import { promises as fsPromises } from 'fs';
import { parseFile } from 'music-metadata';
import { readdirSync, statSync } from 'fs';
import { join } from 'path';

const musicFolder = 'public/music/'; // Ruta a tu carpeta de música

async function readMetadata() {
  try {
    const playlists = [];

    const playlistFolders = readdirSync(musicFolder);

    for (const playlistFolder of playlistFolders) {
      const playlistFolderPath = join(musicFolder, playlistFolder);

      if (statSync(playlistFolderPath).isDirectory()) {
        const songs = [];
        const files = readdirSync(playlistFolderPath);

        for (const file of files) {
          if (file.endsWith('.mp3')) {
            const filePath = join(playlistFolderPath, file);
            const metadata = await parseFile(filePath);
            songs.push({
              path: filePath.replace(/\\/g, '/'), // Reemplazar barras invertidas por barras normales
              title: metadata.common.title ?? file,
              duration: metadata.format.duration || 0,
              artist: metadata.common.artist || 'Unknown Artist',
              // Puedes agregar más campos según tus necesidades
            });
          }
        }

        playlists.push({
          playlist: playlistFolder,
          songs: songs,
        });
      }
    }

    // Ahora `playlists` contiene la información de las listas de reproducción y sus canciones
    const formattedPlaylists = playlists.map(playlist => ({
      playlist: playlist.playlist,
      songs: playlist.songs.map(song => ({
        path: song.path.replace(/\\/g, '/'), // Reemplazar barras invertidas por barras normales
        title: song.title || 'Unknown Title',
        duration: song.duration || 0,
        artist: song.artist || 'Unknown Artist',
        // Puedes agregar más campos según tus necesidades
      })),
    }));

    const jsonOutput = JSON.stringify(formattedPlaylists, null, 2);

    // Guardar la información en un archivo JSON
    await fsPromises.writeFile('src/data/metadata.json', jsonOutput);

    console.log('Metadatos guardados en metadata.json');
  } catch (error) {
    console.error('Error al leer/metadatos:', error.message);
  }
}

readMetadata();

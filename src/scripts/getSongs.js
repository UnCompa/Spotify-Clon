// Songs-Script
import { promises as fsPromises } from 'fs';
import { parseFile } from 'music-metadata';
import { readdirSync, statSync } from 'fs';
import { join } from 'path';

const musicFolder = 'public/music/'; // Ruta a tu carpeta de música
const defaultImage = 'https://ak.picdn.net/shutterstock/videos/1100199023/thumb/1.jpg'; // Establece la URL de la imagen por defecto

async function readSongs() {
  try {
    const songs = [];

    const numberedFolders = readdirSync(musicFolder);

    for (const numberedFolder of numberedFolders) {
      const numberedFolderPath = join(musicFolder, numberedFolder);

      if (statSync(numberedFolderPath).isDirectory()) {
        const files = readdirSync(numberedFolderPath);
        let albumSongId = 1; // Reinicia el ID para cada álbum

        for (const file of files) {
          if (file.endsWith('.mp3')) {
            const filePath = join(numberedFolderPath, file);
            const metadata = await parseFile(filePath);
            const durationInSeconds = metadata.format.duration || 0;

            // Obtener la carátula (cover)
            let image = '';
            if (metadata.common.picture && metadata.common.picture.length > 0) {
              const cover = metadata.common.picture[0];
              const base64String = cover.data.toString('base64');
              image = `data:${cover.format};base64,${base64String}`;
            } else {
              // Si no hay carátula, usa la imagen por defecto
              image = defaultImage;
            }

            // Obtener el título o el nombre del archivo
            const title = metadata.common.title || file.replace('.mp3', '') || '';

            songs.push({
              id: albumSongId++,
              albumId: Number(numberedFolder),
              title: title,
              image: image,
              artists: metadata.common.artists || [],
              album: numberedFolder,
              duration: formatDuration(durationInSeconds),
            });
          }
        }
      }
    }

    const jsonOutput = JSON.stringify(songs, null, 2);

    await fsPromises.writeFile('src/data/songs.js', `export const songs = ${jsonOutput};\n`);

    console.log('Metadatos guardados en songs.js');
  } catch (error) {
    console.error('Error al leer/metadatos:', error.message);
  }
}

function formatDuration(durationInSeconds) {
  const minutes = Math.floor(durationInSeconds / 60);
  const seconds = Math.round(durationInSeconds % 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

readSongs();

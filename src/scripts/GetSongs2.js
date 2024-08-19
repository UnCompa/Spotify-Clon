import { promises as fsPromises } from 'fs';
import { parseFile } from 'music-metadata';
import { readdirSync, statSync } from 'fs';
import { join } from 'path';
import sharp from 'sharp'; // Requiere instalar sharp para la optimización de imágenes

const musicFolder = 'public/music/';
const defaultImage = 'https://ak.picdn.net/shutterstock/videos/1100199023/thumb/1.jpg';

async function readSongs() {
  try {
    const numberedFolders = readdirSync(musicFolder);

    for (const numberedFolder of numberedFolders) {
      const numberedFolderPath = join(musicFolder, numberedFolder);

      if (statSync(numberedFolderPath).isDirectory()) {
        const songs = [];
        const files = readdirSync(numberedFolderPath);
        let albumSongId = 1;

        for (const file of files) {
          if (file.endsWith('.mp3')) {
            const filePath = join(numberedFolderPath, file);
            const metadata = await parseFile(filePath);
            const durationInSeconds = metadata.format.duration || 0;

            let image = '';
            if (metadata.common.picture && metadata.common.picture.length > 0) {
              const cover = metadata.common.picture[0];
              const resizedImageBuffer = await sharp(cover.data)
                .resize({ width: 300 }) // Ajusta el tamaño según sea necesario
                .jpeg({ quality: 80 }) // Reduce la calidad para que la imagen sea más ligera
                .toBuffer();

              const base64String = resizedImageBuffer.toString('base64');
              image = `data:image/jpeg;base64,${base64String}`;
            } else {
              image = defaultImage;
            }

            // Usar el nombre del archivo sin la extensión como título
            const title = file.replace('.mp3', '')

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

        const jsonOutput = JSON.stringify(songs, null, 2);
        await fsPromises.writeFile(`src/data/songs/song${numberedFolder}.js`, `export const songs = ${jsonOutput};\n`);
        console.log(`Metadatos guardados en song${numberedFolder}.js`);
      }
    }
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
